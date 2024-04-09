import type Task from "./Task";
import type TaskType from "./TaskType";

export default interface Column {
  id: string;
  name: TaskType;
  tasks: Task[];
}
