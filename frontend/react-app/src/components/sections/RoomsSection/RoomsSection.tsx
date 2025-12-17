// ========================================
// ROOMS SECTION - Nuestros Refugios
// ========================================
// Muestra las habitaciones como pósters/tarjetas flotantes
// con efecto de elevación al hover

import styles from "./RoomsSection.module.css";
import { rooms } from "./data";

const RoomsSection = () => {
  return (
    <section className={styles.roomsSection} id="habitaciones">
      {/* Header centrado */}
      <div className={styles.sectionHeader}>
        <h2>Nuestros Refugios</h2>
        <p>Espacios donde la magia protege tus sueños</p>
      </div>

      {/* Grid de pósters */}
      <div className={styles.postersGrid}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.posterCard}>
            {/* Imagen tipo póster */}
            <div className={styles.posterImageWrapper}>
              <img src={room.posterImage} alt={room.name} />
            </div>

            {/* Botón de acción */}
            <div className={styles.posterAction}>
              <button className={styles.btnReservaRoom}>
                Reservar Refugio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
