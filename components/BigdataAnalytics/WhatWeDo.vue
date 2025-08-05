<template>
  <div class="what-we-do-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>What We Do</h2>
        <div class="bar"></div>
        <p>
          At IXome.ai, we simplify smart home management with AI-driven tools tailored for Control4 and Lutron users.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-monitor"></i>
            </div>
            <h3><NuxtLink to="/services">Smart Home Troubleshooting</NuxtLink></h3>
            <p>
              Get fast fixes for common issues using our chatbot, saving you time and frustration.
            </p>
            <NuxtLink to="/services" class="link">Control4 Solutions</NuxtLink>
            <NuxtLink to="/services" class="link">Lutron Fixes</NuxtLink>
            <NuxtLink to="/services" class="read-more-btn">
              <client-only>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-icon" />
              </client-only> Read More
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-idea"></i>
            </div>
            <h3><NuxtLink to="/pricing">Flexible Subscriptions</NuxtLink></h3>
            <p>
              Choose a plan that fits your needs, with tokens for on-demand support whenever you need it.
            </p>
            <NuxtLink to="/pricing" class="link">Basic Plan</NuxtLink>
            <NuxtLink to="/pricing" class="link">Pro Plan</NuxtLink>
            <NuxtLink to="/pricing" class="read-more-btn">
              <client-only>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-icon" />
              </client-only> Read More
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-software"></i>
            </div>
            <h3><NuxtLink to="/about">Agentic Automation</NuxtLink></h3>
            <p>
              Our AI agents handle updates and tasks automatically, so your system stays current without effort.
            </p>
            <NuxtLink to="/about" class="link">CEO Agent</NuxtLink>
            <NuxtLink to="/about" class="link">Content Agent</NuxtLink>
            <NuxtLink to="/about" class="read-more-btn">
              <client-only>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-icon" />
              </client-only> Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NuxtLink } from '#components';

library.add(faArrowRight);

export default {
  name: 'WhatWeDo',
  components: {
    FontAwesomeIcon,
    NuxtLink
  }
};
</script>

<style scoped>
.what-we-do-area {
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
.single-what-we-do-box {
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  transition: 0.6s;
}
.single-what-we-do-box .icon {
  margin-bottom: 10px;
}
.single-what-we-do-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}
.single-what-we-do-box p {
  margin-bottom: 0;
}
.single-what-we-do-box .link {
  display: block;
  color: #684df4;
  margin: 5px 0;
}
.read-more-btn {
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #684df4;
  margin-top: 20px;
}
.read-more-btn .fa-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>