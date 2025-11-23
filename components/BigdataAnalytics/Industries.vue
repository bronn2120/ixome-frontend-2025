<template>
    <div class="bigdata-industries-area ptb-80 bg-f7fafd">
      <div class="container">
        <div class="section-title">
          <h2>Industries We Serve</h2>
          <div class="bar"></div>
          <p>IXome.ai supports a variety of smart home setups for different industries.</p>
        </div>
  
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-industries-box">
              <div class="icon">
                <i class="flaticon-factory"></i>
              </div>
              <h3>Residential</h3>
              <p>Homeowners with Control4 and Lutron systems.</p>
            </div>
          </div>
  
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-industries-box">
              <div class="icon">
                <i class="flaticon-hospital"></i>
              </div>
              <h3>Commercial</h3>
              <p>Businesses needing smart lighting and automation.</p>
            </div>
          </div>
  
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-industries-box">
              <div class="icon">
                <i class="flaticon-tracking"></i>
              </div>
              <h3>Hospitality</h3>
              <p>Hotels and resorts with integrated smart systems.</p>
            </div>
          </div>
  
          <div class="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div class="single-industries-box">
              <div class="icon">
                <i class="flaticon-investment"></i>
              </div>
              <h3>Installers</h3>
              <p>Professional installers for large-scale projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Industries'
  }
  </script>
  
  <style scoped>
  .bigdata-industries-area {
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
  
  .single-industries-box {
    text-align: center;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 30px;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }
  
  .single-industries-box .icon {
    margin-bottom: 25px;
  }
  
  .single-industries-box .icon i {
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
  
  .single-industries-box h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .single-industries-box p {
    margin-bottom: 0;
  }
  
  .single-industries-box:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  
  .single-industries-box:hover .icon i {
    background-color: #684df4;
    color: #ffffff;
  }
  </style>