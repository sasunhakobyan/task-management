<script setup lang="ts">

const taskStore = useTaskStore();
const route = useRoute()
const taskId = '1';

// const task = computed(() => {
//   return taskStore.getTask(taskId)
// })

</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <!-- <UFormGroup label="Name">
        <UInput type="text" v-model="task.title" />
      </UFormGroup>
      <UFormGroup label="Description">
        <UTextarea v-model="task.description">{{ task.description }}</UTextarea>
      </UFormGroup> -->
    </div>
  </div>
</template>