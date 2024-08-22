export interface Task {
  id: number;
  name: string;
  description: string;
  createdOn: Date;
}

export interface SingleTaskProps {
  task: Task;
}
