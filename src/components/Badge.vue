<template>
  <td class="px-4 py-3 text-xs">
    <span :class="[badgeTypeClass, 'px-2 py-1 font-semibold leading-tight rounded-full']">
      {{ label }}
    </span>
  </td>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  isType: {
    type: String as PropType<"primary" | "secondary" | "danger" | "warning" | "info">,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
});

const badgeTypeClass = computed(() => {
  if (props.isType === "primary") {
    return "bg-deep-sea-200 text-deep-sea-800";
  }
  if (props.isType === "info") {
    return "bg-boston-blue-200 text-boston-blue-800";
  }
  if (props.isType === "warning") {
    return "bg-yellow-200 text-yellow-800";
  }
  if (props.isType === "danger") {
    return "bg-red-200 text-red-800";
  }
});
</script>
