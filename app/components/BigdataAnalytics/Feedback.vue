```vue
<template>
  <div class="bigdata-feedback-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>What Our Users Say</h2>
        <div class="bar"></div>
        <p>Hear from our customers about how IXome.ai transformed their smart home experience.</p>
      </div>
      
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-6">
          <div class="single-feedback-box">
            <div class="feedback-desc">
              <p>IXome’s chatbot saved me hours fixing my Control4 system! Highly recommend the Pro Subscription.</p>
            </div>
            <div class="client-info">
              <img src="~/assets/img/author1.jpg" alt="John D." loading="lazy">
              <h3>John D.</h3>
              <span>Homeowner</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6 col-md-6">
          <div class="single-feedback-box">
            <div class="feedback-desc">
              <p>The Enterprise plan is perfect for my installation business. Fast, reliable support!</p>
            </div>
            <div class="client-info">
              <img src="~/assets/img/author2.jpg" alt="Sarah M." loading="lazy">
              <h3>Sarah M.</h3>
              <span>Smart Home Installer</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-feedback-box">
            <div class="feedback-desc">
              <p>Easy to use and incredibly helpful. The Basic plan covers all my occasional needs.</p>
            </div>
            <div class="client-info">
              <img src="~/assets/img/author3.jpg" alt="Mike T." loading="lazy">
              <h3>Mike T.</h3>
              <span>DIY Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.bigdata-feedback-area {
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

.single-feedback-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}

.single-feedback-box .feedback-desc {
  margin-bottom: 20px;
}

.single-feedback-box .feedback-desc p {
  margin-bottom: 0;
}

.single-feedback-box .client-info img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 15px;
}

.single-feedback-box .client-info h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}

.single-feedback-box .client-info span {
  font-size: 15px;
  color: #5c5c5c;
}
</style>