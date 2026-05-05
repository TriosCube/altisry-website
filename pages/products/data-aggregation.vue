<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Data Aggregation"
        title="Connect to over 5,000 banks through a single API"
        description="Access real-time account data, transaction history, and balances from thousands of financial institutions worldwide — all through one powerful, unified integration."
        parent-label="Products"
        parent-href="/products"
      >
        <template #cta>
          <NuxtLink to="/get-started" class="btn-primary text-base px-8 py-4">Get API keys</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline-white text-base px-8 py-4">Contact sales</NuxtLink>
        </template>
      </PageHero>

      <!-- Stats -->
      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-brand-600 mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Data types -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">What you get</p>
            <h2 class="section-title mb-5">Rich financial data at your fingertips</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="type in dataTypes" :key="type.title" class="card hover:shadow-md hover:border-brand-400 transition-all">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" :class="type.iconBg">
                <svg class="w-5 h-5" :class="type.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="type.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ type.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ type.description }}</p>
              <ul class="space-y-1.5">
                <li v-for="item in type.items" :key="item" class="text-xs text-gray-500 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Integration section -->
      <section class="py-20 bg-brand-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="flex-1">
              <p class="section-label">Integration</p>
              <h2 class="section-title mb-5">One integration, infinite possibilities</h2>
              <p class="section-subtitle mb-8">
                Our REST API follows industry standards. Get up and running in hours with our comprehensive SDKs and
                documentation.
              </p>
              <div class="space-y-4 mb-8">
                <div v-for="item in integration" :key="item.title" class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-navy-900 text-sm">{{ item.title }}</p>
                    <p class="text-xs text-gray-600">{{ item.desc }}</p>
                  </div>
                </div>
              </div>
              <NuxtLink to="/developers/docs" class="btn-primary">View documentation</NuxtLink>
            </div>
            <div class="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
              <div class="text-brand-600 mb-2"># Connect a bank account</div>
              <div class="text-gray-600">curl -X POST \</div>
              <div class="text-gray-600 ml-4">https://api.altisry.co/v6/connect_sessions/create \</div>
              <div class="text-gray-600 ml-4">-H <span class="text-amber-600">"Authorization: Bearer {API_KEY}"</span> \</div>
              <div class="text-gray-600 ml-4">-H <span class="text-amber-600">"Content-Type: application/json"</span> \</div>
              <div class="text-gray-600 ml-4">-d <span class="text-green-700">'{</span></div>
              <div class="text-green-700 ml-8">"customer_id": "cust_12345",</div>
              <div class="text-green-700 ml-8">"consent": "account_details,transactions",</div>
              <div class="text-green-700 ml-8">"return_to": "https://yourapp.com/callback"</div>
              <div class="text-green-700 ml-4">}'</div>
              <br />
              <div class="text-brand-400">// Response</div>
              <div class="text-gray-600">{"connect_url": "https://connect.altisry.co/...",</div>
              <div class="text-gray-600 ml-2"> "expires_at": "2026-05-05T12:00:00Z"}</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start aggregating financial data today"
        subtitle="Get sandbox access in minutes. No credit card required."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Data Aggregation | Altisry Products',
  description: 'Connect to over 5,000 banks through a single API. Access real-time account data and transaction history worldwide.',
})

const stats = [
  { value: '5,000+', label: 'Banks connected' },
  { value: '50+', label: 'Countries' },
  { value: '99.9%', label: 'API uptime' },
  { value: '< 2s', label: 'Average response time' },
]

const dataTypes = [
  {
    title: 'Account Information',
    description: 'Access comprehensive account details in real time.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
    items: ['Account number & IBAN', 'Current & available balance', 'Account holder name', 'Account type & currency'],
  },
  {
    title: 'Transaction History',
    description: 'Retrieve up to 24 months of enriched transaction data.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
    items: ['Amount, date & description', 'Merchant details', 'Transaction category', 'Reference & metadata'],
  },
  {
    title: 'Financial Statements',
    description: 'Download structured financial data for analysis.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
    items: ['Income statements', 'Balance sheet data', 'Cash flow statements', 'Export to CSV/JSON'],
  },
]

const integration = [
  { title: 'REST API', desc: 'Standard JSON/HTTPS interface with OpenAPI 3.0 spec' },
  { title: 'SDKs available', desc: 'Official SDKs for Python, Node.js, Ruby, PHP, Java, .NET' },
  { title: 'Webhooks', desc: 'Real-time event notifications for account and transaction updates' },
  { title: 'Sandbox environment', desc: 'Full test environment with mock bank connections' },
]
</script>
