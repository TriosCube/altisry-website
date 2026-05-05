<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Bulk Payments"
        title="Send payouts to thousands of recipients in one flow"
        description="Automate payroll, supplier disbursements, refunds, and treasury transfers with a resilient bulk payment engine built for scale."
        parent-label="Products"
        parent-href="/products"
      >
        <template #cta>
          <NuxtLink to="/get-started" class="btn-primary text-base px-8 py-4">Get API keys</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline-white text-base px-8 py-4">Talk to sales</NuxtLink>
        </template>
      </PageHero>

      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-brand-600 mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Capabilities</p>
            <h2 class="section-title mb-5">Built for high-volume payment operations</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feature in features" :key="feature.title" class="card hover:shadow-md hover:border-brand-400 transition-all">
              <div class="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-brand-50">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <p class="section-label">How It Works</p>
            <h2 class="section-title mb-5">Launch bulk payouts in three steps</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div v-for="step in steps" :key="step.title" class="bg-white rounded-2xl border border-brand-100 p-6">
              <p class="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">{{ step.phase }}</p>
              <h3 class="text-lg font-bold text-navy-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Move money at enterprise scale"
        subtitle="Start sending secure bulk payouts with full visibility and control."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Bulk Payments | Altisry Products',
  description: 'Automate payroll, supplier payouts, and refunds with Altisry Bulk Payments.',
})

const stats = [
  { value: '10k+', label: 'Recipients per batch' },
  { value: '< 5m', label: 'Batch processing' },
  { value: '99.9%', label: 'Execution reliability' },
  { value: '24/7', label: 'Status tracking' },
]

const features = [
  {
    title: 'Batch orchestration',
    description: 'Create, validate, and execute large batches with automatic retries and controls.',
    icon: 'M3 7h18M3 12h18M3 17h18',
  },
  {
    title: 'Recipient validation',
    description: 'Validate account details before execution to reduce failures and operational overhead.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Real-time statuses',
    description: 'Track initiated, pending, failed, and settled payments in near real time.',
    icon: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
  },
  {
    title: 'Approval workflows',
    description: 'Set role-based approvals for sensitive payout batches and high-value transactions.',
    icon: 'M12 8c-1.657 0-3 1.343-3 3v3h6v-3c0-1.657-1.343-3-3-3z M6 10V8a6 6 0 1112 0v2',
  },
  {
    title: 'Reconciliation exports',
    description: 'Download structured reports for ERP and finance ops reconciliation.',
    icon: 'M9 17v-6m3 6V7m3 10v-4m-7 8h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Webhook integration',
    description: 'Pipe payment events directly into your internal systems and dashboards.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5',
  },
]

const steps = [
  {
    phase: 'Step 01',
    title: 'Upload batch',
    description: 'Submit recipients, amounts, and metadata through API or dashboard.',
  },
  {
    phase: 'Step 02',
    title: 'Validate and approve',
    description: 'Run checks and approval policies before funds are released.',
  },
  {
    phase: 'Step 03',
    title: 'Execute and monitor',
    description: 'Send payments and follow delivery statuses with live events.',
  },
]
</script>
