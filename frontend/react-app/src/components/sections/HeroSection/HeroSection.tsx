// ========================================
// HERO SECTION - Sección principal con carrusel
// ========================================
// Esta es la primera sección que ve el usuario
// Incluye un carrusel de imágenes de fondo y un CTA (Call To Action)

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

// Array de imágenes para el carrusel
const HERO_IMAGES = [
  "/src/assets/images/imagen-fondo1.jpg",
  "/src/assets/images/imagen-fondo2.jpg",
  "/src/assets/images/mirador.jpg",
];

const HeroSection = () => {
  // Estado para controlar qué imagen está activa
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect para cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        // Si llegamos a la última imagen, volvemos a la primera
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 segundos

    // Cleanup: limpiamos el interval cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // [] significa que solo se ejecuta una vez al montar

  return (
    <section className={styles.heroSection}>
      {/* Contenedor del carrusel de fondo */}
      <div className={styles.carouselBackground}>
        {HERO_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Paluato ${index + 1}`}
            // Clase 'active' solo para la imagen actual
            className={index === currentImageIndex ? styles.active : ""}
          />
        ))}
      </div>

      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className={styles.overlay}></div>

      {/* Contenido principal del Hero */}
      <div className={styles.principal}>
        <h2>Bienvenidos a la Magia</h2>
        <p>
          "Deja que el encanto te envuelva. En Paluato, cada rincón es un lienzo
          y cada paisaje una invitación a reconectar."
        </p>
        <button className={styles.botonReserva}>Reservar Ahora</button>
      </div>
    </section>
  );
};

export default HeroSection;
