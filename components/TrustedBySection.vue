<template>
  <section class="py-16 bg-brand-50 border-y border-brand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-navy-900 font-semibold text-lg">
          Trusted by <span class="text-brand-600 font-bold">300+</span> companies worldwide
        </p>
      </div>

      <!-- Logo marquee -->
      <div class="relative overflow-hidden">
        <div class="flex gap-8 items-center animate-marquee">
          <div
            v-for="company in [...companies, ...companies]"
            :key="company.name + Math.random()"
            class="flex-shrink-0 flex items-center justify-center h-10 px-5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <span class="text-navy-900 font-bold text-lg tracking-tight whitespace-nowrap">{{ company.name }}</span>
          </div>
        </div>
        <!-- Fade edges -->
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-50 to-transparent pointer-events-none z-10"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-50 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = [
  { name: 'CRIF' },
  { name: 'Mambu' },
  { name: 'Sodexo' },
  { name: 'FreshBooks' },
  { name: 'Western Union' },
  { name: 'Finastra' },
  { name: 'Odoo' },
  { name: 'PwC' },
  { name: 'Finom' },
  { name: 'Pleo' },
  { name: 'BudgetBakers' },
]
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
  width: max-content;
}
</style>
