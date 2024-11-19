import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import RemoveAllTodos from "../RemoveAllTodos/RemoveAllTodos";
import TodoSections from "../TodoSections/TodoSections";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AddTodo />
        <RemoveAllTodos />
      </header>
      <TodoSections />
    </div>
  );
};

export default Home;
