```vue
<template>
  <div class="newsletter-area">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="newsletter-image">
            <img src="~/assets/img/bigdata-analytics/newsletter.jpg" alt="Newsletter" loading="lazy">
          </div>
        </div>

        <div class="col-lg-6 col-md-12 p-0">
          <div class="newsletter-content">
            <h2>Start your free trial</h2>
            <form class="newsletter-form" @submit.prevent="submitForm">
              <input type="email" v-model="email" class="input-newsletter" placeholder="Enter your business email here" required>
              <button type="submit">Sign Up Free</button>
            </form>
            <p>Test out the Big Data Analytics features for 14 days, no credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const submitForm = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        username: email.value.split('@')[0],
        password: 'temporary' // Replace with proper password handling
      })
    });
    const data = await response.json();
    if (data.success) {
      alert('Sign-up successful! Check your email to activate your trial.');
      email.value = '';
    } else {
      alert('Sign-up failed. Please try again.');
    }
  } catch (error) {
    console.error('Error signing up:', error);
    alert('Error signing up. Please try again later.');
  }
};
</script>

<style scoped>
.newsletter-area {
  position: relative;
  z-index: 1;
}
.newsletter-image img {
  width: 100%;
}
.newsletter-content {
  padding: 50px;
}
.newsletter-content h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}
.newsletter-form {
  position: relative;
  max-width: 500px;
  margin-bottom: 20px;
}
.newsletter-form .input-newsletter {
  display: block;
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  padding: 15px;
  border-radius: 5px;
  font-size: 15px;
}
.newsletter-form button {
  position: absolute;
  right: 0;
  top: 0;
  height: 50px;
  background-color: #684df4;
  color: #ffffff;
  border: none;
  padding: 0 20px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  transition: 0.6s;
}
.newsletter-form button:hover {
  background-color: #0056b3;
}
.newsletter-content p {
  font-size: 15px;
  color: #5c5c5c;
}
</style>