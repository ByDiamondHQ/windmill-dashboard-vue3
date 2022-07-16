<template>
  <tr class="text-gray-700 dark:text-gray-400">
    <td class="px-4 py-3">
      <div class="flex items-center text-sm">
        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
          <img class="object-cover w-full h-full rounded-full" :src="person.img" :alt="person.img" loading="lazy" />
          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        </div>
        <div>
          <p class="font-semibold">{{ person.name }}</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            {{ person.description }}
          </p>
        </div>
      </div>
    </td>
    <td class="px-4 py-3 text-sm">
      $ {{ person.amount }}
    </td>
    <td class="px-4 py-3 text-xs">
      <span v-if="person.status === 'approved'"
        class="px-2 py-1 font-semibold leading-tight text-green-500 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
        Approved
      </span>
      <span v-if="person.status === 'declined'"
        class="px-2 py-1 font-semibold leading-tight text-red-500 bg-red-100 rounded-full dark:bg-green-700 dark:text-green-100">
        Declined
      </span>
      <span v-if="person.status === 'pending'"
        class="px-2 py-1 font-semibold leading-tight text-yellow-500 bg-yellow-100 rounded-full dark:bg-green-700 dark:text-green-100">
        Pending
      </span>
    </td>
    <td class="px-4 py-3 text-sm">
      6/10/2020
    </td>
  </tr>
</template>

<script setup lang="ts">
const { person } = defineProps({
  person: {
    type: Object,
    required: true
  }
})
</script>