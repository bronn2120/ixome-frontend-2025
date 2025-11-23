<template>
  <div class="success-page">
    <h1>Subscription Successful</h1>
    <p>Thank you for subscribing to IxomeAI! Your smart home support is now active.</p>
    <NuxtLink to="/">Return to Home</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Subscription Success',
  meta: [
    { name: 'description', content: 'Subscription successful.' }
  ]
});
</script>

<style scoped>
.success-page {
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