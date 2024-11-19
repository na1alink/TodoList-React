import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import TodoSection from "../TodoSection/TodoSection";
import TrashSection from "../TrashSection/TrashSection";
import { Todo } from "../../store/types";
import styles from "./TodoSections.module.css";

const TodoSections: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.link} ${
            location.pathname === "/" ? styles.activeLink : ""
          }`}
        >
          Все дела
        </Link>
        <Link
          to="/current"
          className={`${styles.link} ${
            location.pathname === "/current" ? styles.activeLink : ""
          }`}
        >
          Текущие дела
        </Link>
        <Link
          to="/completed"
          className={`${styles.link} ${
            location.pathname === "/completed" ? styles.activeLink : ""
          }`}
        >
          Выполненные дела
        </Link>
        <Link
          to="/trash"
          className={`${styles.link} ${
            location.pathname === "/trash" ? styles.activeLink : ""
          }`}
        >
          Корзина
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<TodoSection filter={(todo: Todo) => !todo.deleted} />}
        />
        <Route
          path="/current"
          element={
            <TodoSection
              filter={(todo: Todo) => !todo.completed && !todo.deleted}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <TodoSection
              filter={(todo: Todo) => todo.completed && !todo.deleted}
            />
          }
        />
        <Route path="/trash" element={<TrashSection />} />
      </Routes>
    </div>
  );
};

export default TodoSections;
