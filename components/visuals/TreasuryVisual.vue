<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden">
    <!-- Header -->
    <div class="px-5 pt-5 pb-4 border-b border-gray-100">
      <div class="flex items-start justify-between mb-4">
        <div>
          <p class="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Group Cash Position</p>
          <p class="text-navy-900 text-2xl font-bold">€ 8,420,150</p>
        </div>
        <span class="text-xs bg-green-500/20 text-green-400 font-bold px-2.5 py-1 rounded-full border border-green-500/30">
          ↑ 4.2%
        </span>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="stat in stats" :key="stat.label" class="bg-gray-50 rounded-lg py-2 px-3 border border-gray-100 text-center">
          <p class="text-navy-900 font-bold text-sm">{{ stat.value }}</p>
          <p class="text-gray-500 text-xs mt-0.5">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Accounts -->
    <div class="px-5 py-4 space-y-3">
      <p class="text-gray-500 text-xs font-semibold uppercase tracking-wider">Top Accounts</p>
      <div v-for="account in accounts" :key="account.entity" class="flex items-center gap-3">
        <div
          class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          :class="account.color"
        >
          {{ account.abbr }}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-navy-900 text-sm font-semibold">{{ account.entity }}</p>
          <p class="text-gray-500 text-xs">{{ account.bank }}</p>
        </div>
        <p class="text-navy-900 text-sm font-bold flex-shrink-0">{{ account.balance }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '12', label: 'Entities' },
  { value: '8', label: 'Banks' },
  { value: '6', label: 'Countries' },
]

const accounts = [
  { entity: 'HQ Germany', abbr: 'HQ', bank: 'Deutsche Bank', balance: '€ 3.2M', color: 'bg-[#15c411]' },
  { entity: 'UK Subsidiary', abbr: 'UK', bank: 'Barclays', balance: '€ 2.8M', color: 'bg-[#34d42f]' },
  { entity: 'France Ops', abbr: 'FR', bank: 'BNP Paribas', balance: '€ 1.6M', color: 'bg-[#56e151]' },
]
</script>
