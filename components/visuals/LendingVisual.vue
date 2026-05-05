<template>
  <div class="bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden">
    <!-- Header -->
    <div class="px-5 pt-5 pb-4 border-b border-gray-100">
      <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Loan Application</p>
      <div class="flex items-start justify-between mb-4">
        <div>
          <p class="text-2xl font-bold text-navy-900">€ 25,000</p>
          <p class="text-xs text-gray-500 mt-0.5">Requested amount</p>
        </div>
        <div class="text-right">
          <p class="text-base font-bold text-green-600">Approved</p>
          <p class="text-xs text-gray-500">In 3 minutes</p>
        </div>
      </div>
      <!-- Credit score -->
      <div>
        <div class="flex justify-between text-xs mb-1.5">
          <span class="text-gray-500 font-medium">Credit Score</span>
          <span class="font-bold text-green-600">742 / 850</span>
        </div>
        <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500" style="width: 87%"></div>
        </div>
      </div>
    </div>

    <!-- Data points -->
    <div class="px-5 py-4">
      <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Data points analysed</p>
      <div class="space-y-3">
        <div v-for="item in dataPoints" :key="item.label" class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" :class="item.bg">
            <svg class="w-4 h-4" :class="item.color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
            </svg>
          </div>
          <span class="text-sm text-navy-900 flex-1">{{ item.label }}</span>
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dataPoints = [
  {
    label: '12 months transaction history',
    bg: 'bg-blue-100', color: 'text-blue-600',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    label: 'Income verification',
    bg: 'bg-green-100', color: 'text-green-600',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
  },
  {
    label: 'Spending behaviour analysis',
    bg: 'bg-purple-100', color: 'text-purple-600',
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
]
</script>
