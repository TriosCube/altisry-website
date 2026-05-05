<template>
  <div class="bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden">
    <!-- Header -->
    <div class="px-5 pt-5 pb-4 border-b border-gray-100">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚗</div>
        <div>
          <p class="font-bold text-navy-900 text-sm">Vehicle Purchase</p>
          <p class="text-xs text-gray-500">BMW 3 Series 2024</p>
        </div>
      </div>
      <div class="space-y-2">
        <div class="flex justify-between">
          <span class="text-xs text-gray-500">Purchase price</span>
          <span class="text-sm font-bold text-navy-900">€ 42,500</span>
        </div>
        <div class="flex justify-between">
          <span class="text-xs text-gray-500">Finance term</span>
          <span class="text-sm font-semibold text-navy-900">48 months</span>
        </div>
      </div>
    </div>

    <!-- Verification badge -->
    <div class="px-5 py-3 bg-orange-50 border-b border-orange-100 flex items-center gap-2">
      <svg class="w-4 h-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-xs font-semibold text-orange-700">Account ownership verified instantly</p>
    </div>

    <!-- Payment details -->
    <div class="px-5 py-4 space-y-3">
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">Monthly payment</span>
        <span class="text-base font-bold text-navy-900">€ 885 / mo</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">Interest rate</span>
        <span class="text-sm font-bold text-green-600">3.9% APR</span>
      </div>
      <button class="w-full bg-[#15c411] hover:bg-[#13ad0f] text-white font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 mt-2">
        Confirm & Pay deposit
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</template>
