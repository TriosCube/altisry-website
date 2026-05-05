<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Banking"
        title="Move beyond traditional banking"
        description="Unlock new revenue streams, reduce costs, and deliver a better customer experience through the power of open banking."
        parent-label="Use Cases"
        parent-href="/use-cases"
        :dark="true"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to us</NuxtLink>
          <NuxtLink to="/get-started" class="btn-outline-white text-base px-8 py-4">Get API keys</NuxtLink>
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
            <p class="section-label">Capabilities</p>
            <h2 class="section-title mb-5">Built for modern banks</h2>
            <p class="section-subtitle mx-auto text-center">
              From onboarding to payments and PFM, Altisry gives banks a complete open banking toolkit.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="feature in features" :key="feature.title" class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" :class="feature.iconBg">
                <svg class="w-5 h-5" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-navy-900 mb-2">{{ feature.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Transform your banking experience"
        subtitle="Give your customers the modern, connected banking experience they expect."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Banking | Altisry Open Banking',
  description: 'Move beyond traditional banking. Unlock new revenue streams and deliver better customer experiences through open banking.',
})

const stats = [
  { value: '60s', label: 'KYC verification time' },
  { value: '40%', label: 'Lower onboarding cost' },
  { value: '5,000+', label: 'Connected institutions' },
  { value: '99.9%', label: 'API uptime SLA' },
]

const features = [
  {
    title: 'Streamlined KYC & onboarding',
    description: 'Replace manual identity checks with instant bank-verified data. Onboard customers in minutes, not days.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
  },
  {
    title: 'Personal Finance Management',
    description: 'Give customers a 360° view of all their accounts with categorised transactions and spending insights.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
  },
  {
    title: 'Multi-banking services',
    description: 'Allow customers to view and manage accounts from multiple banks in one unified interface.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
  },
  {
    title: 'Payment Initiation (PIS)',
    description: 'Enable frictionless account-to-account payments directly from your banking app.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    iconBg: 'bg-brand-100', iconColor: 'text-brand-600',
  },
]
</script>
