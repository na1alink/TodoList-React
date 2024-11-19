import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import Modal from "../Modal/Modal";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className={styles.button__add}
      >
        Добавить
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите задачу"
            className={styles.form__textarea}
          />
          <button type="submit" className={styles.form__button}>
            Добавить
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTodo;
