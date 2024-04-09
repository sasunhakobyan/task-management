<script setup lang="ts">

const taskStore = useTaskStore();
const route = useRoute()
const router = useRouter()

const taskId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const task = computed(() => {
  return taskStore.getTask(taskId)
})

function deleteTask() {
  taskStore.deleteTask(taskId);
  // router.push('/tasks');
}

</script>

<template>
  <div class="max-w-2xl bg-gray-200 m-32 mx-auto py-4 rounded" v-if="task">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <UFormGroup label="Name" class="w-full mb-4">
        <UInput type="text" v-model="task.title" />
      </UFormGroup>
      <UFormGroup label="Description" class="w-full mb-4">
        <UTextarea v-model="task.description">{{ task.description }}</UTextarea>
      </UFormGroup>
      <UButton icon="i-heroicons-trash" color="red" @click="deleteTask">Delete Task</UButton>
    </div>
  </div>
  <div v-else>
    <h1>Task not found</h1>
  </div>
</template>