<template>
  <div>
    <BigdataAnalyticsMainBanner />
    <BigdataAnalyticsWhatWeDo />
    <BigdataAnalyticsDiscover />
    <BigdataAnalyticsTeam />
    <BigdataAnalyticsFunFacts />
    <BigdataAnalyticsFeedback />
    <BigdataAnalyticsIndustries />
    <BigdataAnalyticsOurRecentStory />
    <BigdataAnalyticsStartYourFreeTrial />
    <NuxtLink
      v-if="showChatButton"
      to="/support"
      class="floating-chat-button"
      role="button"
      aria-label="Open support chat with ixome.ai"
    >
      <span>Chat with Us</span>
    </NuxtLink>
    <div class="chat-widget">
      <input v-model="username" type="text" placeholder="Username" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button @click="login">Login</button>
      <input v-model="query" type="text" placeholder="Quick question?">
      <button @click="sendQuery">Ask</button>
      <p v-if="response">{{ response }}</p>
    </div>
  </div>
</template>

<script setup>
import BigdataAnalyticsMainBanner from '~/components/BigdataAnalytics/MainBanner.vue';
import BigdataAnalyticsWhatWeDo from '~/components/BigdataAnalytics/WhatWeDo.vue';
import BigdataAnalyticsDiscover from '~/components/BigdataAnalytics/Discover.vue';
import BigdataAnalyticsTeam from '~/components/BigdataAnalytics/Team.vue';
import BigdataAnalyticsFunFacts from '~/components/BigdataAnalytics/FunFacts.vue';
import BigdataAnalyticsFeedback from '~/components/BigdataAnalytics/Feedback.vue';
import BigdataAnalyticsIndustries from '~/components/BigdataAnalytics/Industries.vue';
import BigdataAnalyticsOurRecentStory from '~/components/BigdataAnalytics/OurRecentStory.vue';
import BigdataAnalyticsStartYourFreeTrial from '~/components/BigdataAnalytics/StartYourFreeTrial.vue';
import { NuxtLink } from '#components';
import { ref, computed } from 'vue';

const showChatButton = computed(() => {
  return useRoute().path !== '/support';
});

const username = ref('');
const password = ref('');
const query = ref('');
const response = ref('');
const token = ref('');

const login = async () => {
  try {
    const res = await fetch('http://127.0.0.1:5001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    });
    const data = await res.json();
    if (data.access_token) {
      token.value = data.access_token;
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user_id', data.user_id);
      response.value = 'Login successful! You can now use the chat.';
    } else {
      response.value = data.msg || 'Login failed';
    }
  } catch (e) {
    response.value = 'Error logging in';
  }
};

const sendQuery = async () => {
  if (!query.value) return;
  if (!token.value) {
    response.value = 'Please log in first';
    return;
  }
  try {
    const res = await fetch('http://127.0.0.1:5001/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      },
      body: JSON.stringify({
        input_type: 'text',
        input_data: query.value
      })
    });
    const data = await res.json();
    response.value = data.result || data.error || 'Error: No response';
  } catch (e) {
    response.value = 'Error: Failed to send query';
  }
};
</script>

<style scoped>
.floating-chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
  z-index: 1000;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.floating-chat-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
.floating-chat-button:focus {
  outline: 3px solid #0056b3;
  outline-offset: 2px;
  background-color: #0056b3;
}
.floating-chat-button span {
  display: inline-block;
  text-align: center;
  font-weight: 500;
}
.chat-widget {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: white;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 999;
}
.chat-widget input {
  display: block;
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}
.chat-widget button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .floating-chat-button {
    bottom: 10px;
    right: 10px;
    padding: 10px 18px;
    font-size: 1rem;
  }
}
</style>