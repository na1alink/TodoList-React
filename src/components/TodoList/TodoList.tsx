// src/components/TodoList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";
import { removeTodo, toggleTodo } from "../../store/todoSlice";
import { Todo } from "../../store/types";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
