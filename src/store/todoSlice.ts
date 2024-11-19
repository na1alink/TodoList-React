import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "../store/types";

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        deleted: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.deleted = true;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeAllTodos: (state) => {
      state.todos.forEach((todo) => (todo.deleted = true));
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.deleted = false;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deletePermanently: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clearTrash: (state) => {
      state.todos = state.todos.filter((todo) => !todo.deleted);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  removeTodo,
  removeAllTodos,
  toggleTodo,
  restoreTodo,
  deletePermanently,
  clearTrash,
} = todoSlice.actions;
export default todoSlice.reducer;
