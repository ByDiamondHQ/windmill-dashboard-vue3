<template>
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Buttons</h2>
    <CTA />

    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Types</h4>
    <div class="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
      <Button
        label="Button"
        isType="primary"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[1].active"
        :isDisabled="buttons[1].active"
        @action="setButtonToLoading(1)" />

      <Button
        label="Button"
        isType="info"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[2].active"
        :isDisabled="buttons[2].active"
        @action="setButtonToLoading(2)" />

      <Button
        label="Button"
        isType="warning"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[3].active"
        :isDisabled="buttons[3].active"
        @action="setButtonToLoading(3)" />

      <Button
        label="Button"
        isType="danger"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[4].active"
        :isDisabled="buttons[4].active"
        @action="setButtonToLoading(4)" />
    </div>

    <!-- Button sizes -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Sizes</h4>
    <div class="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
      <Button
        label="Button"
        isType="primary"
        size="lg"
        :icon="HomeIcon"
        :isLoading="buttons[5].active"
        :isDisabled="buttons[5].active"
        @action="setButtonToLoading(5)" />

      <Button
        label="Button"
        isType="primary"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[6].active"
        :isDisabled="buttons[6].active"
        @action="setButtonToLoading(6)" />

      <Button
        label="Button"
        isType="primary"
        size="sm"
        :icon="HomeIcon"
        :isLoading="buttons[7].active"
        :isDisabled="buttons[7].active"
        @action="setButtonToLoading(7)" />
    </div>
    <p class="mb-8 text-gray-700 dark:text-gray-400">
      Apply
      <code>w-full</code>
      to any button to create a block level button.
    </p>

    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Icons</h4>
    <div class="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
      <Button
        isType="primary"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[8].active"
        :isDisabled="buttons[8].active"
        @action="setButtonToLoading(8)"
        label="Button" />

      <Button
        isType="primary"
        size="md"
        :icon="HomeIcon"
        :isLoading="buttons[9].active"
        :isDisabled="buttons[9].active"
        @action="setButtonToLoading(9)" />

      <Button
        isType="danger"
        size="md"
        :icon="XMarkIcon"
        :isLoading="buttons[10].active"
        :isDisabled="buttons[10].active"
        @action="setButtonToLoading(10)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CheckIcon, DocumentPlusIcon, HomeIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import CTA from "../components/CTA.vue";
import Button from "../components/Button.vue";

const buttons = ref([
  {
    active: false,
    icon: CheckIcon,
  },
  {
    active: false,
    icon: DocumentPlusIcon,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
]);

// @ts-ignore
function setButtonToLoading(index) {
  buttons.value[index].active = !buttons.value[index].active;
  setTimeout(() => {
    buttons.value[index].active = !buttons.value[index].active;
  }, 2000);
}
</script>
