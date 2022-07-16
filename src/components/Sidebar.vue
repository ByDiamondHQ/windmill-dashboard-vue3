<template>
  <div>
    <aside
      class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block h-screen border-r border-gray-200 dark:border-gray-700">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <router-link class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
          Windmill
        </router-link>
        <ul class="mt-12">
          <li class="relative px-6 py-1" v-for="page in pages" :key="page.name">
            <router-link exact-active-class="bg-purple-400 text-white"
              class="inline-flex items-center w-full text-sm font-semibold transition duration-200 ease-in hover:bg-purple-500 hover:text-white  py-2 px-2 rounded-lg "
              :to="`/${page.to}`">
              <component :is="page.icon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" />
              <span class="ml-4">{{ page.name }}</span>
            </router-link>
          </li>
          <li class="relative px-6 py-3">
            <button
              class="px-3 inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              v-on:click="togglePagesMenu" aria-haspopup="true">
              <span class="inline-flex items-center">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                  </path>
                </svg>
                <span class="ml-4">Pages</span>
              </span>
              <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <template v-if="isPagesMenuOpen">
              <ul x-transition:enter="transition-all ease-in-out duration-300"
                x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                x-transition:leave="transition-all ease-in-out duration-300"
                x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="/">Login</router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="/">
                    Create account
                  </router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="/">
                    Forgot password
                  </router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="/">404</router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="/">Blank</router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <div class="px-6 my-6">
          <button
            class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span class="ml-2" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Mobile Sidebar -->
    <div v-if="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      v-on:click="closeSideMenu"></div>
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-96 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
      v-if="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0 transform -translate-x-20" @keydown.escape="closeSideMenu">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <router-link class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="#">
          Windmill
        </router-link>
        <ul>
          <li class="relative px-6 py-3" v-for="page in pages" :key="page.name">
            <router-link active-class="bg-purple-200"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              :to="`/${page.to}`">
              <component :is="page.icon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" />
              <span class="ml-4">{{ page.name }}</span>
            </router-link>
          </li>
          <li class="relative px-6 py-3">
            <button
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              v-on:click="togglePagesMenu" aria-haspopup="true">
              <span class="inline-flex items-center">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                  </path>
                </svg>
                <span class="ml-4">Pages</span>
              </span>
              <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <div v-if="isPagesMenuOpen">
              <ul x-transition:enter="transition-all ease-in-out duration-300"
                x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                x-transition:leave="transition-all ease-in-out duration-300"
                x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="pages/login.html">Login</router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="pages/create-account.html">
                    Create account
                  </router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="pages/forgot-password.html">
                    Forgot password
                  </router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="pages/404.html">404</router-link>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <router-link class="w-full" to="pages/blank.html">Blank</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="px-6 my-6">
          <button
            class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span class="ml-2" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { HomeIcon, CursorClickIcon, ClipboardListIcon, DuplicateIcon, MenuIcon, ChartPieIcon, CollectionIcon } from "@heroicons/vue/outline";

const { isSideMenuOpen } = defineProps(['isSideMenuOpen'])
const emits = defineEmits(['closeSideMenu'])

const isPagesMenuOpen = ref(false);

const pages = [
  {
    name: 'Dashboard',
    icon: HomeIcon,
    to: ''
  },

  {
    name: 'Buttons',
    icon: CursorClickIcon,
    to: 'buttons'
  },
  {
    name: 'Cards',
    icon: CollectionIcon,
    to: 'cards'
  },
  {
    name: 'Charts',
    icon: ChartPieIcon,
    to: 'charts'
  },
  {
    name: 'Forms',
    icon: ClipboardListIcon,
    to: 'forms'
  },
  {
    name: 'Modals',
    icon: DuplicateIcon,
    to: 'modals'
  },
  {
    name: 'Tables',
    icon: MenuIcon,
    to: 'tables'
  }
]


function togglePagesMenu() {
  isPagesMenuOpen.value = !isPagesMenuOpen.value;
}

function closeSideMenu() {
  return emits('closeSideMenu')
}
</script>
