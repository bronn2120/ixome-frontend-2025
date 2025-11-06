<template>
  <div class="pricing-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="section-title text-center mb-12">
        <h2 class="text-4xl font-bold mb-5">Pricing Plans</h2>
        <div class="bar"></div>
        <p class="max-w-xl mx-auto text-gray-600">Choose the perfect IXome.ai subscription for your smart home needs.</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-pricing-box text-center p-6 bg-white rounded-md shadow-lg transition-transform duration-600">
            <h3 class="text-xl font-bold mb-4">Basic Plan</h3>
            <div class="pricing-price mb-4">
              <span class="price text-4xl font-bold text-purple-500">$10</span>
              <span class="validity text-base text-gray-500">/ 100 tokens</span>
            </div>
            <p class="mb-5 text-gray-600">Ideal for occasional troubleshooting of Control4 and Lutron systems.</p>
            <!-- <NuxtLink to="/signup" class="btn btn-primary">Subscribe Now</NuxtLink> -->
            <!-- Signup page not yet implemented; uncomment when /signup is created -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-pricing-box text-center p-6 bg-white rounded-md shadow-lg transition-transform duration-600">
            <h3 class="text-xl font-bold mb-4">Pro Plan</h3>
            <div class="pricing-price mb-4">
              <span class="price text-4xl font-bold text-purple-500">$50</span>
              <span class="validity text-base text-gray-500">/ 1000 tokens</span>
            </div>
            <p class="mb-5 text-gray-600">Perfect for frequent users needing advanced smart home support.</p>
            <!-- <NuxtLink to="/signup" class="btn btn-primary">Subscribe Now</NuxtLink> -->
            <!-- Signup page not yet implemented; uncomment when /signup is created -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div class="single-pricing-box text-center p-6 bg-white rounded-md shadow-lg transition-transform duration-600">
            <h3 class="text-xl font-bold mb-4">Enterprise Plan</h3>
            <div class="pricing-price mb-4">
              <span class="price text-4xl font-bold text-purple-500">$200</span>
              <span class="validity text-base text-gray-500">/ 10000 tokens</span>
            </div>
            <p class="mb-5 text-gray-600">Designed for installers and large-scale smart home projects.</p>
            <!-- <NuxtLink to="/signup" class="btn btn-primary">Subscribe Now</NuxtLink> -->
            <!-- Signup page not yet implemented; uncomment when /signup is created -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';

useHead({
  title: 'IXome.ai - Pricing',
  meta: [
    { name: 'description', content: 'Explore IXome.ai’s pricing plans for AI-powered smart home support.' },
    { name: 'keywords', content: 'smart home pricing, Control4, Lutron, AI subscription' }
  ]
});
</script>

<style scoped>
.pricing-area {
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

.single-pricing-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-pricing-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.single-pricing-box .pricing-price {
  margin-bottom: 15px;
}

.single-pricing-box .pricing-price .price {
  font-size: 36px;
  font-weight: 700;
  color: #684df4;
}

.single-pricing-box .pricing-price .validity {
  font-size: 16px;
  color: #5c5c5c;
}

.single-pricing-box p {
  margin-bottom: 20px;
}

.single-pricing-box .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.single-pricing-box .btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.single-pricing-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
</style>