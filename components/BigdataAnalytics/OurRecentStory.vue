```vue
<template>
  <div class="bigdata-story-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Our Recent Stories</h2>
        <div class="bar"></div>
        <p>Latest news and insights from IXome.ai on smart home technology.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-story-box">
            <div class="story-image">
              <NuxtLink to="/blog-details">
                <img src="~/assets/img/blog-image/1.jpg" alt="Control4 Tips" loading="lazy">
              </NuxtLink>
            </div>
            <div class="story-content">
              <h3><NuxtLink to="/blog-details">Top 5 Control4 Troubleshooting Tips</NuxtLink></h3>
              <p>Learn expert tips to quickly resolve common Control4 issues with IXome.ai's chatbot.</p>
              <NuxtLink to="/blog-details" class="read-more-btn">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-icon" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-story-box">
            <div class="story-image">
              <NuxtLink to="/blog-details">
                <img src="~/assets/img/blog-image/2.jpg" alt="Lutron AI" loading="lazy">
              </NuxtLink>
            </div>
            <div class="story-content">
              <h3><NuxtLink to="/blog-details">Mastering Lutron Systems with AI</NuxtLink></h3>
              <p>Discover how IXome.ai simplifies Lutron troubleshooting for seamless smart home control.</p>
              <NuxtLink to="/blog-details" class="read-more-btn">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-icon" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div class="single-story-box">
            <div class="story-image">
              <NuxtLink to="/blog-details">
                <img src="~/assets/img/blog-image/3.jpg" alt="AI Future" loading="lazy">
              </NuxtLink>
            </div>
            <div class="story-content">
              <h3><NuxtLink to="/blog-details">The Future of AI in Smart Homes</NuxtLink></h3>
              <p>Explore how IXome.ai's autonomous agents are revolutionizing home automation.</p>
              <NuxtLink to="/blog-details" class="read-more-btn">
                Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-icon" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NuxtLink } from '#components';

library.add(faArrowRight);
</script>

<style scoped>
.bigdata-story-area {
  position: relative;
  z-index: 1;
  padding-top: 80px;
  padding-bottom: 80px;
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
.single-story-box {
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}
.single-story-box .story-image {
  position: relative;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}
.single-story-box .story-image img {
  border-radius: 5px 5px 0 0;
  transition: 0.6s;
}
.single-story-box .story-content {
  padding: 20px;
}
.single-story-box .story-content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}
.single-story-box .story-content p {
  margin-bottom: 0;
}
.single-story-box .story-content .read-more-btn {
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #684df4;
  margin-top: 20px;
  position: relative;
}
.single-story-box .story-content .read-more-btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #684df4;
  transition: 0.6s;
}
.single-story-box .story-content .read-more-btn:hover {
  color: #684df4;
  letter-spacing: 1px;
}
.single-story-box .story-content .read-more-btn:hover::before {
  width: 100%;
}
.single-story-box:hover .story-image img {
  transform: scale(1.1);
}
.read-more-btn .fa-icon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
</style>