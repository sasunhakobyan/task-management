import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import TaskType from "~/types/TaskType";
import type Column from "~/types/Column";
import type Task from "~/types/Task";

const ALL_TASKS_TYPES = [TaskType.TODO, TaskType.DOING, TaskType.DONE];

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      columns: ALL_TASKS_TYPES.map((col) => ({
        name: col.toString(),
        type: col,
        id: uuidv4(),
      })) as Column[],
      tasks: [] as Task[],
    };
  },
  actions: {
    addTask(taskName: string, type: TaskType) {
      this.tasks.push({
        id: uuidv4(),
        title: taskName,
        description: "",
        type,
      });
    },

    deleteTask(taskId: string) {
      let foundTaskIndex = this.tasks.findIndex((t) => t.id === taskId);
      this.tasks.splice(foundTaskIndex, 1);
      // since we only allow "Delete" UX interaction from the "single-task view",
      // we need to redirect the user back to the tasks list after deletion
      return useRouter().push("/tasks");
    },

    updateTaskType(taskId: string, type: TaskType) {
      let foundTask = this.tasks.find((t) => t.id === taskId);
      if (!foundTask) {
        return;
      }

      foundTask.type = type;
    },
  },
  getters: {
    getTasks: (state) => {
      return (type: TaskType) => {
        return state.tasks.filter((t) => t.type === type);
      };
    },
    getTask: (state) => {
      return (taskId: string) => {
        return state.tasks.find((t) => t.id === taskId);
      };
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
