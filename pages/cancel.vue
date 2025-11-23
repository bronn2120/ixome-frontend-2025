<template>
  <div class="cancel-page">
    <h1>Subscription Canceled</h1>
    <p>Your subscription was canceled. If this was an error, please try again.</p>
    <NuxtLink to="/pricing">Return to Pricing</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Subscription Canceled',
  meta: [
    { name: 'description', content: 'Subscription canceled.' }
  ]
});
</script>

<style scoped>
.cancel-page {
  padding: 60px 20px;
  text-align: center;
  max-width: 800px;
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
a {
  color: #007bff;
  text-decoration: none;
}
</style>