<template>
  <header class="header-area">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container mx-auto px-4">
        <NuxtLink class="navbar-brand" to="/">
          <img :src="logoSrc" alt="IXome.ai Logo" class="h-8 w-auto" loading="lazy" @error="onLogoError" />
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
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const logoSrc = ref('/logo.jpg'); // Direct public path, no import needed
const onLogoError = () => {
  logoSrc.value = 'https://via.placeholder.com/200x50?text=IXome.ai+Logo'; // Fallback placeholder if logo fails
};

onMounted(() => {
  console.log('HeaderFive.vue mounted');
  const { $bootstrap } = useNuxtApp();
  if ($bootstrap) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarToggler && navbarCollapse) {
      console.log('Navbar elements found, initializing Bootstrap collapse');
      new $bootstrap.Collapse(navbarCollapse, { toggle: false });
    } else {
      console.error('Navbar toggler or collapse not found');
    }
  } else {
    console.warn('Bootstrap not available yet - retrying in 500ms');
    setTimeout(() => {
      onMounted(); // Retry init
    }, 500);
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  visibility: visible !important;
  opacity: 1 !important;
}

.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff !important;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  display: block;
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

.navbar-collapse {
  background-color: #343a40;
}

@media (max-width: 991px) {
  .navbar-nav {
    flex-direction: column;
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