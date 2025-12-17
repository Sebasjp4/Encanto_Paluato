// ========================================
// AMENITIES SECTION - Bento Grid
// ========================================
// Muestra las instalaciones del hotel en un mosaico irregular
// con diferentes tamaños de tarjetas y efecto hover

import styles from "./AmenitiesSection.module.css";
import { amenities } from "./data";

const AmenitiesSection = () => {
  return (
    <section className={styles.amenitiesSection} id="amenidades">
      {/* Header centrado */}
      <div className={styles.sectionHeader}>
        <h2>Nuestra Casa</h2>
        <p>Rincones diseñados para el descanso y la conexión</p>
      </div>

      {/* Grid tipo Bento (Mosaico irregular) */}
      <div className={styles.bentoGrid}>
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            // Combina la clase base con la clase especial (item-large, item-wide, etc.)
            className={`${styles.bentoItem} ${
              amenity.gridClass ? styles[amenity.gridClass] : ""
            }`}
          >
            {/* Imagen de fondo */}
            <img src={amenity.image} alt={amenity.title} />

            {/* Overlay con título (aparece al hover) */}
            <div className={styles.bentoOverlay}>
              <h3>{amenity.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;
