```vue
<template>
  <div class="bigdata-team-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="section-title">
        <h2>Our AI Agents</h2>
        <div class="bar"></div>
        <p>Meet the autonomous agents powering IXome.ai's smart home solutions, delivering seamless Control4 and Lutron support.</p>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-team-box">
            <div class="image">
              <img src="~/assets/img/team-image/1.jpg" alt="CEO Agent" loading="lazy">
              <ul class="social">
                <li><a href="https://facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <div class="content">
              <h3>CEO Agent</h3>
              <span>Orchestrates operations for seamless smart home automation.</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-team-box">
            <div class="image">
              <img src="~/assets/img/team-image/2.jpg" alt="Chat Agent" loading="lazy">
              <ul class="social">
                <li><a href="https://facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <div class="content">
              <h3>Chat Agent</h3>
              <span>Provides instant Control4 and Lutron troubleshooting support.</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-team-box">
            <div class="image">
              <img src="~/assets/img/team-image/3.jpg" alt="Marketing Agent" loading="lazy">
              <ul class="social">
                <li><a href="https://facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <div class="content">
              <h3>Marketing Agent</h3>
              <span>Crafts personalized promotions to enhance your subscription value.</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-team-box">
            <div class="image">
              <img src="~/assets/img/team-image/4.jpg" alt="Social Agent" loading="lazy">
              <ul class="social">
                <li><a href="https://facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <div class="content">
              <h3>Social Agent</h3>
              <span>Engages the community with updates on smart home innovations.</span>
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
.bigdata-team-area {
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

.single-team-box {
  text-align: center;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}

.single-team-box .image {
  position: relative;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}

.single-team-box .image img {
  border-radius: 5px 5px 0 0;
  transition: 0.6s;
}

.single-team-box .image ul {
  position: absolute;
  left: 0;
  bottom: -100%;
  width: 100%;
  padding: 0;
  list-style-type: none;
  margin: 0;
  text-align: center;
  transition: 0.6s;
}

.single-team-box .image ul li {
  display: inline-block;
  margin: 0 5px;
}

.single-team-box .image ul li a {
  display: inline-block;
  background-color: #684df4;
  color: #ffffff;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  transition: 0.6s;
}

.single-team-box .image ul li a:hover {
  background-color: #ffffff;
  color: #684df4;
}

.single-team-box .content {
  padding: 20px;
}

.single-team-box .content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
}

.single-team-box .content span {
  font-size: 15px;
  color: #5c5c5c;
}

.single-team-box:hover .image img {
  transform: scale(1.1);
}

.single-team-box:hover .image ul {
  bottom: 20px;
}
</style>