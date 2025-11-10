<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useRoute } from 'vue-router';
console.log('App.vue loaded, current route:', useRoute().path);
</script>
