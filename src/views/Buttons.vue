<template>
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Buttons
    </h2>
    <CTA />
    <!-- Button sizes -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Sizes
    </h4>
    <div class="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
      <Button size="xl" :loading="buttons[0].active" :disabled="buttons[0].active" @action="setButtonToLoading(0)">
        Button
      </Button>

      <Button size="lg" :loading="buttons[1].active" :disabled="buttons[1].active" @action="setButtonToLoading(1)">
        Button
      </Button>

      <Button size="md" :loading="buttons[2].active" :disabled="buttons[2].active" @action="setButtonToLoading(2)">
        Button
      </Button>
    </div>
    <p class="mb-8 text-gray-700 dark:text-gray-400">
      Apply
      <code>w-full</code>
      to any button to create a block level button.
    </p>

    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Icons
    </h4>
    <div class="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
      <div>
        <Button size="md" :icon="HomeIcon" :loading="buttons[3].active" :disabled="buttons[3].active"
          @action="setButtonToLoading(3)">
          Icon Left
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CheckIcon, DocumentAddIcon, HomeIcon } from "@heroicons/vue/outline";
import CTA from "../components/CTA.vue";
import Button from "../components/Button.vue";

const buttons = ref([
  {
    active: false
  },
  {
    active: false
  },
  {
    active: false
  },
  {
    active: false
  },
])

// @ts-ignore
function setButtonToLoading(index) {
  buttons.value[index].active = !buttons.value[index].active
  setTimeout(() => {
    buttons.value[index].active = !buttons.value[index].active
  }, 2000)
}
</script>
