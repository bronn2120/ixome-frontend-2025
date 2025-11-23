<template>
  <div class="agent-creator">
    <h2>Create Virtual Agent</h2>
    <form @submit.prevent="createAgent">
      <input v-model="agentName" placeholder="Agent Name" required />
      <button type="submit">Create</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agentName: '',
      errorMessage: ''
    }
  },
  methods: {
    async createAgent() {
      this.errorMessage = ''
      try {
        // Fetch current agent count from API
        const { data: count } = await this.$axios.get('/api/agents/count')
        const role = this.$store.getters.userRole
        let quota = 1 // Basic default
        if (role === 'Pro') quota = 5
        else if (role === 'Enterprise') quota = Infinity

        if (count >= quota) {
          this.errorMessage = `Quota exceeded for ${role} plan. Upgrade for more agents.`
          return
        }

        // Proceed to create agent
        await this.$axios.post('/api/agents', { name: this.agentName })
        alert('Agent created successfully!')
        this.agentName = ''
      } catch (e) {
        this.errorMessage = 'Error creating agent: ' + (e.response ? e.response.data.message : e.message)
      }
    }
  }
}
</script>

<style scoped>
.agent-creator {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>