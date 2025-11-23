<template>
    <div class="cancel-container">
      <h1>Payment Cancelled</h1>
      <p>No charges were made.</p>
      <p><NuxtLink to="/pricing">← Back to Pricing</NuxtLink></p>
    </div>
  </template>
  
  <script setup>
  // No setup needed – static page
  </script>
  
  <style scoped>
  .cancel-container {
    font-family: system-ui, -apple-system, sans-serif;
    text-align: center;
    padding: 100px 20px;
    background: #fef2f2;
    color: #991b1b;
  }
  h1 {
    font-size: 3rem;
    color: #dc2626;
  }
  p {
    font-size: 1.2rem;
    margin: 20px 0;
  }
  a {
    color: #dc2626;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>