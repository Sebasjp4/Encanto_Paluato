// ========================================
// INTRO SECTION - Sección de introducción
// ========================================
// Texto breve que introduce el destino antes de las historias

import styles from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.textoDestino} id="destino">
      <h2>Sobre nuestro destino</h2>
      <p>
        Encanto de Paluato es un refugio colonial y cultural. Con murales vivos
        y paisajes que encenderán tus sentidos, reconectándote con la belleza de
        lo auténtico.
      </p>
    </section>
  );
};

export default IntroSection;
