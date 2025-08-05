<template>
  <header class="header-area" :class="{ 'is-sticky': isSticky }">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container mx-auto px-4">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/logo.png" alt="IXome.ai Logo" class="logo h-12" loading="lazy" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto space-x-4">
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/" exact>Home</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/about">About</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/services">Services</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/pricing">Pricing</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/projects">Projects</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/blog">Blog</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/contact">Contact</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/login">Login</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link text-white hover:text-blue-500" to="/signup">Sign Up</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { NuxtLink } from '#components';

const isSticky = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 300;
  });
});
</script>

<style scoped>
.header-area {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-area.is-sticky {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.navbar-dark .navbar-nav .nav-link {
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.navbar-dark .navbar-nav .nav-link.active {
  color: #007bff;
}

.navbar-toggler {
  border-color: #fff;
}

@media (max-width: 991px) {
  .navbar-nav {
    padding-top: 0.5rem;
  }

  .nav-item {
    margin-bottom: 0.5rem;
  }

  .nav-link {
    font-size: 0.9375rem;
  }
}
</style>