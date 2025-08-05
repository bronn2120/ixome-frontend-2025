<template>
  <div class="bigdata-discover-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Discover IXome.ai Features</h2>
        <div class="bar"></div>
        <p>Unlock the power of AI for your smart home with our subscription-based chatbot.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-discover-box">
            <div class="icon">
              <i class="flaticon-monitor"></i>
            </div>
            <h3>Smart Troubleshooting</h3>
            <p>Instantly diagnose Control4 and Lutron issues with our AI-powered chatbot.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-discover-box">
            <div class="icon">
              <i class="flaticon-idea"></i>
            </div>
            <h3>Token-Based Access</h3>
            <p>Flexible subscriptions to meet all your smart home support needs.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-discover-box">
            <div class="icon">
              <i class="flaticon-software"></i>
            </div>
            <h3>Autonomous Updates</h3>
            <p>Our CEO agent keeps your support content fresh autonomously.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Discover'
}
</script>

<style scoped>
.bigdata-discover-area {
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

.single-discover-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-discover-box .icon {
  margin-bottom: 25px;
}

.single-discover-box .icon i {
  display: inline-block;
  height: 80px;
  width: 80px;
  line-height: 80px;
  background-color: #f7fafd;
  color: #684df4;
  font-size: 40px;
  border-radius: 50px;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-discover-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.single-discover-box p {
  margin-bottom: 0;
}

.single-discover-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}

.single-discover-box:hover .icon i {
  background-color: #684df4;
  color: #ffffff;
}
</style>