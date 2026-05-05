<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Pay by Bank"
        title="Pay with any bank from Europe & UK"
        description="Add a lower-cost, higher-conversion payment method to your platform. Account-to-account payments with open banking — instant, secure, and up to 10x cheaper than cards."
        parent-label="Products"
        parent-href="/products"
      >
        <template #cta>
          <NuxtLink to="/get-started" class="btn-primary text-base px-8 py-4">Get API keys</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline text-base px-8 py-4">Contact sales</NuxtLink>
        </template>
      </PageHero>

      <!-- Stats -->
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

      <!-- Features -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Features</p>
            <h2 class="section-title mb-5">Payments built for the modern web</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feature in features" :key="feature.title" class="card hover:shadow-md hover:border-brand-400 transition-all">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" :class="feature.iconBg">
                <svg class="w-5 h-5" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing compare -->
      <section class="py-20 bg-brand-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <p class="section-label">Cost comparison</p>
            <h2 class="section-title mb-5">Keep more of every transaction</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">Payment method</th>
                  <th class="text-center py-3 px-4 text-sm font-semibold text-gray-600">Typical fee</th>
                  <th class="text-center py-3 px-4 text-sm font-semibold text-gray-600">Settlement</th>
                  <th class="text-center py-3 px-4 text-sm font-semibold text-gray-600">Chargebacks</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparison" :key="row.method" :class="row.highlight ? 'bg-brand-600 text-white rounded-xl' : 'border-b border-gray-100'">
                  <td class="py-4 px-4 font-semibold text-sm" :class="row.highlight ? 'text-white rounded-l-xl' : 'text-navy-900'">{{ row.method }}</td>
                  <td class="py-4 px-4 text-center text-sm" :class="row.highlight ? 'text-white' : 'text-gray-600'">{{ row.fee }}</td>
                  <td class="py-4 px-4 text-center text-sm" :class="row.highlight ? 'text-white' : 'text-gray-600'">{{ row.settlement }}</td>
                  <td class="py-4 px-4 text-center text-sm" :class="row.highlight ? 'text-white rounded-r-xl' : 'text-gray-600'">{{ row.chargebacks }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start accepting open banking payments"
        subtitle="Lower fees. Faster settlement. Better conversion. Get started today."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Pay by Bank | Altisry Products',
  description: 'Account-to-account payments via open banking. Instant, secure, and up to 10x cheaper than card payments.',
})

const stats = [
  { value: '0.2%', label: 'Typical transaction fee' },
  { value: 'Instant', label: 'Settlement' },
  { value: '99.5%', label: 'Payment success rate' },
  { value: '0', label: 'Chargeback risk' },
]

const features = [
  {
    title: 'Instant A2A payments',
    description: 'Money moves directly from payer to payee bank account — no intermediaries, no delays.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600',
  },
  {
    title: 'Embedded checkout',
    description: 'Drop our pre-built payment UI into your checkout flow with a few lines of code.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
  },
  {
    title: 'Variable recurring payments',
    description: 'Set up subscription and recurring payment mandates with flexible amounts.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
  },
  {
    title: 'Bulk payments',
    description: 'Send hundreds of payouts simultaneously — for payroll, refunds, or supplier payments.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
  },
  {
    title: 'Payment status webhooks',
    description: 'Real-time notifications when payments are initiated, cleared, or fail.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    iconBg: 'bg-brand-100', iconColor: 'text-brand-600',
  },
  {
    title: 'Strong authentication',
    description: 'Every payment is authorised by the customer directly in their bank app — no card details required.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    iconBg: 'bg-red-100', iconColor: 'text-red-600',
  },
]

const comparison = [
  { method: 'Visa / Mastercard', fee: '1.5 – 3%', settlement: '2–3 days', chargebacks: 'High risk', highlight: false },
  { method: 'PayPal', fee: '2.9% + €0.30', settlement: '1–3 days', chargebacks: 'Medium risk', highlight: false },
  { method: 'Altisry Pay by Bank', fee: '~0.2%', settlement: 'Instant', chargebacks: 'None', highlight: true },
  { method: 'SEPA Direct Debit', fee: '0.2–0.5%', settlement: '1–5 days', chargebacks: 'Medium risk', highlight: false },
]
</script>
