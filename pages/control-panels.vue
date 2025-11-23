<template>
  <div class="control-panels p-8">
    <h1 class="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">IxomeAI Control Panels</h1>
    <p class="text-center text-gray-600 dark:text-gray-300 mb-12">Manage your smart home integrations</p>
   
    <!-- Basic features visible to all -->
    <section class="basic-section mb-12">
      <h2 class="text-2xl font-semibold mb-6">Basic Controls</h2>
      <p class="text-gray-600 dark:text-gray-300">Standard device management available to all users.</p>
      <!-- Add basic components here if needed -->
    </section>
   
    <!-- Premium features -->
    <section v-if="isProOrEnterprise" class="premium-section space-y-12">
      <LutronControls />
      <Control4Controls />
    </section>
   
    <section v-else class="paywall-section text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <h2 class="text-3xl font-bold mb-4">Upgrade Required</h2>
      <p class="text-xl mb-8">Advanced Lutron & Control4 panels are exclusive to Pro/Enterprise plans.</p>
      <nuxt-link to="/pricing" class="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        Upgrade Now
      </nuxt-link>
    </section>
  </div>
</template>
  
<script setup>
definePageMeta({
  middleware: 'auth'
})

import LutronControls from '~/components/LutronControls.vue'
import Control4Controls from '~/components/Control4Controls.vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const userRole = computed(() => authStore.user?.role || 'guest')
const isProOrEnterprise = computed(() => ['Pro', 'Enterprise'].includes(userRole.value))
</script>