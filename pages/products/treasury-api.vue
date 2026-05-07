<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-api" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-api)" />
          </svg>
        </div>
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Developer Tools
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Treasury Risk API
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Plug-and-play treasury math. Calculate Net Open Positions (NOP), forecast liquidity, and track FX exposures without building complex algorithms from scratch.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                A standalone, stateless API designed for FinTechs, Neobanks, and corporate treasuries. Generate SDKs in any language and start tracking your spread today.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://api.altisly.com/docs" target="_blank" class="btn-primary bg-blue-600 hover:bg-blue-700 px-8 py-4 text-base text-white rounded-lg font-semibold transition-colors">
                  View API Documentation
                </a>
                <NuxtLink to="/contact" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                  Get API Keys
                </NuxtLink>
              </div>
            </div>

            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <div class="flex items-center gap-2 text-white/40 text-xs font-mono">
                    <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    POST /api/v1/nop/exposure
                  </div>
                  <div class="text-[10px] text-green-400 font-mono bg-green-400/10 px-2 py-0.5 rounded">200 OK - 123ms</div>
                </div>
                <div class="p-6 overflow-x-auto bg-[#0a0c0f]">
                  <pre class="text-sm font-mono text-white/80"><code><span class="text-pink-400">"exposureAndRisk"</span>: {
  <span class="text-blue-300">"netPosition"</span>: <span class="text-yellow-300">2000</span>,
  <span class="text-blue-300">"positionType"</span>: <span class="text-green-300">"LONG"</span>,
  <span class="text-blue-300">"limitUtilizationPercentage"</span>: <span class="text-yellow-300">200</span>,
  <span class="text-blue-300">"isLimitBreached"</span>: <span class="text-yellow-300">true</span>,
  <span class="text-blue-300">"breachAmount"</span>: <span class="text-yellow-300">1000</span>,
  <span class="text-blue-300">"warning"</span>: <span class="text-red-400">"CRITICAL: Long exposure limit breached by 1,000 USD"</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise treasury math, delivered via JSON</h2>
            <p class="text-xl text-gray-600">Integrate real-time risk calculations directly into your backend without writing the complex formulas.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Multi-Day Carryovers</h3>
              <p class="text-gray-600">Automatically roll over positions day-by-day. Calculate weighted averages instantly as new trades hit your ledger.</p>
            </div>

            <!-- Feature 2 -->
            <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Limit Breach Alerts</h3>
              <p class="text-gray-600">Pass your regulatory max Long/Short exposure limits. Get boolean flags and exact breach amounts back instantly.</p>
            </div>

            <!-- Feature 3 -->
            <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Profit Realization</h3>
              <p class="text-gray-600">Track exactly how much spread you're making on every single trade with chronological chronological profit mapping.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Treasury Risk API | Altisly Developer Tools',
  meta: [
    { name: 'description', content: 'Stateless API for Net Open Position (NOP) and Asset-Liability Management calculations.' }
  ]
})
</script>