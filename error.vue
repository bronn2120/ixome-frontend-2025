<template>
  <div class="error-page">
    <h1>Oops! Something Went Wrong</h1>
    <p v-if="error.statusCode === 404">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <p v-else>An error occurred: {{ error.message }}</p>
    <NuxtLink to="/" class="btn btn-primary">Go to Homepage</NuxtLink>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';

defineProps(['error']);
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 50px;
}
.btn-primary {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  display: inline-block;
}
</style>