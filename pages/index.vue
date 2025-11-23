<template>
  <div class="home-page">
    <header class="header">
      <div class="logo-container">
        <img src="/logo.jpg" alt="IxomeAI Logo" class="logo" />
      </div>
      <nav>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/subscribe">Subscribe</NuxtLink>
      </nav>
    </header>
    <main>
      <h1>Welcome to IxomeAI</h1>
      <p>Your smart home support solution for Lutron, Control4, and Snap One systems.</p>
    </main>
  </div>
</template>
<script setup>
useHead({
  title: 'IxomeAI - Home',
  meta: [
    { name: 'description', content: 'AI-powered smart home support for Lutron, Control4, and Snap One.' },
    { name: 'keywords', content: 'smart home, Lutron, Control4, Snap One, AI support' }
  ]
});
</script>
<style scoped>
.home-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, sans-serif;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  overflow: visible; /* Prevent any potential cropping from header */
}
.logo-container {
  flex: 0 0 auto;
  overflow: visible; /* Ensure full logo visibility */
}
.logo {
  height: auto;
  width: auto;
  max-width: 300px;
  max-height: 100px; /* Constrain height to fit header without cropping top corner */
  object-fit: contain;
  display: block;
}
nav {
  display: flex;
  gap: 40px;
}
nav a {
  text-decoration: none;
  color: #222;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s;
}
nav a:hover {
  color: #684df4;
}
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
}
h1 {
  font-size: 4rem;
  margin-bottom: 24px;
  color: #111;
}
p {
  font-size: 1.6rem;
  color: #444;
  max-width: 900px;
  line-height: 1.7;
}
</style>