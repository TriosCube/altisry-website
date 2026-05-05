<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Blog"
        title="BLOG"
        description="Read product updates, engineering deep dives, and market analysis from the Altisry team."
      />

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="post in posts"
              :key="post.title"
              :to="`/blog/${post.slug}`"
              class="card hover:shadow-lg hover:border-brand-300 transition-all"
            >
              <p class="text-xs uppercase tracking-wider font-bold text-brand-600 mb-2">{{ post.category }}</p>
              <h2 class="text-xl font-bold text-navy-900 mb-3 leading-tight">{{ post.title }}</h2>
              <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ post.excerpt }}</p>
              <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{{ post.author }}</span>
                <span>{{ post.date }}</span>
              </div>
              <span class="text-sm font-semibold text-brand-600">Read full post</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want updates in your inbox?"
        subtitle="Get product releases and open banking insights from Altisry."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Blog | Altisry',
  description: 'Insights, product updates, and open banking analysis from Altisry.',
})

const posts = [
  {
    slug: 'launching-bulk-payments-for-enterprise-payout-operations',
    category: 'Product',
    title: 'Launching Bulk Payments for enterprise payout operations',
    excerpt: 'How finance teams can process thousands of payouts with stronger controls and faster reconciliation.',
    author: 'Altisry Product Team',
    date: 'May 2026',
  },
  {
    slug: 'designing-resilient-webhook-pipelines-for-payment-events',
    category: 'Engineering',
    title: 'Designing resilient webhook pipelines for payment events',
    excerpt: 'Best practices for idempotency, retries, and event ordering in production systems.',
    author: 'Platform Engineering',
    date: 'Apr 2026',
  },
  {
    slug: 'where-open-banking-is-heading-in-2026-and-beyond',
    category: 'Market',
    title: 'Where open banking is heading in 2026 and beyond',
    excerpt: 'A practical view of adoption trends in lending, treasury, and account-to-account payments.',
    author: 'Strategy Team',
    date: 'Mar 2026',
  },
]
</script>
