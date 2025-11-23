<template>
  <div class="bigdata-analytics-banner">
    <div class="overlay"></div>
    <div class="container">
      <div class="bigdata-analytics-content left-aligned">
        <h1>{{ heroData.title }}</h1>
        <p>{{ heroData.subtitle }}</p>
        <div class="cta-buttons" v-if="!heroFetchError">
          <a href="/account" class="btn btn-primary">Schedule a Demo</a>
        </div>
        <p v-else class="text-red-600 text-center">Error: Hero data unavailable. Please check Strapi (Validation Error).</p>
      </div>
    </div>
    <div class="banner-boxes-area bottom-aligned">
      <div class="container">
        <div class="row justify-content-center align-items-stretch">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-banner-boxes bg-green-100 border-2 border-green-400">
              <div class="icon">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'server']" class="fa-icon" style="color: #28a745;" />
                </client-only>
              </div>
              <h3>Basic Subscription</h3>
              <p>$10 for 100 tokens. Ideal for occasional troubleshooting.</p>
              <a href="/account" class="upgrade-link" style="color: #28a745;">Upgrade</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-banner-boxes bg-orange-100 border-2 border-orange-400">
              <div class="icon">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'code']" class="fa-icon" style="color: #ff9800;" />
                </client-only>
              </div>
              <h3>Pro Subscription</h3>
              <p>$50 for 1000 tokens. Perfect for frequent users.</p>
              <a href="/account" class="upgrade-link" style="color: #ff9800;">Upgrade</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-banner-boxes bg-blue-100 border-2 border-blue-400">
              <div class="icon">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'users']" class="fa-icon" style="color: #2196f3;" />
                </client-only>
              </div>
              <h3>Enterprise Subscription</h3>
              <p>$200 for 10000 tokens. Enterprise-level access.</p>
              <a href="/account" class="upgrade-link" style="color: #2196f3;">Upgrade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-shape1">
      <img src="~/assets/img/bigdata-analytics/analytics-shape1.png" alt="shape" @error="onImageError">
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faServer, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { computed, ref } from 'vue';

library.add(faServer, faCode, faUsers);

export default {
  name: 'MainBanner',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const heroData = ref({
      title: 'Revolutionize Your Smart Home with AI Support',
      subtitle: 'IXome.ai offers subscription-based chatbot for Control4 and Lutron troubleshooting.',
    });
    const heroFetchError = ref(false);

    const onImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/150?text=Shape+Not+Found';
    };

    (async () => {
      try {
        const response = await $fetch('http://127.0.0.1:1337/api/hero?populate=*');
        if (response?.data?.attributes) {
          heroData.value = {
            title: response.data.attributes.title || heroData.value.title,
            subtitle: response.data.attributes.subtitle || heroData.value.subtitle,
          };
        } else if (response?.error) {
          console.error('API Error:', response.error);
          heroFetchError.value = true;
        }
      } catch (err) {
        console.error('Failed to fetch hero data:', err);
        heroFetchError.value = true;
      }
    })();

    const isAuthenticated = computed(() => !!localStorage.getItem('token'));

    return { heroData, isAuthenticated, heroFetchError, onImageError };
  },
};
</script>

<style scoped>
.bigdata-analytics-banner {
  padding: 100px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('~/assets/img/bigdata-analytics/main-banner.jpg') no-repeat center top;
  background-size: cover;
  min-height: 700px;
  position: relative;
}
@media (min-width: 768px) {
  .bigdata-analytics-banner {
    min-height: 800px;
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  z-index: 1;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 2;
}
.bigdata-analytics-content {
  text-align: left;
  color: #fff;
  max-width: 400px;
  margin-left: 0;
  margin-right: auto;
}
.left-aligned {
  text-align: left;
}
.bigdata-analytics-content h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
}
@media (min-width: 768px) {
  .bigdata-analytics-content h1 {
    font-size: 48px;
  }
}
.bigdata-analytics-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
}
.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
}
@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
    gap: 20px;
  }
}
.btn {
  display: inline-block;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.5s ease;
  position: relative;
  z-index: 1;
}
.btn::after, .btn::before {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 0;
  transition: 0.5s;
  background: #c679e3;
  z-index: -1;
}
.btn::after {
  left: 0;
  border-radius: 4px 0 0 4px;
}
.btn::before {
  right: 0;
  border-radius: 0 4px 4px 0;
}
.btn-primary {
  color: #ffffff;
  background-color: #44ce6f;
  box-shadow: 0 13px 27px 0 rgba(68, 206, 111, 0.25);
}
.btn-primary:hover, .btn-primary:focus {
  color: #ffffff;
  background: #0e314c;
  transform: translateY(-5px);
  box-shadow: 0 13px 27px 0 rgba(198, 121, 227, 0.25);
}
.btn-primary::after, .btn-primary::before {
  background: #c679e3;
}
.einstein-animation {
  display: none;
}
.banner-boxes-area {
  padding: 0 0 50px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.bottom-aligned {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: stretch;
}
.col-lg-4 {
  flex: 0 0 33.333%;
  max-width: 33.333%;
  padding: 0 15px;
}
.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}
.col-sm-12 {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px;
}
.justify-content-center {
  justify-content: center;
}
.align-items-stretch {
  align-items: stretch;
}
@media (min-width: 992px) {
  .col-lg-4 {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
  .row {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
  }
}
.single-banner-boxes {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
  border: 2px solid #ddd;
  height: 100%;
}
.bg-green-100 {
  background-color: #f0fff4;
  border-color: #28a745;
}
.bg-orange-100 {
  background-color: #fff3e0;
  border-color: #ff9800;
}
.bg-blue-100 {
  background-color: #e6f3fa;
  border-color: #2196f3;
}
.single-banner-boxes:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
.icon {
  margin-bottom: 20px;
}
.fa-icon {
  width: 60px;
  height: 60px;
  color: #44ce6f;
}
.upgrade-link {
  color: #44ce6f;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
}
.upgrade-link:hover {
  text-decoration: underline;
}
.analytics-shape1 {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.2;
}
.analytics-shape1 img {
  max-width: 150px;
}
.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>