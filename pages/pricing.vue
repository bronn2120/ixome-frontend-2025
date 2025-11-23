<template>
  <div class="pricing-page">
    <h1>Pricing Plans</h1>
    <p>Choose a plan that fits your smart home support needs.</p>
    <div class="plans">
      <div class="plan">
        <h2>Basic</h2>
        <p>$9.99/month</p>
        <ul>
          <li>Basic troubleshooting</li>
          <li>Email support</li>
        </ul>
        <button @click="subscribe('basic')">Subscribe</button>
      </div>
      <div class="plan">
        <h2>Pro</h2>
        <p>$19.99/month</p>
        <ul>
          <li>Advanced AI agents</li>
          <li>24/7 chat support</li>
          <li>System optimization</li>
        </ul>
        <button @click="subscribe('pro')">Subscribe</button>
      </div>
      <div class="plan">
        <h2>Enterprise</h2>
        <p>$50.00/month</p>
        <ul>
          <li>Full system integration</li>
          <li>Dedicated support</li>
          <li>Custom AI solutions</li>
        </ul>
        <button @click="subscribe('enterprise')">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
const stripe = ref(null);

onMounted(async () => {
  try {
    stripe.value = await loadStripe(config.public.stripePublishableKey);
  } catch (err) {
    console.error('Failed to load Stripe:', err);
  }
});

const subscribe = async (plan) => {
  if (!stripe.value) {
    console.error('Stripe not loaded');
    return;
  }
  try {
    const priceId = plan === 'basic' ? config.public.stripeBasicPriceId : (plan === 'pro' ? config.public.stripeProPriceId : config.public.stripeEnterprisePriceId);
    const { error } = await stripe.value.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
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
.pricing-page {
  padding: 60px 20px;
  text-align: center;
  max-width: 1200px;
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
.plans {
  display: flex;
  justify-content: space-around;
}
.plan {
  border: 1px solid #ddd;
  padding: 20px;
  width: 30%;
}
h2 {
  font-size: 2rem;
}
ul {
  list-style-type: disc;
  text-align: left;
}
li {
  font-size: 1.1rem;
  margin-bottom: 10px;
}
button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>