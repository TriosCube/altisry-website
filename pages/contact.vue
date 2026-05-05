<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Contact"
        title="Let's talk open banking"
        description="Our team is ready to help you find the right solution for your business."
      />
      <ContactFormSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | Altisry',
  description: 'Get in touch with the Altisry team. We\'ll help you find the right open banking solution.',
})
</script>
