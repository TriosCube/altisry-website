<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Partnerships"
        title="Grow together with Altisry"
        description="Join our partner ecosystem and help businesses harness the power of open banking. We offer reseller, referral, and technology integration programmes."
        parent-label="Company"
        parent-href="/company"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Apply to partner</NuxtLink>
          <NuxtLink to="/company/about" class="btn-outline text-base px-8 py-4">Learn about us</NuxtLink>
        </template>
      </PageHero>

      <!-- Partner types -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Partnership programmes</p>
            <h2 class="section-title mb-5">Find the right programme for you</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="program in programs" :key="program.title" class="card hover:shadow-lg hover:border-brand-400 transition-all">
              <div class="text-4xl mb-4">{{ program.emoji }}</div>
              <h3 class="text-xl font-bold text-navy-900 mb-3">{{ program.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-5">{{ program.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="benefit in program.benefits" :key="benefit" class="flex items-start gap-2 text-sm text-gray-600">
                  <svg class="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
              <NuxtLink to="/contact" class="btn-primary w-full text-center text-sm">Apply now</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to partner with Altisry?"
        subtitle="Get in touch and our partnership team will reach out within 48 hours."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Partnerships | Altisry',
  description: 'Join the Altisry partner ecosystem. Reseller, referral, and technology integration programmes available.',
})

const programs = [
  {
    emoji: '🤝',
    title: 'Reseller Partner',
    description: 'Resell Altisry products to your clients and earn revenue share on every deal you bring in.',
    benefits: [
      'Competitive revenue share',
      'Co-selling with our sales team',
      'Access to partner portal',
      'Marketing & sales materials',
      'Dedicated partner success manager',
    ],
  },
  {
    emoji: '💡',
    title: 'Referral Partner',
    description: 'Refer customers to Altisry and earn a commission on every successful conversion.',
    benefits: [
      'Simple referral tracking',
      'Commission per conversion',
      'No sales quota required',
      'Partner badge & certification',
      'Quarterly partner events',
    ],
  },
  {
    emoji: '🔧',
    title: 'Technology Partner',
    description: 'Integrate your platform with Altisry and offer your customers open banking superpowers.',
    benefits: [
      'API sandbox access',
      'Joint go-to-market opportunities',
      'Listed in our partner directory',
      'Technical integration support',
      'Co-branded case studies',
    ],
  },
]
</script>
