<template>
  <div class="bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden">
    <!-- Header -->
    <div class="px-5 pt-5 pb-4 flex items-center justify-between border-b border-gray-100">
      <div>
        <p class="text-xs text-gray-500 font-medium">My Accounts</p>
        <p class="text-2xl font-bold text-navy-900 mt-0.5">€ 48,291.30</p>
      </div>
      <span class="text-xs bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full">+2.4%</span>
    </div>

    <!-- Accounts -->
    <div class="px-5 py-4 space-y-3">
      <div v-for="account in accounts" :key="account.name" class="flex items-center gap-3">
        <div
          class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          :class="account.color"
        >
          {{ account.abbr }}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-navy-900">{{ account.name }}</p>
          <p class="text-xs text-gray-500">{{ account.type }}</p>
        </div>
        <p class="text-sm font-bold text-navy-900 flex-shrink-0">{{ account.balance }}</p>
      </div>
    </div>

    <!-- KYC badge -->
    <div class="px-5 pb-5">
      <div class="bg-brand-50 border border-brand-100 rounded-xl p-4 flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-bold text-navy-900">KYC Verified</p>
          <p class="text-xs text-gray-500">Identity verified in under 60 seconds via open banking</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const accounts = [
  { name: 'NatWest', abbr: 'NW', type: 'Current account', balance: '€ 22,100', color: 'bg-purple-700' },
  { name: 'Lloyds Bank', abbr: 'LL', type: 'Savings account', balance: '€ 15,891', color: 'bg-green-800' },
  { name: 'Monzo', abbr: 'MZ', type: 'Business account', balance: '€ 10,300', color: 'bg-pink-600' },
]
</script>
