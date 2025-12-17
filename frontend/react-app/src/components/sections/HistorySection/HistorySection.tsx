// ========================================
// HISTORY SECTION - Sección de Historia Reutilizable
// ========================================
// Componente que muestra una sección de historia con:
// - Imagen en forma de blob (orgánica)
// - Texto con título y descripción
// - Aura de color según el tema (amarillo/azul/rojo)
// - Orden alternado (imagen izquierda/derecha)

import styles from "./HistorySection.module.css";
import type { HistorySectionProps } from "../../../types";

const HistorySection = ({
  title,
  description,
  image,
  colorTheme,
  imageOnLeft = false,
}: HistorySectionProps) => {
  return (
    <section className={`${styles.seccion} ${styles[colorTheme]}`}>
      <div
        className={styles.contenido}
        // Si imageOnLeft es true, invertimos el orden en desktop
        style={{ flexDirection: imageOnLeft ? "row-reverse" : "row" }}
      >
        {/* TEXTO */}
        <div className={styles.texto}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {/* IMAGEN CON BLOB Y AURA */}
        <div className={styles.imagen}>
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
