// ========================================
// EXPERIENCES SECTION - Vive la Magia
// ========================================
// Muestra las experiencias/actividades disponibles
// con cards visuales y overlay con información

import styles from "./ExperiencesSection.module.css";
import { experiences } from "./data";

const ExperiencesSection = () => {
  return (
    <section className={styles.experiencesSection} id="experiencias">
      {/* Header centrado */}
      <div className={styles.sectionHeader}>
        <h2>Vive la Magia</h2>
        <p>Conéctate con la naturaleza y la cultura local</p>
      </div>

      {/* Grid de experiencias */}
      <div className={styles.gridExperiencias}>
        {experiences.map((experience) => (
          <div key={experience.id} className={styles.cardExperiencia}>
            {/* Imagen de fondo */}
            <img src={experience.image} alt={experience.title} />

            {/* Overlay con información */}
            <div className={styles.infoExperiencia}>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
