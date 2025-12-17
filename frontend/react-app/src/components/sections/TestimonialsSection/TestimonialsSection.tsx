import React from "react";
import styles from "./TestimonialsSection.module.css";
import { reviewsData } from "./data";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.section} id="memorias">
      <div className={styles.header}>
        <span className={styles.magicText}>Lo que dicen nuestros viajeros</span>
        <h2 className={styles.title}>Historias de Magia</h2>
      </div>

      <div className={styles.grid}>
        {reviewsData.map((review) => (
          <a
            key={review.id}
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            title="Ver reseña en Google Maps"
          >
            <div className={styles.stars}>{"★".repeat(review.rating)}</div>

            <p className={styles.text}>"{review.text}"</p>

            <div className={styles.author}>
              {/* Usamos la inicial como avatar temporal */}
              <div className={styles.avatarPlaceholder}>
                {review.name.charAt(0)}
              </div>
              <div className={styles.info}>
                <h4>{review.name}</h4>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
