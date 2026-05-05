<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Data Enrichment"
        title="Transform raw transaction data into actionable insights"
        description="Our ML-powered data enrichment turns messy bank transaction data into clean, categorised, merchant-identified insights that drive smarter decisions."
        parent-label="Products"
        parent-href="/products"
      >
        <template #cta>
          <NuxtLink to="/get-started" class="btn-primary text-base px-8 py-4">Get API keys</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline text-base px-8 py-4">Request a demo</NuxtLink>
        </template>
      </PageHero>

      <!-- Before/After -->
      <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">The transformation</p>
            <h2 class="section-title mb-5">Raw data → rich intelligence</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Before -->
            <div>
              <p class="font-bold text-gray-500 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="text-red-500">✕</span> Raw transaction data
              </p>
              <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-xs space-y-3">
                <div v-for="raw in rawData" :key="raw" class="text-gray-500 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  {{ raw }}
                </div>
              </div>
            </div>
            <!-- After -->
            <div>
              <p class="font-bold text-brand-600 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="text-green-500">✓</span> Enriched by Altisry
              </p>
              <div class="bg-brand-50 border border-brand-200 rounded-xl p-5 space-y-3">
                <div v-for="enriched in enrichedData" :key="enriched.raw" class="border-b border-brand-100 pb-3 last:border-0 last:pb-0">
                  <p class="text-xs text-gray-500 font-mono mb-1">{{ enriched.raw }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium">{{ enriched.merchant }}</span>
                    <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{{ enriched.category }}</span>
                    <span class="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">{{ enriched.type }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-20 bg-brand-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Enrichment capabilities</p>
            <h2 class="section-title mb-5">Every layer of intelligence</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="feat in features" :key="feat.title" class="card hover:shadow-md hover:border-brand-400 transition-all text-center">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto" :class="feat.iconBg">
                <svg class="w-5 h-5" :class="feat.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 mb-2 text-sm">{{ feat.title }}</h3>
              <p class="text-xs text-gray-600 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Make your data work harder"
        subtitle="Turn any transaction feed into enriched intelligence. Works with data from any source."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Data Enrichment | Altisry Products',
  description: 'ML-powered transaction enrichment. Turn raw bank data into clean, categorised, merchant-identified insights.',
})

const rawData = [
  'AMZN MKTP UK*AB12C 0203 AMAZON.CO.UK GB  £48.99',
  'TFL*TRAVEL CH 0343 CHARGE £4.50',
  'NETFLIX.COM 866-579-7172 CA  €13.99',
  'TESCO STORES 3455 METRO LONDON  £23.14',
]

const enrichedData = [
  { raw: 'AMZN MKTP UK*AB12C...', merchant: 'Amazon UK', category: 'Shopping', type: 'Online retail' },
  { raw: 'TFL*TRAVEL CH 0343...', merchant: 'Transport for London', category: 'Transport', type: 'Public transit' },
  { raw: 'NETFLIX.COM 866...', merchant: 'Netflix', category: 'Entertainment', type: 'Subscription' },
  { raw: 'TESCO STORES 3455...', merchant: 'Tesco', category: 'Groceries', type: 'Supermarket' },
]

const features = [
  {
    title: 'Merchant Identification',
    description: 'Match transactions to 200,000+ merchants with logo, name, and category.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
  },
  {
    title: 'Transaction Categorisation',
    description: 'Auto-classify every transaction into 60+ spending categories.',
    icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
  },
  {
    title: 'Income Detection',
    description: 'Identify salary, freelance, benefits and other income streams automatically.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600',
  },
  {
    title: 'Subscription Detection',
    description: 'Detect and track recurring subscription payments across all merchants.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
  },
]
</script>
