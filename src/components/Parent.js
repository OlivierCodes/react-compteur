import { useState } from "react";
import Counter from "./Counter";
import styles from "./Counter.module.css";

const Parent = () =>{
    const [initialCount, setInitialCount] = useState(88);
   
    const handleChangeInitialCount = () => {
        const newInitialCount = Math.floor(Math.random() * 100); // Génère un chiffre random entre 0 et 99
        setInitialCount(newInitialCount);
    }
    return (
        <div>
            <Counter initialCount={initialCount}/>
            <button className={styles.buttonInitialCount} 
            onClick={handleChangeInitialCount}>
                Changer la valeur initiale
            </button>
        </div>
    );
};

export default Parent;