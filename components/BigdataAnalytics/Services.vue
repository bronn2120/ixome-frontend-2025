<template>
  <section class="services-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-services-box">
            <div class="icon">
              <i class="flaticon-research"></i>
            </div>
            <h3>Basic Subscription</h3>
            <p>$10 for 100 tokens. Ideal for occasional troubleshooting of Control4 and Lutron systems.</p>
            <NuxtLink to="/pricing" class="read-more-btn">Subscribe Now</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-services-box">
            <div class="icon">
              <i class="flaticon-analytics"></i>
            </div>
            <h3>Pro Subscription</h3>
            <p>$50 for 1000 tokens. Perfect for frequent users needing advanced smart home support.</p>
            <NuxtLink to="/pricing" class="read-more-btn">Subscribe Now</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-services-box">
            <div class="icon">
              <i class="flaticon-settings"></i>
            </div>
            <h3>Enterprise Subscription</h3>
            <p>$200 for 10000 tokens. Enterprise-level access for installers and large-scale projects.</p>
            <NuxtLink to="/pricing" class="read-more-btn">Subscribe Now</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.single-services-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
}

.single-services-box .icon {
  margin-bottom: 25px;
}

.single-services-box .icon i {
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

.single-services-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.single-services-box p {
  margin-bottom: 0;
}

.single-services-box .read-more-btn {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: #684df4;
  margin-top: 20px;
  position: relative;
}

.single-services-box .read-more-btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #684df4;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-services-box .read-more-btn:hover {
  color: #684df4;
  letter-spacing: 1px;
}

.single-services-box .read-more-btn:hover::before {
  width: 100%;
}

.single-services-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}

.single-services-box:hover .icon i {
  background-color: #684df4;
  color: #ffffff;
}
</style>