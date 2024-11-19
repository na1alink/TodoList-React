export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface RootState {
  todos: TodoState;
}
