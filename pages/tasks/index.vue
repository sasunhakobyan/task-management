<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const taskStore = useTaskStore();

// const isModalOpen = computed(() => {
//   return route.name === 'index-task-id'
// })

// function closeModal() {
//   router.push('/tasks');
// }

</script>

<template>
  <div class="p-4 h-full overflow-auto">
    <main class="flex flex-row items-start gap-4">
      <BoardColumn v-for="column in taskStore.columns" :column="column" />
    </main>
    <!-- <div v-show="isModalOpen" class="task-bg" @click.self="closeModal">
      <NuxtPage :key="route.fullPath" />
    </div> -->
  </div>
</template>