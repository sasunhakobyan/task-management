import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import TaskType from "~/types/TaskType";
import type Column from "~/types/Column";

export const useTaskStore = defineStore<Column[]>("task", {
  state: () => [
    {
      id: uuidv4(),
      name: TaskType.TODO,
      tasks: [
        { id: uuidv4(), title: "New Task1", description: "this is task" },
        { id: uuidv4(), title: "New Task2", description: "this is task" },
        { id: uuidv4(), title: "New Task3", description: "this is task" },
      ],
    },
    {
      id: uuidv4(),
      name: TaskType.DOING,
      tasks: [],
    },
    {
      id: uuidv4(),
      name: TaskType.DONE,
      tasks: [
        { id: uuidv4(), title: "New Task4", description: "this is task" },
        { id: uuidv4(), title: "New Task5", description: "this is task" },
      ],
    },
  ],
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
