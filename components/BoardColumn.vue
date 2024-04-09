<script setup lang="ts">
import { routerKey } from 'vue-router';
import type Column from '~/types/Column';

const props = defineProps({
  column: {
    type: Object as PropType<Column>,
    required: true
  },
  columnIndex: {
    type: Number,
    requried: true
  }
});

const taskStore = useTaskStore();

const newTaskName = ref("");
const router = useRouter();

function addTask() {
  taskStore.addTask(newTaskName.value, props.columnIndex ?? 0);
  newTaskName.value = '';
}

function goToTask(taskId: string) {
  router.push(`/tasks/task-detail/${taskId}`);
}
</script>

<template>
  <UContainer class="flex-1 p-4 rounded bg-gray-200 min-w-80">
    <div class="mb-2">
      <span class="font-semibold">{{ props.column.name }}</span>
    </div>
    <ul>
      <li v-for="task in props.column.tasks" :key="task.id">
        <UCard class="mb-4" @click="goToTask(task.id)">
          <strong>{{ task.title }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
    <UInput v-model="newTaskName" type="text" placeholder="Create new task" icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addTask" />
  </UContainer>
</template>

<style></style>
