import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    jwt: null,
  }),
  actions: {
    async login(credentials) {
      // Strapi auth API call example
      const response = await ('/api/auth/local', {
        method: 'POST',
        body: credentials,
      });
      this.user = response.user;
      this.jwt = response.jwt;
      // Redirect or store
      useRouter().push('/dashboard');
    },
    logout() {
      this.user = null;
      this.jwt = null;
      useRouter().push('/login');
    },
  },
  persist: true,
});
