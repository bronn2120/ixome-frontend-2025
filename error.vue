<template>
  <div>
    <h1>Oops! Something Went Wrong</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>