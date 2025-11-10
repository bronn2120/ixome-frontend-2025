<template>
  <div class="subscribe-page">
    <h1>Subscribe to Ixome</h1>
    <p>Basic Plan: 100 tokens/month - $9.99</p>
    <button @click="checkout">Subscribe Now</button>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { useAuthStore } from '~/stores/auth';

const runtimeConfig = useRuntimeConfig();
const stripe = await loadStripe(runtimeConfig.public.stripePublicKey);

async function checkout() {
  const authStore = useAuthStore();
  const response = await $fetch('/api/stripe/session', {
    method: 'POST',
    body: { plan: 'basic' },
    headers: { Authorization: `Bearer ${authStore.jwt}` },
  });
  const { error } = await stripe.redirectToCheckout({ sessionId: response.id });
  if (error) console.error(error);
}
</script>

<style>
.subscribe-page { text-align: center; margin: 50px; }
</style>
