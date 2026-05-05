<template>
  <div v-if="post">
    <AppHeader />
    <main>
      <PageHero
        tag="Blog"
        :title="post.title"
        :description="post.excerpt"
        parent-label="Blog"
        parent-href="/blog"
        :dark="true"
      />

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 mb-8">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </NuxtLink>

          <article class="card">
            <div class="flex items-center justify-between gap-4 mb-6 text-xs text-gray-500">
              <span class="font-semibold text-brand-600 uppercase tracking-wider">{{ post.category }}</span>
              <span>{{ post.date }} · {{ post.readTime }}</span>
            </div>

            <div class="space-y-6 text-gray-700 leading-relaxed">
              <p v-for="paragraph in post.content" :key="paragraph" class="text-base">
                {{ paragraph }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="py-16 bg-brand-50 border-t border-brand-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-navy-900 mb-6">More from BLOG</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <NuxtLink
              v-for="item in relatedPosts"
              :key="item.slug"
              :to="`/blog/${item.slug}`"
              class="bg-white rounded-2xl border border-brand-100 p-5 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <p class="text-xs uppercase tracking-wider font-bold text-brand-600 mb-2">{{ item.category }}</p>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-600">{{ item.excerpt }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>

  <div v-else>
    <AppHeader />
    <main class="min-h-screen flex items-center justify-center bg-white">
      <div class="text-center px-4">
        <p class="text-6xl font-black text-brand-100 mb-4">404</p>
        <h1 class="text-2xl font-bold text-navy-900 mb-3">Blog post not found</h1>
        <NuxtLink to="/blog" class="btn-primary">Back to BLOG</NuxtLink>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useSeoMeta } from 'nuxt/app'

const route = useRoute()

const posts = [
  {
    slug: 'launching-bulk-payments-for-enterprise-payout-operations',
    category: 'Product',
    title: 'Launching Bulk Payments for enterprise payout operations',
    excerpt: 'How finance teams can process thousands of payouts with stronger controls and faster reconciliation.',
    date: 'May 2026',
    readTime: '6 min read',
    content: [
      'Bulk payouts are often where finance operations break: too many files, disconnected approvals, and delayed settlement visibility. We built Bulk Payments to remove those bottlenecks without adding complexity for engineering teams.',
      'With a single batch payload, teams can queue thousands of transfers, enforce role-based approval, and monitor each payment in real time from one execution timeline.',
      'The result is faster payroll and supplier runs, fewer manual checks, and cleaner reconciliation outputs that map directly to treasury workflows.',
      'In upcoming releases, we will add advanced scheduling windows and adaptive retry policies for high-volume payout operations across multiple entities.',
    ],
  },
  {
    slug: 'designing-resilient-webhook-pipelines-for-payment-events',
    category: 'Engineering',
    title: 'Designing resilient webhook pipelines for payment events',
    excerpt: 'Best practices for idempotency, retries, and event ordering in production systems.',
    date: 'Apr 2026',
    readTime: '7 min read',
    content: [
      'Webhook pipelines are mission-critical for payment products, yet they often fail under real traffic because idempotency and ordering were treated as optional.',
      'Our first rule is simple: every event must be processable multiple times safely. That means deterministic handlers, deduplication keys, and explicit state transitions.',
      'Retries are necessary, but retries without backoff and visibility can create event storms. We use bounded exponential retry with clear dead-letter paths for operators.',
      'When ordering cannot be guaranteed across distributed workers, systems should reconcile by event version and state freshness, not arrival time alone.',
    ],
  },
  {
    slug: 'where-open-banking-is-heading-in-2026-and-beyond',
    category: 'Market',
    title: 'Where open banking is heading in 2026 and beyond',
    excerpt: 'A practical view of adoption trends in lending, treasury, and account-to-account payments.',
    date: 'Mar 2026',
    readTime: '5 min read',
    content: [
      'Open banking has moved from experimentation to core infrastructure in many product lines, especially lending and treasury where real-time account data directly improves decision quality.',
      'In payments, account-to-account methods are expanding because merchants are now optimizing margin and conversion together instead of treating payment rails as fixed cost.',
      'The strongest adopters are not those adding many disconnected features. They are the teams designing cohesive financial flows where data, verification, and payment execution work as one system.',
      'Over the next phase, we expect operational quality, coverage depth, and compliance automation to matter more than raw endpoint counts.',
    ],
  },
]

const post = computed(() => posts.find((item) => item.slug === route.params.slug))
const relatedPosts = computed(() => posts.filter((item) => item.slug !== route.params.slug).slice(0, 2))

useSeoMeta({
  title: computed(() => post.value ? `${post.value.title} | Altisry BLOG` : 'BLOG | Altisry'),
  description: computed(() => post.value?.excerpt ?? 'Read the latest updates from Altisry BLOG.'),
})
</script>
