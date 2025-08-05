<template>
  <div class="bigdata-analytics-banner">
    <div class="container">
      <div class="bigdata-analytics-content">
        <h1>Revolutionize Your Smart Home with AI Support</h1>
        <p>IXome.ai offers subscription-based chatbot for Control4 and Lutron troubleshooting, with autonomous updates for seamless experience.</p>
        <a href="#" class="btn btn-primary">Get Started</a>
      </div>
    </div>

    <div class="banner-boxes-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-banner-boxes">
              <div class="icon">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'server']" class="fa-icon" />
                </client-only>
              </div>
              <h3>Basic Subscription</h3>
              <p>$10 for 100 tokens. Ideal for occasional troubleshooting of Control4 and Lutron systems.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-banner-boxes">
              <div class="icon">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'code']" class="fa-icon" />
                </client-only>
              </div>
              <h3>Pro Subscription</h3>
              <p>$50 for 1000 tokens. Perfect for frequent users needing advanced smart home support.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div class="single-banner-boxes">
              <div class="icon">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'users']" class="fa-icon" />
                </client-only>
              </div>
              <h3>Enterprise Subscription</h3>
              <p>$200 for 10000 tokens. Enterprise-level access for installers and large-scale projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faServer, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faServer, faCode, faUsers);

export default {
  name: 'MainBanner',
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.bigdata-analytics-banner {
  padding: 50px 0;
  background: url('~/assets/img/bigdata-analytics/main-banner.jpg') no-repeat center center;
  background-size: cover;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
.bigdata-analytics-content {
  text-align: center;
  color: #fff;
}
.btn-primary {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}
.single-banner-boxes {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 10px;
}
.icon {
  margin-bottom: 10px;
}
.fa-icon {
  width: 40px;
  height: 40px;
}
</style>