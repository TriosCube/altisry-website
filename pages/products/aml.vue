<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="AML Transaction Monitoring"
        title="Automated anti-money laundering monitoring"
        description="Keep your platform safe and compliant with AI-powered transaction monitoring. Detect suspicious activity, meet regulatory requirements, and reduce compliance costs."
        parent-label="Products"
        parent-href="/products"
        :dark="true"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to our AML team</NuxtLink>
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
            <h2 class="section-title mb-5">Comprehensive AML coverage</h2>
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

      <CtaBanner
        title="Protect your platform with intelligent AML monitoring"
        subtitle="Reduce false positives, meet regulatory obligations, and protect your customers."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'AML Transaction Monitoring | Altisry Products',
  description: 'AI-powered AML transaction monitoring. Detect suspicious activity and meet compliance requirements automatically.',
})

const stats = [
  { value: '95%', label: 'Reduction in false positives' },
  { value: 'Real-time', label: 'Transaction screening' },
  { value: '500+', label: 'Risk rules out of the box' },
  { value: 'FATF', label: 'Compliant framework' },
]

const features = [
  {
    title: 'Real-time transaction screening',
    description: 'Every transaction is screened against risk rules and watchlists the moment it is processed.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    iconBg: 'bg-red-100', iconColor: 'text-red-600',
  },
  {
    title: 'Sanctions & PEP screening',
    description: 'Screen customers and counterparties against global sanctions lists and Politically Exposed Person databases.',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    iconBg: 'bg-orange-100', iconColor: 'text-orange-600',
  },
  {
    title: 'Behavioural analytics',
    description: 'ML models build behavioural profiles and flag deviations that may indicate money laundering.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
  },
  {
    title: 'Case management',
    description: 'Built-in workflow for compliance analysts to review, investigate, and document suspicious activity.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
  },
  {
    title: 'SAR filing support',
    description: 'Automated pre-population of Suspicious Activity Reports to streamline regulatory reporting.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
  },
  {
    title: 'Audit trail',
    description: 'Immutable logs of every alert, decision, and action — ready for regulatory inspection at any time.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    iconBg: 'bg-brand-100', iconColor: 'text-brand-600',
  },
]
</script>
