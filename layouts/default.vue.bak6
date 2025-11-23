<template>
  <div>
    <HeaderFive />
    <slot />
    <Footer />
    <ChatWidget v-if="isChatWidgetAvailable" />
  </div>
</template>

<script setup>
import HeaderFive from '~/components/HeaderFive.vue';
import Footer from '~/components/Footer.vue';
import { defineAsyncComponent, ref, onMounted } from 'vue';

const ChatWidget = defineAsyncComponent({
  loader: () => import('~/components/ChatWidget.vue').catch((err) => {
    console.error('ChatWidget.vue import failed:', err);
    return Promise.resolve({ template: '<div></div>' });
  }),
  suspense: true,
});
const isChatWidgetAvailable = ref(true);

onMounted(() => {
  console.log('default.vue mounted - Checking ChatWidget availability');
  import('~/components/ChatWidget.vue').catch((err) => {
    console.error('ChatWidget.vue not found or failed to load:', err);
    isChatWidgetAvailable.value = false;
  });
});
</script>

<style scoped>
/* Global styles if needed */
</style>