<template>
  <section class="bg-navy-900 py-16 md:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-5">
        {{ title || 'Ready to get started?' }}
      </h2>
      <p class="text-white/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
        {{ subtitle || 'Join 300+ companies already using Altisry to power their open banking services.' }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">
          Contact us
        </NuxtLink>
        <NuxtLink to="/get-started" class="btn-outline-white text-base px-8 py-4">
          Get API keys
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>
