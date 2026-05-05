<template>
  <section
    class="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20"
    :class="dark ? 'bg-[#060809]' : 'bg-gradient-to-br from-brand-50 to-white'"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5" :class="dark ? 'opacity-10' : 'opacity-5'">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" :fill="dark ? 'white' : '#15c411'" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <!-- Gradient orb -->
    <div
      class="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
      :class="dark ? 'bg-brand-400' : 'bg-brand-400'"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 mb-8 text-sm" :class="dark ? 'text-white/50' : 'text-gray-500'">
        <NuxtLink to="/" :class="dark ? 'hover:text-white' : 'hover:text-navy-900'" class="transition-colors">
          Home
        </NuxtLink>
        <span>/</span>
        <NuxtLink
          v-if="parentLabel && parentHref"
          :to="parentHref"
          :class="dark ? 'hover:text-white' : 'hover:text-navy-900'"
          class="transition-colors"
        >
          {{ parentLabel }}
        </NuxtLink>
        <span v-if="parentLabel">/</span>
        <span :class="dark ? 'text-white/80' : 'text-navy-900'">{{ title }}</span>
      </nav>

      <div class="max-w-3xl">
        <div
          v-if="tag"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-5 border"
          :class="dark ? 'bg-white/10 text-white/80 border-white/20' : 'bg-brand-100 text-brand-600 border-brand-200'"
        >
          {{ tag }}
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          :class="dark ? 'text-white' : 'text-navy-900'"
        >
          {{ title }}
        </h1>

        <p
          class="text-xl leading-relaxed mb-8 max-w-2xl"
          :class="dark ? 'text-white/70' : 'text-gray-600'"
        >
          {{ description }}
        </p>

        <div v-if="$slots.cta" class="flex flex-wrap gap-4">
          <slot name="cta" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tag?: string
  dark?: boolean
  parentLabel?: string
  parentHref?: string
}>()
</script>
