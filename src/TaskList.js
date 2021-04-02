import React from "react";
import styles from "./TaskList.module.css"

export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h1>{task.id}</h1>
            <p>{task.text}</p>
            <button onClick={() => onDeleteTask(task.id)} className={styles.buttonList}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}