import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Todo } from "../../store/types";
import {
  restoreTodo,
  deletePermanently,
  clearTrash,
} from "../../store/todoSlice";
import styles from "./TrashSection.module.css";

const TrashSection: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const deletedTodos = todos.filter((todo: Todo) => todo.deleted);
  const dispatch = useDispatch();

  const handleRestore = (id: number) => {
    dispatch(restoreTodo(id));
  };

  const handleDeleteForever = (id: number) => {
    dispatch(deletePermanently(id));
  };

  const handleClearTrash = () => {
    dispatch(clearTrash());
  };

  return (
    <div>
      {deletedTodos.length > 0 ? (
        <>
          <div className={styles.clear}>
            <button
              onClick={handleClearTrash}
              className={styles.clearTrashButton}
            >
              Очистить корзину
            </button>
          </div>

          <ul className={styles.todoList}>
            {deletedTodos.map((todo: Todo) => (
              <li key={todo.id} className={styles.todoItem}>
                <span className={styles.todoText}>{todo.text}</span>
                <div className={styles.todoActions}>
                  <button
                    onClick={() => handleRestore(todo.id)}
                    className={styles.restoreButton}
                  >
                    Восстановить
                  </button>
                  <button
                    onClick={() => handleDeleteForever(todo.id)}
                    className={styles.deleteForeverButton}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className={styles.emptyTrash}>Корзина пуста</div>
      )}
    </div>
  );
};

export default TrashSection;
