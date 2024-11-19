import React from "react";
import { useDispatch } from "react-redux";
import { removeAllTodos } from "../../store/todoSlice";
import styles from "./RemoveAllTodos.module.css";

const RemoveAllTodos: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(removeAllTodos())}
      className={styles.button}
    >
      Очистить
    </button>
  );
};

export default RemoveAllTodos;
