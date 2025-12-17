// ========================================
// PLANS SECTION - Nuestros Planes
// ========================================
// Muestra los diferentes planes/paquetes disponibles
// con tarjetas con borde de color según el tipo

import styles from "./PlansSection.module.css";
import { plans } from "./data";

const PlansSection = () => {
  return (
    <section className={styles.plansSection} id="planes">
      {/* Header centrado */}
      <div className={styles.sectionHeader}>
        <h2>Nuestros Planes</h2>
        <p>Diseñados para cada tipo de viajero</p>
      </div>

      {/* Grid de planes */}
      <div className={styles.gridPlanes}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            // Combina la clase base con la clase de color específica
            className={`${styles.cardPlan} ${styles[plan.colorClass]}`}
          >
            {/* Icono/Emoji grande */}
            <span className={styles.iconPlan}>{plan.icon}</span>

            {/* Título del plan */}
            <h3>{plan.title}</h3>

            {/* Descripción */}
            <p>{plan.description}</p>

            {/* Botón de acción */}
            <a href={plan.ctaLink} className={styles.btnInfoPlan}>
              {plan.ctaText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
