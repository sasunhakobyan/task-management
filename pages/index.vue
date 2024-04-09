<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <span class="text-3xl text-white font-semibold">Welcome to TaskManager</span>
    <NuxtLink to="/tasks">
      <UButton class="mt-4 bg-rose-600 hover:bg-rose-950" icon="i-heroicons-arrow-right-end-on-rectangle-16-solid"
        size="sm" variant="solid" label="Let's go" :trailing="false" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
