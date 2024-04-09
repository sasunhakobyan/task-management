<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const taskStore = useTaskStore();

const isModalOpen = computed(() => {
  return route.name === 'tasks-index-task-detail-id'
})

function closeModal() {
  router.push('/tasks');
}

</script>

<template>
  <div class="p-4 h-full overflow-auto">
    <main class="flex flex-row items-start gap-4">
      <BoardColumn v-for="(column, columnIndex) in taskStore.columns" :column="column" :columnIndex="columnIndex" />
    </main>
    <div v-show="isModalOpen" class="absolute inset-0 bg-black/75" @click.self="closeModal">
      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>