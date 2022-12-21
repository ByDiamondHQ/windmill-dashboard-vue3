<template>
  <tr class="text-gray-700 dark:text-gray-400">
    <td class="px-4 py-3">
      <div class="flex items-center text-sm">
        <Avatar size="sm" class="mr-3" :source="person.img" />
        <div>
          <p class="font-semibold">{{ person.name }}</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            {{ person.description }}
          </p>
        </div>
      </div>
    </td>
    <td class="px-4 py-3 text-sm">${{ person.amount }}</td>
    <td class="px-4 py-3 text-xs">
      <Badge v-if="person.status === 'approved'" isType="primary" label="Approved" />
      <Badge v-if="person.status === 'pending'" isType="warning" label="Pending" />
      <Badge v-if="person.status === 'declined'" isType="danger" label="Declined" />
    </td>
    <td class="px-4 py-3 text-sm">6/10/2020</td>
  </tr>
</template>

<script setup lang="ts">
import Avatar from "../Avatar.vue";
import Badge from "../Badge.vue";

const { person } = defineProps({
  person: {
    type: Object,
    required: true,
  },
});
</script>
