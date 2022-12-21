<template>
  <button
    @click="action"
    :class="[
      { 'px-4 py-3 min-w-32': size === 'lg' },
      { 'px-3 py-2 min-w-28': size === 'md' },
      { 'px-2 py-1 text-sm min-w-20': size === 'sm' },
      isDisabled ? 'opacity-50 cursor-pointer' : '',
      isTypeClasses,
    ]"
    class="flex items-center font-medium leading-5 text-white transition duration-200 ease-in border border-transparent rounded-lg focus:outline-none focus:shadow-outline-purple"
    :disabled="isDisabled">
    <Loader :class="[iconClasses, iconSpacing]" v-if="isLoading" />
    <component :is="icon" :class="[iconClasses, iconSpacing]" v-if="icon && !isLoading" />
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import Loader from "./Loader.vue";

const emit = defineEmits(["action"]);
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    required: true,
  },
  icon: {},
  isType: {
    type: String as PropType<"primary" | "secondary" | "danger" | "warning" | "info">,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    required: true,
  },
});

const isTypeClasses = computed(() => {
  if (props.isType === "primary") {
    return "bg-deep-sea-500 hover:bg-deep-sea-600";
  }
  if (props.isType === "info") {
    return "bg-boston-blue-500 hover:bg-boston-blue-600";
  }
  if (props.isType === "warning") {
    return "bg-yellow-500 hover:bg-yellow-600";
  }
  if (props.isType === "danger") {
    return "bg-red-500 hover:bg-red-600";
  }
});

const iconClasses = [
  { "w-6 h-6": props.size === "lg" },
  { "w-5 h-5": props.size === "md" },
  { "w-4 h-4": props.size === "sm" },
  ,
  "text-white",
];

const iconSpacing = [
  { "mr-3": props.size === "lg" && props.label },
  { "mr-2": props.size === "md" && props.label },
  { "mr-1": props.size === "sm" && props.label },
];

async function action() {
  if (props.isLoading) return;
  return emit("action");
}
</script>
