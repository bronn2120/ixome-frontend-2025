<template>
  <div class="blog-page">
    <h1>IxomeAI Blog</h1>
    <p>Stay updated with the latest in smart home technology.</p>
    <article>
      <h2>Blog Post 1: Troubleshooting Lutron Systems</h2>
      <p>Common issues and solutions.</p>
    </article>
    <article>
      <h2>Blog Post 2: Control4 Tips</h2>
      <p>Optimizing your setup.</p>
    </article>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Blog',
  meta: [
    { name: 'description', content: 'Read the latest blog posts from IxomeAI.' }
  ]
});
</script>

<style scoped>
.blog-page {
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