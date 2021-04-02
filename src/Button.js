import React from "react";
import styles from "./Button.module.css"

export default function Button({ onStateChange }) {
  return (
    <div>
      <button onClick={onStateChange} className={styles.buttonClick}>click</button>
    </div>
  );
}