import React from "react";
import styles from "../Components/BotonFlotante.module.css";


const BotonFlotante = () => {
  return (
    <div className={styles.cajaFlotante}>
      <button className={styles.btnFloatDonar}>Cómo funciona</button>
    </div>
  );
};
export default BotonFlotante;