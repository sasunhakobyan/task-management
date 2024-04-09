import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import TaskType from "~/types/TaskType";
import type Column from "~/types/Column";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      columns: [
        {
          id: uuidv4(),
          name: TaskType.TODO,
          tasks: [],
        },
        {
          id: uuidv4(),
          name: TaskType.DOING,
          tasks: [],
        },
        {
          id: uuidv4(),
          name: TaskType.DONE,
          tasks: [],
        },
      ] as Column[],
    };
  },
  actions: {
    addTask(taskName: string, columnIndex: number) {
      this.columns[columnIndex].tasks.push({
        id: uuidv4(),
        title: taskName,
        description: "",
      });
    },
    deleteTask(taskId: string) {
      for (const column of this.columns) {
        const taskIndex = column.tasks.findIndex((task) => task.id === taskId);

        console.log("deleting...");

        if (taskIndex !== -1) {
          column.tasks.splice(taskIndex, 1);
        }
      }
    },
  },
  getters: {
    getTask: (state) => {
      return (taskId: string) => {
        for (const column of state.columns) {
          const task = column.tasks.find((task) => task.id === taskId);
          if (task) return task;
        }
      };
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
