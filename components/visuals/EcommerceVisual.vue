<template>
  <div class="bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden">
    <!-- Header -->
    <div class="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="font-bold text-navy-900 text-sm">Checkout</span>
    </div>

    <!-- Product -->
    <div class="px-5 py-4 flex items-center gap-4 border-b border-gray-100">
      <div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">👟</div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-navy-900 text-sm">Running Shoes Pro</p>
        <p class="text-xs text-gray-500 mt-0.5">Size 42 · Black</p>
      </div>
      <p class="font-bold text-navy-900 text-sm flex-shrink-0">€ 129.99</p>
    </div>

    <!-- Bank selection -->
    <div class="px-5 py-4">
      <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Pay with your bank</p>
      <div class="space-y-2">
        <div
          v-for="bank in banks"
          :key="bank.name"
          class="flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer"
          :class="bank.selected
            ? 'border-brand-500 bg-brand-50'
            : 'border-gray-100 hover:border-gray-200'"
        >
          <div
            class="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            :class="bank.color"
          >
            {{ bank.abbr }}
          </div>
          <span class="text-sm font-semibold text-navy-900 flex-1">{{ bank.name }}</span>
          <div
            v-if="bank.selected"
            class="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center"
          >
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div v-else class="w-5 h-5 rounded-full border-2 border-gray-200"></div>
        </div>
      </div>

      <button class="mt-4 w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
        Pay € 129.99
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const banks = [
  { name: 'Deutsche Bank', abbr: 'D', color: 'bg-blue-700', selected: true },
  { name: 'Barclays', abbr: 'B', color: 'bg-sky-600', selected: false },
  { name: 'BNP Paribas', abbr: 'B', color: 'bg-green-700', selected: false },
]
</script>
