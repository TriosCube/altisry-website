<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="About Altisry"
        title="The team building the future of open finance"
        description="We are a global team of engineers, compliance experts, and financial technologists on a mission to make open banking accessible to every business."
        parent-label="Company"
        parent-href="/company"
        :dark="true"
      />

      <!-- Mission -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p class="section-label">Our mission</p>
              <h2 class="section-title mb-5">Open banking for everyone</h2>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                We believe open banking has the power to reshape financial services — making them more transparent,
                inclusive, and efficient. But that potential is only unlocked when the infrastructure is excellent.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Altisry was founded to build that infrastructure. We provide the connectivity, compliance, and data
                intelligence that businesses need to build the financial products of the future.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div v-for="value in values" :key="value.title" class="card">
                <div class="text-2xl mb-3">{{ value.emoji }}</div>
                <h3 class="font-bold text-navy-900 mb-1.5 text-sm">{{ value.title }}</h3>
                <p class="text-xs text-gray-600 leading-relaxed">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-16 bg-navy-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.value">
              <p class="text-4xl md:text-5xl font-bold text-white mb-2">{{ stat.value }}</p>
              <p class="text-white/50 text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="py-20 bg-brand-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Leadership</p>
            <h2 class="section-title mb-5">The people behind Altisry</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="member in team" :key="member.name" class="card text-center hover:shadow-md transition-all">
              <div
                class="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
                :class="member.avatarBg"
              >
                {{ member.initials }}
              </div>
              <h3 class="font-bold text-navy-900">{{ member.name }}</h3>
              <p class="text-sm text-brand-600 font-medium mt-1">{{ member.role }}</p>
              <p class="text-xs text-gray-500 mt-2 leading-relaxed">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join us on this journey"
        subtitle="We're building the future of open finance. Come build it with us."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Us | Altisry',
  description: 'Learn about the team and mission behind Altisry — building the future of open banking and open finance.',
})

const values = [
  { emoji: '🔒', title: 'Security first', description: 'ISO 27001-certified. We treat your data with the utmost care.' },
  { emoji: '🌍', title: 'Global reach', description: 'Built to work across 50+ countries from day one.' },
  { emoji: '⚡', title: 'Developer love', description: 'We build for developers. Great DX is a core product principle.' },
  { emoji: '🤝', title: 'Partnership', description: 'We succeed when our customers succeed. Always.' },
]

const stats = [
  { value: '10+', label: 'Years of open banking expertise' },
  { value: '300+', label: 'Customers worldwide' },
  { value: '5,000+', label: 'Banks connected' },
  { value: '50+', label: 'Countries covered' },
]

const team = [
  { name: 'Alex Morgan', role: 'CEO & Co-Founder', bio: 'Former fintech executive with 15 years in banking technology.', initials: 'AM', avatarBg: 'bg-brand-100 text-brand-600' },
  { name: 'Sarah Chen', role: 'CTO & Co-Founder', bio: 'Previously led engineering at a top-tier European open banking provider.', initials: 'SC', avatarBg: 'bg-green-100 text-green-600' },
  { name: 'James Wright', role: 'Chief Compliance Officer', bio: 'Former FCA regulator with deep expertise in PSD2 and open banking policy.', initials: 'JW', avatarBg: 'bg-purple-100 text-purple-600' },
  { name: 'Elena Rossi', role: 'VP of Partnerships', bio: 'Built and scaled partner ecosystems across 20+ European markets.', initials: 'ER', avatarBg: 'bg-orange-100 text-orange-600' },
]
</script>
