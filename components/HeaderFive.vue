<template>
  <header class="header-area fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container mx-auto px-4">
        <NuxtLink class="navbar-brand" to="/">
          <img src="/logo.png" alt="IXome.ai Logo" class="h-12" loading="lazy" @error="onLogoError" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto space-x-4">
            <li class="nav-item"><NuxtLink class="nav-link" to="/" exact>Home</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/pricing">Pricing</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/subscribe">Subscribe</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/login">Login</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/signup">Sign Up</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { NuxtLink } from '#components';

const onLogoError = (e) => {
  e.target.src = 'https://via.placeholder.com/200x50/007bff/ffffff?text=IXomeAI';
};
</script>

<style scoped>
.header-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #343a40 !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.navbar-nav .nav-link {
  color: #ffffff !important;
  font-weight: 500;
}
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #28a745 !important;
}
</style>