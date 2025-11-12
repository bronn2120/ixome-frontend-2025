<template>
  <div>
    <BigdataAnalyticsMainBanner />
    <WhatWeDo />
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <div class="section-title">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div class="bar w-12 h-1 bg-purple-700 mx-auto mb-4 rounded-full transition-all duration-300 hover:scale-140 hover:shadow-2xl hover:shadow-purple-600/80 animate-pulse"></div>
          <p class="text-gray-600 max-w-xl mx-auto">Explore our smart home automation solutions.</p>
        </div>
        <Services />
      </div>
    </section>
    <Team />
    <Industries />
    <Discover />
    <ClientOnly><OurRecentStory /></ClientOnly></ClientOnly>
    <Feedback />
    <StartYourFreeTrial />
  </div>
</template>

<script setup>
import BigdataAnalyticsMainBanner from '~/components/BigdataAnalytics/MainBanner.vue';
import WhatWeDo from '~/components/BigdataAnalytics/WhatWeDo.vue';
import Services from '~/components/BigdataAnalytics/Services.vue';
import Team from '~/components/BigdataAnalytics/Team.vue';
import Industries from '~/components/BigdataAnalytics/Industries.vue';
import Discover from '~/components/BigdataAnalytics/Discover.vue';
import OurRecentStory from '~/components/BigdataAnalytics/OurRecentStory.vue';
import Feedback from '~/components/BigdataAnalytics/Feedback.vue';
import StartYourFreeTrial from '~/components/BigdataAnalytics/StartYourFreeTrial.vue';
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'default',
});
</script>

<style scoped>
.section-title .bar {
  transition: all 0.3s ease;
}
.section-title .bar:hover {
  transform: scale(1.4);
  box-shadow: 0 0 25px rgba(108, 77, 244, 0.9);
}
.section-title .bar {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
</style>