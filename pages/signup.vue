<template>
  <div class="signup-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 offset-lg-3">
          <div class="signup-form bg-white p-6 rounded-md shadow-lg text-center">
            <h2 class="text-4xl font-bold mb-5">Sign Up for IXome.ai</h2>
            <p class="mb-6 text-gray-600">Create an account to access AI-powered smart home support.</p>
            <form @submit.prevent="handleSignup">
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Username</label>
                <input v-model="username" type="text" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter username" required>
              </div>
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Email</label>
                <input v-model="email" type="email" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter email" required>
              </div>
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Password</label>
                <input v-model="password" type="password" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter password" required>
              </div>
              <button type="submit" class="btn btn-primary w-full">Sign Up</button>
              <p v-if="success" class="success mt-2 text-green-500 text-sm">Account created! Please log in.</p>
              <p v-if="error" class="error mt-2 text-red-500 text-sm">{{ error }}</p>
            </form>
            <p class="mt-4 text-gray-600">Already have an account? <NuxtLink to="/login" class="text-blue-500 hover:text-green-500">Log In</NuxtLink></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NuxtLink } from '#components';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const success = ref(false);
const error = ref('');
const router = useRouter();

const handleSignup = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    });
    const data = await response.json();
    if (data.access_token) {
      success.value = true;
      error.value = '';
      username.value = '';
      email.value = '';
      password.value = '';
      setTimeout(() => router.push('/login'), 2000);
    } else {
      error.value = data.msg || 'Signup failed. Try again.';
      success.value = false;
    }
  } catch (err) {
    error.value = 'Signup failed. Try again.';
    success.value = false;
  }
};

useHead({
  title: 'IXome.ai - Sign Up',
  meta: [
    { name: 'description', content: 'Sign up for IXome.ai to access AI-powered smart home support.' },
    { name: 'keywords', content: 'smart home signup, Control4, Lutron, AI chatbot' }
  ]
});
</script>

<style scoped>
.signup-area {
  position: relative;
  z-index: 1;
}

.signup-form {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  text-align: center;
}

.signup-form h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.signup-form p {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.success {
  color: #28a745;
  font-size: 14px;
  margin-top: 10px;
}

.error {
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
}
</style>
