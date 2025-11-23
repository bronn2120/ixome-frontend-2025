<template>
    <div class="lutron-controls p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Lutron System Control</h2>
     
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="room in rooms" :key="room.id" class="room-card p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">{{ room.name }}</h3>
         
          <div class="space-y-3">
            <div v-for="light in room.lights" :key="light.id" class="flex items-center justify-between">
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ light.name }}</span>
              <button
                @click="toggleLight(room.id, light.id)"
                :class="light.state ? 'bg-green-500' : 'bg-gray-400'"
                class="w-12 h-6 rounded-full relative transition-colors duration-300"
              >
                <span :class="light.state ? 'translate-x-6' : 'translate-x-0'" class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300" />
              </button>
            </div>
          </div>
         
          <div class="mt-5 pt-5 border-t border-gray-300 dark:border-gray-600">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick Scenes</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="scene in room.scenes"
                :key="scene"
                @click="activateScene(room.id, scene)"
                class="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition"
              >
                {{ scene }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
   
  <script setup>
  import { ref } from 'vue'
  
  const rooms = ref([
    {
      id: 1,
      name: 'Living Room',
      lights: [
        { id: 1, name: 'Main Lights', state: true },
        { id: 2, name: 'Accent Lights', state: false },
        { id: 3, name: 'Floor Lamp', state: true }
      ],
      scenes: ['Movie Night', 'Reading', 'Party', 'Off']
    },
    {
      id: 2,
      name: 'Kitchen',
      lights: [
        { id: 4, name: 'Overhead', state: true },
        { id: 5, name: 'Under Cabinet', state: false }
      ],
      scenes: ['Cooking', 'Breakfast', 'Cleaning', 'Off']
    },
    {
      id: 3,
      name: 'Master Bedroom',
      lights: [
        { id: 6, name: 'Ceiling', state: false },
        { id: 7, name: 'Bedside Left', state: true },
        { id: 8, name: 'Bedside Right', state: true }
      ],
      scenes: ['Sleep', 'Wake Up', 'Romance', 'Off']
    }
  ])
  
  const toggleLight = (roomId, lightId) => {
    const room = rooms.value.find(r => r.id === roomId)
    const light = room.lights.find(l => l.id === lightId)
    light.state = !light.state
    // TODO: call backend API when ready
  }
  
  const activateScene = (roomId, scene) => {
    alert(`Activating Lutron scene "${scene}" in room ${roomId}`)
    // TODO: call backend API when ready
  }
  </script>