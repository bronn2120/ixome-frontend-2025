<template>
  <div>
    <h1>Dashboard</h1>
    <p>Tokens: {{ user.tokens }}</p>
    <p>Usage: {{ user.usage }}</p>
    <ul>History: <li v-for="item in user.history">{{ item }}</li></ul>
    <select v-model="prefs.lang"> <option>en</option> <option>es</option> </select>
    <button @click="toggleDark">Toggle Dark Mode</button>
    <button @click="toggleVoice">Toggle Voice</button>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})
import { useAuthStore } from '~/stores/auth'
import { useDark } from '@vueuse/core'
const authStore = useAuthStore()
authStore.fetchUser()
const user = authStore.user
const prefs = ref({ lang: 'en', dark: useDark(), voice: false })
function toggleDark() { prefs.value.dark = !prefs.value.dark }
function toggleVoice() { prefs.value.voice = !prefs.value.voice }
// Save prefs to Strapi on change
</script>