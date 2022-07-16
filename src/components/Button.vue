<template>
  <button @click="action" :class="[
    { 'px-10 py-4': size === 'xl' },
    { 'px-5 py-3': size === 'lg' },
    { 'px-4 py-2 text-sm': size === 'md' },
    disabled ? 'opacity-50 cursor-pointer' : '',
  
  ]" class="font-medium leading-5 text-white
    bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 
    focus:outline-none focus:shadow-outline-purple flex items-center transition duration-200 ease-in"
    :disabled="disabled">
    <component :is="icon" class="w-6 h-6 text-white mr-2" v-if="icon && !loading" />
    <Loader class="w-6 h-6 text-white mr-2" v-if="loading" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import Loader from "./Loader.vue";

const emit = defineEmits(['action'])
const { size, loading, disabled } = defineProps({
  size: {
    type: String,
    required: true
  },
  icon: {},
  loading: {
    type: Boolean,
    required: true
  },
  disabled: {
    type: Boolean,
    required: true
  },
})

async function action() {
  if (loading) return;
  return await emit("action");
}

</script>