import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = ({ initialCounter }) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div className={styles.counterContainer}>
            <h1 className={styles.counterTitle}>Compteur {count}</h1>
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={increment}>+</button>
                <button className={styles.button} onClick={decrement}>-</button>
                <button className={styles.buttonReset} onClick={reset}>Réinitialiser</button>
            </div>
        </div>
    );
};
export default Counter;