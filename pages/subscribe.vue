<template>
  <div class="subscribe-page">
    <h1>Subscribe to IxomeAI</h1>
    <p>Select your plan and complete payment securely.</p>
    <select v-model="selectedPlan">
      <option value="basic">Basic - $9.99/month</option>
      <option value="pro">Pro - $19.99/month</option>
    </select>
    <button @click="subscribe">Proceed to Payment</button>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
const selectedPlan = ref('basic');
const stripe = ref(null);

onMounted(async () => {
  try {
    stripe.value = await loadStripe(config.public.stripePublishableKey);
  } catch (err) {
    console.error('Failed to load Stripe:', err);
  }
});

const subscribe = async () => {
  if (!stripe.value) {
    console.error('Stripe not loaded');
    return;
  }
  try {
    const { error } = await stripe.value.redirectToCheckout({
      lineItems: [{ price: selectedPlan.value === 'basic' ? config.public.stripeBasicPriceId : config.public.stripeProPriceId, quantity: 1 }],
      mode: 'subscription',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
    if (error) throw error;
  } catch (err) {
    console.error('Subscription error:', err.message);
  }
};
</script>

<style scoped>
.subscribe-page {
  padding: 60px 20px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
select {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
}
button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>