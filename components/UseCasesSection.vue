<template>
  <section class="bg-white">
    <!-- Section header -->
    <div class="py-16 md:py-20 text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="section-label">Use Cases</p>
        <h2 class="section-title mb-5">Open Banking in action</h2>
        <p class="section-subtitle mx-auto text-center">
          Explore how businesses of all sizes are harnessing Altisry's open banking solutions to reshape their
          industries.
        </p>
      </div>
    </div>

    <!-- Stacking cards — each card is sticky with increasing top offset -->
    <div class="relative pt-4 md:pt-6" :style="{ paddingBottom: `${useCases.length * 18 + 72}px` }">
      <div
        v-for="(useCase, index) in useCases"
        :key="useCase.id"
        class="sticky pb-4 md:pb-6"
        :style="{
          top: `${72 + index * 18}px`,
          zIndex: index + 1,
        }"
      >
        <!-- Card -->
        <div
          class="mx-3 md:mx-6 lg:mx-10 rounded-3xl overflow-hidden shadow-xl"
          :class="useCase.cardClass"
        >
          <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10 min-h-[72vh] flex items-center">
            <div
              class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full"
              :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
              <!-- Text side -->
              <div class="flex-1 min-w-0">
                <!-- Tag -->
                <div
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border"
                  :class="useCase.tagClass"
                >
                  {{ useCase.tag }}
                </div>

                <h3
                  class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                  :class="useCase.titleClass"
                >
                  {{ useCase.title }}
                </h3>

                <p
                  class="font-semibold text-lg mb-4"
                  :class="useCase.subtitleClass"
                >
                  {{ useCase.subtitle }}
                </p>

                <p
                  class="mb-8 leading-relaxed max-w-lg"
                  :class="useCase.descClass"
                >
                  {{ useCase.description }}
                </p>

                <ul class="space-y-3 mb-10">
                  <li
                    v-for="feature in useCase.features"
                    :key="feature"
                    class="flex items-start gap-3 text-sm"
                    :class="useCase.featureClass"
                  >
                    <svg
                      class="w-5 h-5 flex-shrink-0 mt-0.5"
                      :class="useCase.checkClass"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>

                <NuxtLink
                  :to="useCase.href"
                  class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  :class="useCase.btnClass"
                >
                  Learn more
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
              </div>

              <!-- Visual side -->
              <div class="flex-1 w-full flex justify-center lg:justify-end">
                <div class="w-full max-w-md">
                  <component :is="useCase.visual" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EcommerceVisual from './visuals/EcommerceVisual.vue'
import BankingVisual from './visuals/BankingVisual.vue'
import LendingVisual from './visuals/LendingVisual.vue'
import AutomotiveVisual from './visuals/AutomotiveVisual.vue'
import TreasuryVisual from './visuals/TreasuryVisual.vue'

const useCases = [
  {
    id: 'ecommerce',
    tag: 'E-commerce & Payments',
    title: 'E-commerce & Payment services',
    subtitle: 'Reinvent how your customers pay, verify, and shop',
    description:
      'From frictionless checkout to real-time buyer verification and instant refunds, open banking is reshaping e-commerce.',
    features: [
      'Fast, secure, and card-free checkout',
      'Streamlined customer onboarding & verification',
      'Real-time payment reconciliation & merchant risk check',
      'Global expansion with compliance built in',
    ],
    href: '/use-cases/ecommerce',
    cardClass: 'bg-navy-900',
    tagClass: 'bg-white/10 text-white/80 border-white/20',
    titleClass: 'text-white',
    subtitleClass: 'text-brand-400',
    descClass: 'text-white/60',
    featureClass: 'text-white/80',
    checkClass: 'text-brand-400',
    btnClass: 'bg-white text-navy-900 hover:bg-brand-100',
    visual: EcommerceVisual,
  },
  {
    id: 'banking',
    tag: 'Banking',
    title: 'Banking',
    subtitle: 'Move beyond traditional banking',
    description:
      'Unlock new revenue streams, reduce costs, and deliver a better customer experience through the power of open banking.',
    features: [
      'Streamline customer onboarding & KYC',
      'Enhance Personal Finance Management',
      'Enable Multi-Banking services',
      'Allow frictionless Payment Initiation (PIS)',
    ],
    href: '/use-cases/banking',
    cardClass: 'bg-brand-600',
    tagClass: 'bg-white/15 text-white/90 border-white/25',
    titleClass: 'text-white',
    subtitleClass: 'text-yellow-300',
    descClass: 'text-white/65',
    featureClass: 'text-white/85',
    checkClass: 'text-yellow-300',
    btnClass: 'bg-white text-brand-600 hover:bg-brand-50',
    visual: BankingVisual,
  },
  {
    id: 'lending',
    tag: 'Lending',
    title: 'Lending',
    subtitle: 'Real-time bank data for right lending decisions',
    description:
      'Unlock real-time customer bank data for faster onboarding, smarter credit decisions, and effortless repayments.',
    features: [
      'Streamline the application and onboarding processes',
      'Strike out credit risk from your list',
      'Predict the future by improving your credit scoring',
      'Boost your credit decision from days to minutes',
    ],
    href: '/use-cases/lending',
    cardClass: 'bg-slate-900',
    tagClass: 'bg-green-400/20 text-green-300 border-green-400/30',
    titleClass: 'text-white',
    subtitleClass: 'text-green-400',
    descClass: 'text-white/60',
    featureClass: 'text-white/80',
    checkClass: 'text-green-400',
    btnClass: 'bg-green-500 text-white hover:bg-green-400',
    visual: LendingVisual,
  },
  {
    id: 'automotive',
    tag: 'Automotive',
    title: 'Automotive',
    subtitle: 'Faster payments, smarter financing, seamless customer experiences',
    description:
      'Open banking helps dealerships, OEMs, and service providers enable secure, cost-efficient vehicle purchases, credit checks, and in-car payments.',
    features: [
      'Buy and sell cars with ease',
      'Instant payouts and refunds',
      'Smarter automotive financing',
      'Automated account ownership verification',
    ],
    href: '/use-cases/automotive',
    cardClass: 'bg-navy-800',
    tagClass: 'bg-orange-400/20 text-orange-300 border-orange-400/30',
    titleClass: 'text-white',
    subtitleClass: 'text-orange-400',
    descClass: 'text-white/60',
    featureClass: 'text-white/80',
    checkClass: 'text-orange-400',
    btnClass: 'bg-orange-500 text-white hover:bg-orange-400',
    visual: AutomotiveVisual,
  },
  {
    id: 'treasury',
    tag: 'Treasury Management',
    title: 'Treasury management',
    subtitle: 'A 360-degree view of financials for corporates of any size',
    description:
      'Transform your treasury strategy with unified access to account data from over 5,000 financial institutions worldwide—across multiple banks and regions.',
    features: [
      'Seamless and better informed decisions',
      'Full control over your business finances in one place',
      'Seamless payments — any time, from anywhere',
      'Multi-Entity Treasury Management',
    ],
    href: '/use-cases/treasury',
    cardClass: 'bg-brand-500',
    tagClass: 'bg-white/10 text-white/80 border-white/20',
    titleClass: 'text-white',
    subtitleClass: 'text-white/90',
    descClass: 'text-white/60',
    featureClass: 'text-white/80',
    checkClass: 'text-white',
    btnClass: 'bg-white text-brand-600 hover:bg-brand-50',
    visual: TreasuryVisual,
  },
]
</script>
