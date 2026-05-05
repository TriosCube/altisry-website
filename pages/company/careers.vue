<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Careers"
        title="Build the future of open finance with us"
        description="We're a team of curious, ambitious people who love building great technology. Come join us."
        parent-label="Company"
        parent-href="/company"
        :dark="true"
      />

      <!-- Why work here -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Life at Altisry</p>
            <h2 class="section-title mb-5">Why people love working here</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="perk in perks" :key="perk.title" class="card hover:shadow-md transition-all">
              <div class="text-3xl mb-3">{{ perk.emoji }}</div>
              <h3 class="font-bold text-navy-900 mb-2">{{ perk.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ perk.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Open roles -->
      <section class="py-20 bg-brand-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <p class="section-label">Open roles</p>
            <h2 class="section-title mb-5">We're hiring</h2>
          </div>
          <div class="space-y-4">
            <div
              v-for="role in openRoles"
              :key="role.title"
              class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <div class="flex items-center gap-3 mb-1">
                  <h3 class="font-bold text-navy-900">{{ role.title }}</h3>
                  <span class="text-xs bg-brand-100 text-brand-600 font-semibold px-2.5 py-1 rounded-full">{{ role.department }}</span>
                </div>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <span>{{ role.location }}</span>
                  <span>·</span>
                  <span>{{ role.type }}</span>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div class="text-center mt-10">
            <p class="text-gray-600 mb-4">Don't see a role that fits? We're always looking for talented people.</p>
            <NuxtLink to="/contact" class="btn-primary">Send us your CV</NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Careers | Altisry',
  description: 'Join the team building the future of open banking. See open roles at Altisry.',
})

const perks = [
  { emoji: '🌍', title: 'Remote-first', description: 'Work from anywhere. We have team members across 12 countries.' },
  { emoji: '🏥', title: 'Health coverage', description: 'Comprehensive health, dental, and vision insurance for you and your family.' },
  { emoji: '📈', title: 'Equity', description: 'Every employee gets meaningful equity. We win together.' },
  { emoji: '🎓', title: 'Learning budget', description: '€2,000/year learning budget for courses, conferences, and books.' },
  { emoji: '🏖️', title: 'Unlimited PTO', description: 'We trust you to manage your time. Take the time you need.' },
  { emoji: '🚀', title: 'High impact', description: 'Directly shape the product that powers hundreds of financial services globally.' },
]

const openRoles = [
  { title: 'Senior Backend Engineer', department: 'Engineering', location: 'Remote (Europe)', type: 'Full-time' },
  { title: 'Product Manager – Payments', department: 'Product', location: 'London / Remote', type: 'Full-time' },
  { title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote (Europe)', type: 'Full-time' },
  { title: 'Compliance Manager', department: 'Legal & Compliance', location: 'London', type: 'Full-time' },
  { title: 'Sales Engineer', department: 'Sales', location: 'Remote', type: 'Full-time' },
  { title: 'DevSecOps Engineer', department: 'Engineering', location: 'Remote (Europe)', type: 'Full-time' },
]
</script>
