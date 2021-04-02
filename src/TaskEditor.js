import React from "react";
import styles from "./TaskEditor.module.css"

export default function TaskEditor({ onAddTasks }) {
  return (
    <div>
      <button onClick={onAddTasks} className={styles.button}>Add Task</button>
    </div>
  );
}