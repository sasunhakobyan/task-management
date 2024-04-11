<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue';
import { animations } from "@formkit/drag-and-drop";
import type Task from '~/types/Task';
import TaskType from '~/types/TaskType';

const props = defineProps({
  columnName: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<TaskType>,
    required: true
  }
});

const taskStore = useTaskStore();
const tasks = computed(() => taskStore.getTasks(props.type));

console.log(tasks.value);

const newTaskName = ref("");
const router = useRouter();

const [todoList, todos] = useDragAndDrop<Task>(tasks.value, {
  group: 'taskGroup',
  sortable: true,
  accepts: function (parent1, parent2, parent3, elementInfo) {
    const task = elementInfo.draggedNode.data.value;
    taskStore.updateTaskType(task.id, props.type);

    return true;
  },
  plugins: [animations()],
});

// watchEffect(() => {
// });

function addTask() {
  taskStore.addTask(newTaskName.value, props.type);
  newTaskName.value = '';
}

function goToTask(taskId: string) {
  router.push(`/tasks/task-detail/${taskId}`);
}
</script>

<template>
  <UContainer class="flex-1 p-4 rounded bg-gray-200 min-w-80">
    <div class="mb-2">
      <span class="font-semibold">{{ columnName }}</span>
    </div>
    <ul ref="todoList" class="min-h-4">
      <li v-for="task in todos" :key="task.id">
        <UCard class="mb-4 cursor-pointer" @click="goToTask(task.id)">
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
