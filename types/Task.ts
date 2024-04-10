import type TaskType from "./TaskType";

export default interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
}
