<template>
  <div>
    <button
      v-if="isButton"
      class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
      v-on:click="action"
      @keydown.escape="action"
      aria-haspopup="true">
      <img :class="[avatarSizeClass, 'object-cover rounded-full']" :src="source" :alt="name" aria-hidden="true" />
    </button>

    <img v-else :class="[avatarSizeClass, 'object-cover rounded-full']" :src="source" :alt="name" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const emit = defineEmits(["action"]);

const props = defineProps({
  initials: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  size: {
    type: String as PropType<"xs" | "sm" | "md" | "lg">,
    required: false,
    default: "md",
  },
  source: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
  isButton: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const avatarSizeClass = [
  { "w-6 h-6": props.size === "xs" },
  { "w-8 h-8": props.size === "sm" },
  { "w-10 h-10": props.size === "md" },
  { "w-16 h-16": props.size === "lg" },
];

async function action() {
  return emit("action");
}
</script>
