<template>
  <section class="py-20 md:py-28 bg-[#f2fdf1]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        <!-- Left sticky header -->
        <div class="lg:w-2/5 lg:sticky lg:top-24">
          <p class="section-label">Products</p>
          <h2 class="section-title mb-5">
            Find the solutions to your challenges
          </h2>
          <p class="section-subtitle mb-8">
            At Altisry, we've got you covered with a range of unique ready-to-use products. Our open banking platform is
            designed to help you build smart and innovative services through the power of open financial data.
          </p>
          <NuxtLink to="/products" class="btn-primary">
            Explore all products
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Products grid -->
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="product in products"
            :key="product.title"
            class="card group hover:border-[#52e147] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              :class="product.iconBg"
            >
              <svg class="w-5 h-5" :class="product.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.icon" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-navy-900 mb-2">{{ product.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ product.description }}</p>
            <NuxtLink
              :to="product.href"
              class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#15c411] hover:text-[#13ad0f] transition-colors"
            >
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'Data Aggregation',
    description: 'Access thousands of banks globally through a single API. Real-time account data at your fingertips.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    href: '/products/data-aggregation',
  },
  {
    title: 'Pay by Bank',
    description: 'Add a lower-cost payment method to your platform via open banking. Instant, secure A2A payments.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    href: '/products/pay-by-bank',
  },
  {
    title: 'Data Enrichment',
    description: 'Transform raw transaction data into actionable insights powered by machine learning.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    href: '/products/data-enrichment',
  },
  {
    title: 'Open Banking Compliance',
    description: 'Full-stack PSD2/PSD3 compliance solution for banks and EMIs. Become compliant in 1 month.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    href: '/products/compliance',
  },
  {
    title: 'Mobile SCA',
    description: 'Create a deeper level of security with strong customer authentication for mobile apps.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    href: '/products/mobile-sca',
  },
  {
    title: 'AML Transaction Monitoring',
    description: 'Automated anti-money laundering monitoring to keep your platform safe and compliant.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    href: '/products/aml',
  },
]
</script>
