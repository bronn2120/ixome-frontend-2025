<template>
    <div class="success-container">
      <h1>✓ Payment Successful!</h1>
      <p>Your IxomeAI subscription is now active.</p>
      <p>You can close this tab or <NuxtLink to="/">return to dashboard</NuxtLink>.</p>
    </div>
  </template>
  
  <script setup>
  // No setup needed – static page
  </script>
  
  <style scoped>
  .success-container {
    font-family: system-ui, -apple-system, sans-serif;
    text-align: center;
    padding: 100px 20px;
    background: #f0fdf4;
    color: #166534;
  }
  h1 {
    font-size: 3rem;
    color: #16a34a;
  }
  p {
    font-size: 1.2rem;
    margin: 20px 0;
  }
  a {
    color: #16a34a;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>