<template>
  <div class="services-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="section-title text-center mb-12">
        <h2 class="text-4xl font-bold mb-5">Our Services</h2>
        <div class="bar"></div>
        <p class="max-w-xl mx-auto text-gray-600">Explore IXome.ai’s AI-powered smart home services for seamless automation and support.</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-services-box p-6 rounded-md shadow-lg transition-transform duration-600">
            <div class="services-icon">
              <font-awesome-icon :icon="['fas', 'server']" class="text-purple-500 text-3xl mb-4" />
            </div>
            <h3 class="text-xl font-bold mb-2">Control4 Troubleshooting</h3>
            <p class="text-gray-600">Instant AI-driven solutions for Control4 system issues, from connectivity to device control.</p>
            <NuxtLink to="/contact" class="read-more-btn text-blue-500 hover:text-green-500">Learn More</NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-services-box p-6 rounded-md shadow-lg transition-transform duration-600">
            <div class="services-icon">
              <font-awesome-icon :icon="['fas', 'lightbulb']" class="text-purple-500 text-3xl mb-4" />
            </div>
            <h3 class="text-xl font-bold mb-2">Lutron Support</h3>
            <p class="text-gray-600">Expert AI assistance for Lutron lighting and automation systems, ensuring flawless performance.</p>
            <NuxtLink to="/contact" class="read-more-btn text-blue-500 hover:text-green-500">Learn More</NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-services-box p-6 rounded-md shadow-lg transition-transform duration-600">
            <div class="services-icon">
              <font-awesome-icon :icon="['fas', 'robot']" class="text-purple-500 text-3xl mb-4" />
            </div>
            <h3 class="text-xl font-bold mb-2">AI Automation</h3>
            <p class="text-gray-600">Autonomous agents for smart home management, powered by IXome.ai’s advanced chatbot.</p>
            <NuxtLink to="/contact" class="read-more-btn text-blue-500 hover:text-green-500">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faServer, faLightbulb, faRobot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faServer, faLightbulb, faRobot);

useHead({
  title: 'IXome.ai - Services',
  meta: [
    { name: 'description', content: 'Explore IXome.ai’s AI-powered smart home services for Control4 and Lutron systems.' },
    { name: 'keywords', content: 'smart home services, Control4, Lutron, AI automation' }
  ]
});
</script>

<style scoped>
.services-area {
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 0;
}

.section-title .bar {
  height: 5px;
  width: 50px;
  background-color: #684df4;
  margin: 15px auto 20px;
  position: relative;
  border-radius: 30px;
}

.section-title .bar::before {
  content: '';
  position: absolute;
  left: 0;
  top: -2.5px;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: #ffffff;
  border: 2px solid #684df4;
}

.section-title p {
  max-width: 600px;
  margin: 0 auto;
}

.single-services-box {
  text-align: center;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}

.single-services-box .services-icon {
  margin-bottom: 15px;
}

.single-services-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.single-services-box p {
  margin-bottom: 20px;
}

.single-services-box .read-more-btn {
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #007bff;
  margin-top: 20px;
  position: relative;
  text-decoration: none;
}

.single-services-box .read-more-btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #007bff;
  transition: 0.6s;
}

.single-services-box .read-more-btn:hover {
  color: #28a745;
  letter-spacing: 1px;
}

.single-services-box .read-more-btn:hover::before {
  width: 100%;
}

.single-services-box:hover {
  transform: translateY(-10px);
}
</style>