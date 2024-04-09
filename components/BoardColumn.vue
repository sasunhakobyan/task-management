<script setup lang="ts">
import type Column from '~/types/Column';

const props = defineProps({
  column: {
    type: Object as PropType<Column>,
    required: true
  }
})

const newTaskName = ref("");
</script>

<template>
  <UContainer class="flex-1 p-4 rounded bg-gray-200 min-w-80">
    <div class="mb-2">
      <span class="font-semibold">{{ column.name }}</span>
    </div>
    <ul>
      <li v-for="task in column.tasks" :key="task.id">
        <UCard class="mb-4" @click="">
          <strong>{{ task.title }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
    <UInput v-model="newTaskName" type="text" placeholder="Create new task" icon="i-heroicons-plus-circle-solid" />
  </UContainer>
</template>

<style></style>
