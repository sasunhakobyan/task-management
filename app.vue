<script setup lang="ts">
onBeforeMount(() => {
  console.log('In Nuxt, you can think of a Pinia store like a composable function. The state will not be initialized until you invoke it explicitly.');
  console.log('This is why we need to call useTaskStore() in the APP.vue, to avoid Hydration mismatch errors with SSR.')
  useTaskStore()
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
