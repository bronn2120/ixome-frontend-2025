<template>
  <div class="signup-page">
    <h1>Sign Up</h1>
    <form>
      <label>Name:</label>
      <input type="text" />
      <label>Email:</label>
      <input type="email" />
      <label>Password:</label>
      <input type="password" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Sign Up',
  meta: [
    { name: 'description', content: 'Sign up for an IxomeAI account.' }
  ]
});
</script>

<style scoped>
.signup-page {
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