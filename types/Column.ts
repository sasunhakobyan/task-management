import type TaskType from "./TaskType";

export default interface Column {
  id: string;
  type: TaskType;
  name: string;
}
