<template>
  <div class="about-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="about-content">
            <h2 class="text-4xl font-bold mb-5">About IXome.ai</h2>
            <p class="mb-5 text-gray-600">IXome.ai delivers advanced chatbot solutions for Control4 and Lutron systems, with subscription tiers and autonomous agents that handle updates without manual intervention.</p>
            <p class="mb-5 text-gray-600">Our AI agents, including the CEO Agent and Chat Agent, provide seamless troubleshooting and support, ensuring your smart home runs smoothly. Subscribe today to experience the future of home automation.</p>
            <NuxtLink to="/pricing" class="btn btn-primary">Get Started</NuxtLink>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="about-image">
            <img src="~/assets/img/about.jpg" alt="About IXome.ai" loading="lazy" class="rounded-md w-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';

useHead({
  title: 'IXome.ai - About',
  meta: [
    { name: 'description', content: 'Learn about IXome.ai’s AI-powered smart home solutions for Control4 and Lutron systems.' },
    { name: 'keywords', content: 'smart home AI, Control4, Lutron, autonomous agents' }
  ]
});
</script>

<style scoped>
.about-area {
  position: relative;
  z-index: 1;
}

.about-content h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.about-image img {
  border-radius: 5px;
  width: 100%;
}
</style>