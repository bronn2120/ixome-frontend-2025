<template>
  <div class="contact-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="section-title text-center mb-12">
        <h2 class="text-4xl font-bold mb-5">Contact Us</h2>
        <div class="bar"></div>
        <p class="max-w-xl mx-auto text-gray-600">Get in touch with IXome.ai for expert smart home support. Our AI chatbot is ready to assist with Control4 and Lutron issues—subscribe now!</p>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="contact-form bg-white p-6 rounded-md shadow-lg">
            <form @submit.prevent="handleSubmit">
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Name</label>
                <input v-model="name" type="text" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter your name" required>
              </div>
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Email</label>
                <input v-model="email" type="email" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter your email" required>
              </div>
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Message</label>
                <textarea v-model="message" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Your message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">Send Message</button>
              <p v-if="success" class="success mt-2 text-green-500 text-sm">Message sent successfully!</p>
              <p v-if="error" class="error mt-2 text-red-500 text-sm">{{ error }}</p>
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="contact-info">
            <h3 class="text-xl font-bold mb-5">Contact Information</h3>
            <ul class="list-none space-y-4">
              <li><i class="bx bx-envelope text-purple-500 mr-2"></i>Email: <a href="mailto:support@ixome.ai" class="text-gray-600 hover:text-blue-500">support@ixome.ai</a></li>
              <li><i class="bx bx-phone text-purple-500 mr-2"></i>Phone: <a href="tel:+15551234567" class="text-gray-600 hover:text-blue-500">+1 (555) 123-4567</a></li>
              <li><i class="bx bx-map text-purple-500 mr-2"></i>Address: <span class="text-gray-600">123 Smart Home Lane, Tech City, USA</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NuxtLink } from '#components';

const name = ref('');
const email = ref('');
const message = ref('');
const success = ref(false);
const error = ref('');

const handleSubmit = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });
    const data = await response.json();
    if (data.success) {
      success.value = true;
      error.value = '';
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      error.value = data.msg || 'Failed to send message. Try again.';
      success.value = false;
    }
  } catch (err) {
    error.value = 'Failed to send message. Try again.';
    success.value = false;
  }
};

useHead({
  title: 'IXome.ai - Contact',
  meta: [
    { name: 'description', content: 'Contact IXome.ai for smart home support with Control4 and Lutron systems.' },
    { name: 'keywords', content: 'smart home contact, Control4, Lutron, AI chatbot' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
  ]
});
</script>

<style scoped>
.contact-area {
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

.contact-form {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form .form-group label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.contact-form .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.contact-form .btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.contact-form .success {
  color: #28a745;
  font-size: 14px;
  margin-top: 10px;
}

.contact-form .error {
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
}

.contact-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info ul li {
  font-size: 16px;
  margin-bottom: 15px;
}

.contact-info ul li i {
  color: #684df4;
  margin-right: 10px;
}
</style>