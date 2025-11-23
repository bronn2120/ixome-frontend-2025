<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>Get in touch for smart home support inquiries.</p>
    <form>
      <label>Name:</label>
      <input type="text" />
      <label>Email:</label>
      <input type="email" />
      <label>Message:</label>
      <textarea></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
useHead({
  title: 'IxomeAI - Contact',
  meta: [
    { name: 'description', content: 'Contact IxomeAI for support.' }
  ]
});
</script>

<style scoped>
.contact-page {
  padding: 60px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
label {
  font-size: 1.1rem;
  margin-top: 10px;
}
input, textarea {
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