import { createError, getCookie, readBody } from 'h3'
import { randomUUID } from 'crypto'
import { sendEnquiryEmail } from '~/server/utils/enquiryMailer'
import { ENQUIRY_RECIPIENT, type EnquiryRecord } from '~/server/utils/enquiriesDb'
import { isValidWriteSession, WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'

const cleanText = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

export default defineEventHandler(async (event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE)
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const body = await readBody(event).catch(() => ({}))
  const sender = cleanText((body as Record<string, unknown>).senderEmail).toLowerCase() || ENQUIRY_RECIPIENT
  const senderName = cleanText((body as Record<string, unknown>).senderName) || 'SMTP Test'
  const note = cleanText((body as Record<string, unknown>).message) || 'This is a temporary SMTP delivery test from Altisly write dashboard endpoint.'

  const now = new Date().toISOString()
  const testEnquiry: EnquiryRecord = {
    id: randomUUID(),
    type: 'contact',
    name: senderName,
    email: sender,
    company: 'Altisly',
    country: 'N/A',
    phone: 'N/A',
    message: note,
    useCase: 'SMTP delivery verification',
    newsletter: false,
    sourcePage: '/api/write/enquiries/test',
    recipient: ENQUIRY_RECIPIENT,
    createdAt: now,
  }

  await sendEnquiryEmail(testEnquiry).catch(() => {
    throw createError({ statusCode: 500, statusMessage: 'SMTP test email failed to send' })
  })

  return {
    success: true,
    recipient: ENQUIRY_RECIPIENT,
    sentAt: now,
  }
})
