<template>
  <div class="bigdata-funfacts-area ptb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-funfacts-box">
            <h3>312</h3>
            <p>Lutron Solutions Supported</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-funfacts-box">
            <h3>500+</h3>
            <p>Control4 Issues Resolved</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-funfacts-box">
            <h3>10K+</h3>
            <p>Tokens Used Monthly</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-funfacts-box">
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunFacts'
}
</script>

<style scoped>
.bigdata-funfacts-area {
  position: relative;
  z-index: 1;
}

.single-funfacts-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-funfacts-box h3 {
  font-size: 50px;
  font-weight: 700;
  color: #684df4;
  margin-bottom: 10px;
}

.single-funfacts-box p {
  margin-bottom: 0;
  color: #5c5c5c;
}

.single-funfacts-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
</style>