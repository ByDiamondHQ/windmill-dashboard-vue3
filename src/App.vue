<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" id="app">
    <Sidebar :isSideMenuOpen="isSideMenuOpen" @close-side-menu="isSideMenuOpen = false" />

    <div class="flex flex-col flex-1 w-full">
      <Navigation @open-side-menu="isSideMenuOpen = !isSideMenuOpen" />
      <div class="p-6 dark:text-white">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "@/assets/main.min.css"

import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Navigation from './components/Navigation.vue'

const isSideMenuOpen = ref(false);
</script>
