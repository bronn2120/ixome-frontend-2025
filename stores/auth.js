import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    jwt: null,
  }),
  actions: {
    async login(credentials) {
      const response = await ('/api/auth/local', {
        method: 'POST',
        body: credentials,
      });
      this.user = response.user;
      this.jwt = response.jwt;
      useRouter().push('/dashboard');
    },
    async fetchUser() {
      if (!this.jwt) return;
      try {
        this.user = await ('/api/users/me', {
          headers: { Authorization: `Bearer ${this.jwt}` },
        });
      } catch (e) {
        console.error(e);
        this.logout();
      }
    },
    logout() {
      this.user = null;
      this.jwt = null;
      useRouter().push('/login');
    },
  },
  persist: true, // Optional for localStorage
});
