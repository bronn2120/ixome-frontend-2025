<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required class="login-input">
      <input type="password" v-model="password" placeholder="Password" required class="login-input">
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth'; // Adjust if store path different
const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const login = async () => {
  try {
    await authStore.login({ identifier: email.value, password: password.value });
    // Redirect to /dashboard on success
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>

<style scoped>
.login-container { max-width: 400px; margin: 0 auto; padding: 20px; }
.login-form { display: flex; flex-direction: column; }
.login-input { margin-bottom: 10px; padding: 10px; }
.login-button { padding: 10px; background: blue; color: white; }
</style>
