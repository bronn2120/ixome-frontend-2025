<template>
    <div class="control4-controls p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Control4 System Control</h2>
     
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="zone in zones" :key="zone.id" class="zone-card p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">{{ zone.name }}</h3>
         
          <div class="mb-5">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Source</p>
            <select v-model="zone.source" class="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
              <option v-for="src in sources" :key="src">{{ src }}</option>
            </select>
          </div>
         
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-600 dark:text-gray-300">Volume</span>
            <input type="range" v-model="zone.volume" min="0" max="100" class="w-32" />
            <span class="text-sm font-medium w-10 text-right">{{ zone.volume }}%</span>
          </div>
         
          <div class="pt-4 border-t border-gray-300 dark:border-gray-600">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Thermostat</p>
            <div class="flex items-center gap-4">
              <button @click="zone.temp--" class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">−</button>
              <span class="text-xl font-bold">{{ zone.temp }}°F</span>
              <button @click="zone.temp++" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">+</button>
            </div>
            <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Mode: {{ zone.mode }} • {{ zone.fan }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
   
  <script setup>
  import { ref } from 'vue'
  
  const sources = ['Apple TV', 'Sonos', 'Blu-ray', 'Cable', 'Spotify', 'Off']
  
  const zones = ref([
    {
      id: 1,
      name: 'Living Room',
      source: 'Sonos',
      volume: 45,
      temp: 72,
      mode: 'Heat',
      fan: 'Auto'
    },
    {
      id: 2,
      name: 'Kitchen',
      source: 'Spotify',
      volume: 30,
      temp: 70,
      mode: 'Cool',
      fan: 'On'
    },
    {
      id: 3,
      name: 'Master Bedroom',
      source: 'Apple TV',
      volume: 35,
      temp: 68,
      mode: 'Auto',
      fan: 'Auto'
    }
  ])
  </script>