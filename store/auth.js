// Perfect Vuex auth store module for IxomeAI – integrates JWT with Strapi for user login, fetch, and role access
// Assumes @nuxtjs/axios is installed for API calls; user role fetched from /users/me endpoint

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    // Auto-fetch user on server init if JWT cookie exists (for SSR)
    if (req.headers.cookie) {
      const jwt = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
      if (jwt) {
        this.$axios.setToken(jwt.split('=')[1], 'Bearer')
        try {
          const { data } = await this.$axios.get('/users/me')
          commit('SET_USER', data)
        } catch (e) {
          console.error('Failed to fetch user on init:', e)
        }
      }
    }
  },
  async login({ commit }, { email, password }) {
    try {
      const { data } = await this.$axios.post('/auth/local', {
        identifier: email,
        password
      })
      commit('SET_USER', data.user)
      this.$axios.setToken(data.jwt, 'Bearer')
      // Store JWT in cookie for persistence (use secure cookies in production)
      document.cookie = `jwt=${data.jwt}; path=/;`
      return data.user
    } catch (e) {
      throw new Error('Login failed: ' + (e.response ? e.response.data.message : e.message))
    }
  },
  async fetchUser({ commit }) {
    try {
      const { data } = await this.$axios.get('/users/me')
      commit('SET_USER', data)
      return data
    } catch (e) {
      throw new Error('Fetch user failed: ' + (e.response ? e.response.data.message : e.message))
    }
  },
  logout({ commit }) {
    commit('SET_USER', null)
    this.$axios.setToken(false)
    document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  userRole(state) {
    return state.user ? state.user.role.name : null  // Assumes Strapi role has 'name' field (e.g., 'Basic', 'Pro', 'Enterprise')
  }
}