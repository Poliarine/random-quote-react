import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { onClick, id, children } = props;
    return (
    <button className={styles.button} onClick={onClick} id={id}>
      {children}
    </button>
  );
}

export default Button;
