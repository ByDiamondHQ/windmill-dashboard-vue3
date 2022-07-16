<template>
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Cards
    </h2>

    <CTA />

    <!-- Big section cards -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Big section cards
    </h4>
    <Card>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Large, full width sections goes here
      </p>
    </Card>

    <!-- Responsive cards -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Responsive cards
    </h4>
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <!-- Card -->
      <Card>
        <div class="flex items-center">
          <div class="p-4 mr-4 text-orange-500 bg-orange-100 rounded-lg dark:text-orange-100 dark:bg-orange-500">
            <UserGroupIcon class="w-6" />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total clients
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              6389
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div class="flex items-center">
          <div class="p-4 mr-4 text-green-500 bg-green-100 rounded-lg dark:text-green-100 dark:bg-green-500">
            <CashIcon class="w-6" />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Account Balance
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              $46,760.89
            </p>
          </div>
        </div>
      </Card>

      <!-- Card -->
      <Card>
        <div class="flex items-center">
          <div class="p-4 mr-4 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-100 dark:bg-blue-500">
            <ShoppingCartIcon class="w-6" />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              New sales
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              376
            </p>
          </div>
        </div>
      </Card>
      <!-- Card -->
      <Card>
        <div class="flex items-center">
          <div class="p-4 mr-4 text-teal-500 bg-teal-100 rounded-lg dark:text-teal-100 dark:bg-teal-500">
            <ChatIcon class="w-6" />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending contacts
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              35
            </p>
          </div>
        </div>
      </Card>
    </div>

    <!-- Cards with title -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Cards with title
    </h4>
    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <Card>
        <h4 class="my-4 font-semibold text-gray-600 dark:text-gray-300">
          Revenue
        </h4>
        <p class="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
          commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
          qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
        </p>
      </Card>
      <Card class="bg-red-100">
        <h4 class="my-2 font-semibold text-gray-600 dark:text-gray-300">
          Colored card
        </h4>
        <p class="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
          commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
          qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
        </p>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTA from '@/components/CTA.vue';
import Card from "@/components/Card.vue";
import { UserGroupIcon, CashIcon, ShoppingCartIcon, ChatIcon } from '@heroicons/vue/outline';
</script>
