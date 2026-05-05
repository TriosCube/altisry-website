<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Automotive"
        title="Faster payments, smarter financing, seamless customer experiences"
        description="Open banking helps dealerships, OEMs, and service providers enable secure, cost-efficient vehicle purchases, credit checks, and in-car payments."
        parent-label="Use Cases"
        parent-href="/use-cases"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to us</NuxtLink>
          <NuxtLink to="/get-started" class="btn-outline text-base px-8 py-4">Get API keys</NuxtLink>
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

      <!-- Use cases grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Applications</p>
            <h2 class="section-title mb-5">Open banking for the full automotive journey</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="item in useCases" :key="item.title" class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all">
              <div class="text-3xl flex-shrink-0">{{ item.emoji }}</div>
              <div>
                <h3 class="font-bold text-navy-900 mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Drive the future of automotive finance"
        subtitle="Open banking is transforming how cars are bought, sold, and financed."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Automotive | Altisry Open Banking',
  description: 'Faster payments, smarter financing, and seamless experiences for dealerships, OEMs and service providers.',
})

const stats = [
  { value: 'Instant', label: 'Deposit & payment processing' },
  { value: '0 fraud', label: 'Account ownership risk' },
  { value: '3 min', label: 'Credit check turnaround' },
  { value: '5,000+', label: 'Connected banks' },
]

const useCases = [
  {
    emoji: '🚗',
    title: 'Vehicle purchase payments',
    description: 'Enable buyers to pay deposits and final payments directly from their bank account — securely, instantly, and with no card fees.',
  },
  {
    emoji: '💳',
    title: 'Automotive financing',
    description: 'Use real-time bank data to power instant credit assessments for vehicle finance applications. No paperwork, no waiting.',
  },
  {
    emoji: '⚡',
    title: 'Instant payouts & refunds',
    description: 'Process trade-in refunds, warranty payouts, and dealer incentives instantly to any bank account.',
  },
  {
    emoji: '🔐',
    title: 'Account ownership verification',
    description: 'Verify that the payment account belongs to the customer before processing any transaction — preventing fraud and chargebacks.',
  },
  {
    emoji: '📊',
    title: 'Fleet & leasing management',
    description: 'Automate recurring lease payments and maintain full visibility of fleet-related cash flows across entities.',
  },
  {
    emoji: '🔧',
    title: 'Service & maintenance billing',
    description: 'Allow customers to pay for services via their bank account at the dealership or remotely from their vehicle.',
  },
]
</script>
