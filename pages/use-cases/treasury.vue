<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Treasury Management"
        title="A 360-degree view of financials for corporates of any size"
        description="Transform your treasury strategy with unified access to account data from over 5,000 financial institutions worldwide — across multiple banks and regions."
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
          <div class="flex flex-col lg:flex-row gap-16 items-start">
            <div class="lg:w-2/5">
              <p class="section-label">Treasury Platform</p>
              <h2 class="section-title mb-5">All your finances. One platform.</h2>
              <p class="section-subtitle mb-8">
                Stop toggling between banking portals. Altisry connects all your entities and banks into a single
                real-time view — so your treasury team can act with speed and confidence.
              </p>
              <NuxtLink to="/contact" class="btn-primary">Request a demo</NuxtLink>
            </div>
            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div v-for="feature in features" :key="feature.title" class="card hover:shadow-md hover:border-brand-400 transition-all">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" :class="feature.iconBg">
                  <svg class="w-5 h-5" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                  </svg>
                </div>
                <h3 class="font-bold text-navy-900 mb-1.5 text-sm">{{ feature.title }}</h3>
                <p class="text-xs text-gray-600 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Multi-entity section -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="section-label">Multi-Entity</p>
          <h2 class="text-3xl md:text-4xl font-bold text-navy-900 mb-5">Manage all your entities in one place</h2>
          <p class="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Whether you have 2 or 200 legal entities across multiple countries, Altisry gives your treasury team
            consolidated visibility and control.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="point in multiEntity" :key="point.title" class="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-left">
              <p class="text-3xl font-bold text-brand-600 mb-2">{{ point.stat }}</p>
              <h3 class="font-bold text-navy-900 mb-2">{{ point.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Take control of your corporate treasury"
        subtitle="Connect all your banks and entities into one real-time financial hub."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Treasury Management | Altisry Open Banking',
  description: 'A 360-degree view of financials for corporates of any size. Unified access to 5,000+ financial institutions.',
})

const stats = [
  { value: '5,000+', label: 'Connected banks' },
  { value: 'Real-time', label: 'Balance visibility' },
  { value: '50+', label: 'Countries' },
  { value: '24/7', label: 'Data refresh' },
]

const features = [
  {
    title: 'Cash position dashboard',
    description: 'Real-time consolidated cash view across all entities and banks.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10',
    iconBg: 'bg-brand-100', iconColor: 'text-brand-600',
  },
  {
    title: 'Multi-bank payments',
    description: 'Initiate payments from any connected bank account, any time.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
  },
  {
    title: 'FX exposure tracking',
    description: 'Monitor multi-currency positions and FX risk in real time.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2',
    iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600',
  },
  {
    title: 'Automated reconciliation',
    description: 'Match transactions across accounts and entities automatically.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
  },
]

const multiEntity = [
  { stat: '200+', title: 'Entities supported', desc: 'Scale from a single entity to a complex multinational group without configuration changes.' },
  { stat: '50+', title: 'Countries covered', desc: 'Connect banks across Europe, UK, and beyond through a single unified API.' },
  { stat: '< 1s', title: 'Data latency', desc: 'Real-time balance and transaction data ensures your decisions are always based on current figures.' },
]
</script>
