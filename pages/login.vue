<template>
  <div class="login-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 offset-lg-3">
          <div class="login-form bg-white p-6 rounded-md shadow-lg text-center">
            <h2 class="text-4xl font-bold mb-5">Login to IXome.ai</h2>
            <p class="mb-6 text-gray-600">Access your account to manage tokens and smart home support.</p>
            <form @submit.prevent="handleLogin">
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Username</label>
                <input v-model="username" type="text" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter username" required>
              </div>
              <div class="form-group mb-5">
                <label class="text-base font-medium mb-2 block">Password</label>
                <input v-model="password" type="password" class="form-control w-full p-2 border border-gray-300 rounded-md text-base" placeholder="Enter password" required>
              </div>
              <button type="submit" class="btn btn-primary w-full">Login</button>
              <p v-if="error" class="error mt-2 text-red-500 text-sm">{{ error }}</p>
            </form>
            <p class="mt-4 text-gray-600">Don't have an account? <NuxtLink to="/signup" class="text-blue-500 hover:text-green-500">Sign Up</NuxtLink></p>
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
const password = ref('');
const error = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    });
    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user_id', data.user_id);
      router.push('/');
      error.value = '';
    } else {
      error.value = data.msg || 'Login failed. Try again.';
    }
  } catch (err) {
    error.value = 'Login failed. Try again.';
  }
};

useHead({
  title: 'IXome.ai - Login',
  meta: [
    { name: 'description', content: 'Login to your IXome.ai account to manage tokens and smart home support.' },
    { name: 'keywords', content: 'smart home login, Control4, Lutron, AI chatbot' }
  ]
});
</script>

<style scoped>
.login-area {
  position: relative;
  z-index: 1;
}

.login-form {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  text-align: center;
}

.login-form h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.login-form p {
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

.error {
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
}
</style>