<template>
  <div class="support-page ptb-80">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Support Chat</h1>
      <p class="mb-6 text-gray-600">Welcome to IXome.ai Support! Let’s get your tech sorted with a friendly chat!</p>
      <div v-if="errorMessage" class="error-message bg-red-100 text-red-500 p-2 rounded-md mb-4">{{ errorMessage }}</div>
      <div v-if="loading" class="loading text-blue-500 mb-4">Connecting to our team...</div>
      <div v-if="messages.length" class="chat-messages border border-gray-300 p-4 rounded-md bg-white max-h-[400px] overflow-y-auto mb-4">
        <div v-for="message in messages" :key="message.id" :class="['message', message.sender === currentUserId ? 'sent' : 'received']">
          <div class="message-content p-2 rounded-lg max-w-[70%]">
            <strong class="text-sm">{{ message.sender }}</strong>
            <p class="text-gray-600">{{ message.text }}</p>
            <span class="timestamp text-xs text-gray-400">{{ formatTimestamp(message.timestamp) }}</span>
          </div>
        </div>
      </div>
      <div v-else class="no-messages bg-gray-100 p-2 rounded-md mb-4 text-gray-600">Hey there! Start chatting with us to get help!</div>
      <div class="chat-input flex gap-2">
        <input v-model="newMessage" placeholder="Type your message here..." @keyup.enter="sendMessage" :disabled="loading" class="flex-grow p-2 border border-gray-300 rounded-md text-base disabled:bg-gray-100 disabled:cursor-not-allowed" />
        <button @click="sendMessage" :disabled="loading" class="btn btn-primary px-4 py-2 text-white rounded-md">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import io from 'socket.io-client';

const currentUserId = computed(() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('user_id') || 'guest';
  }
  return 'guest';
});
const messages = ref([]);
const newMessage = ref('');
const errorMessage = ref('');
const loading = ref(true);
const socket = ref(null);

onMounted(() => {
  if (typeof window === 'undefined') return;
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      errorMessage.value = 'Please log in at /login to start chatting.';
      loading.value = false;
      return;
    }

    socket.value = io('http://127.0.0.1:5001', {
      auth: { token, user_id: currentUserId.value }
    });

    socket.value.on('connect', () => {
      console.log('Connected to Socket.IO server');
      loading.value = false;
      messages.value.push({
        id: Date.now(),
        sender: 'System',
        text: 'Hey there! I’m your IXome.ai chatbot—ready to help with a smile! 😄',
        timestamp: new Date().getTime(),
      });
    });

    socket.value.on('response', (data) => {
      messages.value.push({
        id: Date.now(),
        sender: 'Bot',
        text: data.text,
        timestamp: new Date().getTime(),
      });
    });

    socket.value.on('connect_error', (error) => {
      errorMessage.value = `Connection issue: ${error.message}. Please try logging in again.`;
      console.error('Socket.IO connection error:', error);
      loading.value = false;
    });
  } catch (error) {
    errorMessage.value = `Chat setup failed: ${error.message}`;
    console.error('Chat initialization error:', error);
    loading.value = false;
  }
});

onUnmounted(() => {
  if (socket.value) {
    socket.value.disconnect();
  }
});

const sendMessage = () => {
  if (!newMessage.value.trim() || !socket.value) return;
  try {
    socket.value.emit('message', {
      user_id: currentUserId.value,
      text: newMessage.value,
    });
    messages.value.push({
      id: Date.now(),
      sender: currentUserId.value,
      text: newMessage.value,
      timestamp: new Date().getTime(),
    });
    newMessage.value = '';
  } catch (error) {
    errorMessage.value = `Couldn’t send message: ${error.message}`;
    console.error('Message sending error:', error);
  }
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

useHead({
  title: 'IXome.ai - Support Chat',
  meta: [
    { name: 'description', content: 'Get real-time support for your smart home systems with IXome.ai’s AI chatbot.' },
    { name: 'keywords', content: 'smart home support, Control4, Lutron, AI chatbot' }
  ]
});
</script>

<style scoped>
.support-page {
  position: relative;
  z-index: 1;
}

.support-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.support-page p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #666;
}

.error-message {
  color: #d9534f;
  margin-bottom: 1rem;
  padding: 10px;
  background-color: #fff3f3;
  border-radius: 4px;
}

.loading {
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.chat-messages {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 4px;
}

.no-messages {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.message.sent {
  justify-content: flex-end;
}

.message.received {
  justify-content: flex-start;
}

.message-content {
  background-color: #f1f1f1;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 70%;
}

.message.sent .message-content {
  background-color: #007bff;
  color: white;
}

.timestamp {
  font-size: 0.8rem;
  color: #999;
  margin-top: 4px;
  display: block;
}

.chat-input {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.chat-input input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.chat-input input:disabled {
  background-color: #f8f9fa;
  cursor: not-allowed;
}

.chat-input button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.chat-input button:hover {
  background-color: #0056b3;
}

.chat-input button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .support-page {
    padding: 10px;
  }

  .support-page h1 {
    font-size: 1.5rem;
  }

  .support-page p {
    font-size: 1rem;
  }

  .chat-messages {
    max-height: 300px;
  }

  .chat-input input {
    font-size: 0.9rem;
  }

  .chat-input button {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
}
</style>