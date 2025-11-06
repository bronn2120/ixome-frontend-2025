<template>
  <div class="projects-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="section-title text-center mb-12">
        <h2 class="text-4xl font-bold mb-5">Our Projects</h2>
        <div class="bar"></div>
        <p class="max-w-xl mx-auto text-gray-600">Discover how IXome.ai’s AI chatbot has transformed smart home automation for our clients.</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-projects-box p-6 rounded-md shadow-lg transition-transform duration-600">
            <img src="~/assets/img/projects-image/1.jpg" alt="Residential Smart Home" loading="lazy" class="rounded-t-md w-full">
            <div class="projects-content p-5">
              <h3 class="text-xl font-bold mb-2">Residential Smart Home</h3>
              <p class="text-gray-600">Automated Control4 system for a luxury home, powered by IXome.ai’s chatbot.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-projects-box p-6 rounded-md shadow-lg transition-transform duration-600">
            <img src="~/assets/img/projects-image/2.jpg" alt="Commercial Lighting" loading="lazy" class="rounded-t-md w-full">
            <div class="projects-content p-5">
              <h3 class="text-xl font-bold mb-2">Commercial Lighting</h3>
              <p class="text-gray-600">Lutron integration for an office, streamlined with IXome.ai’s AI support.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div class="single-projects-box p-6 rounded-md shadow-lg transition-transform duration-600">
            <img src="~/assets/img/projects-image/3.jpg" alt="Hotel Automation" loading="lazy" class="rounded-t-md w-full">
            <div class="projects-content p-5">
              <h3 class="text-xl font-bold mb-2">Hotel Automation</h3>
              <p class="text-gray-600">Smart systems for a resort, optimized with IXome.ai’s Enterprise plan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';

useHead({
  title: 'IXome.ai - Projects',
  meta: [
    { name: 'description', content: 'See IXome.ai’s successful smart home automation projects with Control4 and Lutron.' },
    { name: 'keywords', content: 'smart home projects, Control4, Lutron, AI automation' }
  ]
});
</script>

<style scoped>
.projects-area {
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

.single-projects-box {
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}

.single-projects-box img {
  border-radius: 5px 5px 0 0;
}

.single-projects-box .projects-content {
  padding: 20px;
}

.single-projects-box .projects-content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.single-projects-box .projects-content p {
  margin-bottom: 0;
}

.single-projects-box:hover {
  transform: translateY(-10px);
}
</style>