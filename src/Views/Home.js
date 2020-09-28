import React from "react";
import BotonFlotante from "../Components/BotonCompartirDonar";
import styles from "../Views/Home.module.css";
import icoCorazon from '../img/corazonIconW.png';
import icoEmpresa from '../img/empresaIconW.png';
import icoTrabajo from '../img/TrabajoIconW.png';
import icoAyuda from '../img/manoIconW.png';

const Home = () => {
  return (
    <div className={styles.containerFirstView}>
      <div className={styles.boxtextprincipal}>
        <h3>- La mejor receta para un mejor país -</h3>
      </div>
      <div className={styles.boxtextprincipal}>
        <h1>COMBATAMOS JUNTOS EL HAMBRE EN CHILE</h1>
      </div>
      <div className={styles.boxtextprincipal}>
        <h3> - Selecciona tu rol y súmate a nuestra red -</h3>
      </div>
      <div className={styles.contenedorIconosBoton}>

        <div className={styles.boxBotonesredondos}>
          <div className={styles.icones}>
            <img src={icoCorazon} className={styles.imgIcon} ></img>
          </div>
          <button className={styles.boxbuttonsprincipal} >
            Soy cuidadano y quiero donar
        </button>

          <div className={styles.icones}>
            <img src={icoEmpresa} className={styles.imgIcon} ></img>
          </div>
          <button className={styles.boxbuttonsprincipal}>
            Soy una Institución pública o empresa y quiero ayuda{" "}
          </button>

          <div className={styles.icones}>
            <img src={icoTrabajo} className={styles.imgIcon} ></img>
          </div>
          <button className={styles.boxbuttonsprincipal}>
            Soy de un restaurant, productor o transportista y necesito trabajo
        </button>

          <div className={styles.icones}>
            <img src={icoAyuda} className={styles.imgIcon} ></img>
          </div>
          <button className={styles.boxbuttonsprincipal}>
            Vivo en una comunidad vulnerable y necesito acceso a alimentación
        </button>
        </div>
      </div>
      <BotonFlotante />
    </div>
  );
};

export default Home;
