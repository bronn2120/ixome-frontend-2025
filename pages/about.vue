<template>
  <div class="about-page">
    <h1>About IxomeAI</h1>
    <p>IxomeAI is an AI-powered platform dedicated to providing smart home support for Lutron, Control4, and Snap One systems. Our virtual agents offer real-time troubleshooting and optimization to enhance your home automation experience.</p>
    <section>
      <h2>Our Mission</h2>
      <p>To simplify smart home management with intelligent, data-driven solutions.</p>
    </section>
    <section>
      <h2>Our Team</h2>
      <p>A group of experts in AI, home automation, and software development committed to innovation.</p>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - About',
  meta: [
    { name: 'description', content: 'Learn about IxomeAI, our mission, and team.' }
  ]
});
</script>

<style scoped>
.about-page {
  padding: 60px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
h2 {
  font-size: 2rem;
  margin-top: 40px;
}
p {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>