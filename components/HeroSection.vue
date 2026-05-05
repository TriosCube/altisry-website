<template>
  <section class="relative overflow-hidden bg-navy-900 pt-36 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
    <!-- Background grid pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Gradient orbs -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full opacity-20 blur-3xl -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-400 rounded-full opacity-10 blur-3xl translate-y-1/2"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <!-- Report pill — like SaltEdge's announcement banner -->
          <div class="inline-flex items-center gap-2 mb-8">
            <a
              href="#"
              class="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors group"
            >
              <span class="px-2 py-0.5 bg-white/15 border border-white/20 rounded text-xs font-bold text-white tracking-wide">
                Report
              </span>
              State of open banking payments in Europe
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Open Finance.<br />
            Endless possibilities
          </h1>

          <p class="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Harness the power of open banking. Embrace the future of finance.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-7 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-colors text-base shadow-lg shadow-brand-600/30"
            >
              Contact us
            </NuxtLink>
            <NuxtLink
              to="/get-started"
              class="inline-flex items-center justify-center px-7 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors text-base backdrop-blur-sm"
            >
              Get API keys
            </NuxtLink>
          </div>

          <!-- Country flags — SaltEdge style -->
          <div class="flex items-center gap-4 justify-center lg:justify-start">
            <div class="flex items-center gap-1.5">
              <span
                v-for="country in countries.slice(0, 5)"
                :key="country.code"
                :title="country.name"
                class="text-[28px] leading-none cursor-default hover:scale-110 transition-transform"
              >{{ country.flag }}</span>
            </div>
            <span class="text-white/60 text-sm font-medium">+39 countries</span>
          </div>
        </div>

        <!-- Hero Visual -->
        <div class="flex-1 w-full max-w-lg lg:max-w-none">
          <div class="relative">
            <!-- Dashboard mockup card -->
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-white/60 text-xs font-medium uppercase tracking-wider">Total Balance</p>
                  <p class="text-white text-3xl font-bold mt-1">€ 284,920.50</p>
                </div>
                <div class="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-400/30 flex items-center justify-center">
                  <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>

              <!-- Mini chart bars -->
              <div class="flex items-end gap-1.5 h-20 mb-5">
                <div
                  v-for="(bar, i) in chartBars"
                  :key="i"
                  :style="{ height: bar + '%' }"
                  class="flex-1 rounded-sm transition-all"
                  :class="i === chartBars.length - 1 ? 'bg-brand-400' : 'bg-white/20'"
                ></div>
              </div>

              <!-- Connected banks -->
              <div class="space-y-3">
                <p class="text-white/50 text-xs font-medium uppercase tracking-wider">Connected Banks</p>
                <div v-for="bank in connectedBanks" :key="bank.name" class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                      :class="bank.color"
                    >{{ bank.abbr }}</div>
                    <div>
                      <p class="text-white text-sm font-medium">{{ bank.name }}</p>
                      <p class="text-white/50 text-xs">{{ bank.type }}</p>
                    </div>
                  </div>
                  <p class="text-white text-sm font-semibold">{{ bank.balance }}</p>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-navy-900 text-xs font-bold">Payment sent</p>
                <p class="text-gray-500 text-xs">€ 12,450.00</p>
              </div>
            </div>

            <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <p class="text-navy-900 text-xs font-bold">5,000+ banks</p>
                  <p class="text-gray-500 text-xs">50+ countries</p>
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
const countries = [
  { code: 'de', name: 'Germany', flag: '🇩🇪' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'fr', name: 'France', flag: '🇫🇷' },
  { code: 'it', name: 'Italy', flag: '🇮🇹' },
  { code: 'at', name: 'Austria', flag: '🇦🇹' },
  { code: 'es', name: 'Spain', flag: '🇪🇸' },
]

const chartBars = [40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100]

const connectedBanks = [
  { name: 'Deutsche Bank', abbr: 'DB', type: 'Corporate account', balance: '€ 142,800', color: 'bg-blue-600 text-white' },
  { name: 'Barclays', abbr: 'BA', type: 'Current account', balance: '€ 98,320', color: 'bg-sky-500 text-white' },
  { name: 'BNP Paribas', abbr: 'BN', type: 'Savings account', balance: '€ 43,800', color: 'bg-green-600 text-white' },
]
</script>
