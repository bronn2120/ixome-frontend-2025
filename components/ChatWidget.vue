<template>
  <div class="chat-widget fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full cursor-pointer shadow-lg">
    <NuxtLink to="/support">Chat with Us</NuxtLink>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';
</script>

<style scoped>
.chat-widget {
  z-index: 1000;
}
</style>