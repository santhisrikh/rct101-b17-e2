import styles from "./Button.module.css";

function Button({ onClick, disabled,children }) {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
