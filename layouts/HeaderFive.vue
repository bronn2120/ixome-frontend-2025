<template>
  <header class="header-area">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container mx-auto px-4">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/logo.png" alt="IXome.ai Logo" class="h-12" loading="lazy" />
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
            <li class="nav-item"><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/about">About</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/services">Services</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/pricing">Pricing</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/projects">Projects</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/blog">Blog</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/contact">Contact</NuxtLink></li>
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
import { onMounted } from 'vue';

onMounted(() => {
  console.log('HeaderFive.vue mounted');
  if (typeof window !== 'undefined' && window.bootstrap) {
    console.log('Bootstrap JS loaded');
  } else {
    console.error('Bootstrap JS not loaded');
  }
});
</script>

<style scoped>
.header-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #343a40;
}

.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff !important;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #007bff !important;
}

.navbar-toggler {
  border-color: #ffffff;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (max-width: 991px) {
  .navbar-nav {
    padding-top: 0.5rem;
    background-color: #343a40;
  }

  .nav-item {
    margin-bottom: 0.5rem;
  }

  .nav-link {
    font-size: 0.9375rem;
  }
}
</style>