<template>
  <div class="projects-page">
    <h1>Our Projects</h1>
    <p>Explore some of our successful smart home implementations.</p>
    <section>
      <h2>Project 1: Lutron Integration</h2>
      <p>Seamless lighting control for a modern home.</p>
    </section>
    <section>
      <h2>Project 2: Control4 Setup</h2>
      <p>Full automation for entertainment systems.</p>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Projects',
  meta: [
    { name: 'description', content: 'View projects completed by IxomeAI.' }
  ]
});
</script>

<style scoped>
.projects-page {
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