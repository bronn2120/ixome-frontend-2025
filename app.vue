<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import '~/assets/css/tailwind.css';
useHead({
  title: 'IXome.ai - Smart Home Automation',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'IXome.ai provides AI-driven smart home solutions with Control4 and Lutron support.' }
  ],
});
console.log('app.vue loaded successfully');
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
</style>