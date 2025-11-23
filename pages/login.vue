<template>
    <div class="login-page">
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'IxomeAI - Login',
    meta: [
      { name: 'description', content: 'Login to your IxomeAI account.' }
    ]
  });
  </script>
  
  <style scoped>
  .login-page {
    padding: 60px 20px;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1.1rem;
    margin-top: 10px;
  }
  input {
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
  }
  </style>