<template>
  <div class="services-page">
    <h1>Our Services</h1>
    <p>IxomeAI offers comprehensive support for your smart home systems.</p>
    <ul>
      <li>Real-time troubleshooting for Lutron lighting issues.</li>
      <li>Control4 system optimization and error resolution.</li>
      <li>Snap One device integration and support.</li>
      <li>AI-driven virtual agents for 24/7 assistance.</li>
    </ul>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Services',
  meta: [
    { name: 'description', content: 'Discover the services offered by IxomeAI for smart home support.' }
  ]
});
</script>

<style scoped>
.services-page {
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
ul {
  list-style-type: disc;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}
li {
  font-size: 1.1rem;
  margin-bottom: 10px;
}
</style>