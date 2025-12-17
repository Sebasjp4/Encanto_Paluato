// src/components/sections/LocationSection/LocationSection.tsx

import React from "react";
import styles from "./LocationSection.module.css";

export const LocationSection: React.FC = () => {
  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        {/* Columna de Texto */}
        <div className={styles.infoColumn}>
          <span className={styles.magicText}>¿Dónde ocurre la magia?</span>
          <h2 className={styles.title}>El Camino al Encanto</h2>

          <p className={styles.description}>
            Nos encontramos escondidos en el corazón del Bosque Seco Tropical,
            en el corregimiento de Paluato. Un refugio lejos del ruido, pero
            cerca de todo.
          </p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong>Dirección:</strong>
                <p>Km 5 Vía al Mar, Paluato, Atlántico, Colombia.</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.icon}>🚗</span>
              <div>
                <strong>Cómo llegar:</strong>
                <p>
                  A solo 40 minutos de Barranquilla y 50 de Cartagena. Acceso
                  pavimentado hasta la entrada del pueblo.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Casa+Encanto+de+Paluato/@10.8756547,-74.9301921,18.92z/data=!4m6!3m5!1s0x8ef5d5c9bf11418f:0x595baf0948f26e2e!8m2!3d10.8758198!4d-74.9296412!16s%2Fg%2F11w203xctl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKhttps://www.google.com/maps/place/Casa+Encanto+de+Paluato/@10.876083,-74.9289701,17.75z/data=!4m6!3m5!1s0x8ef5d5c9bf11418f:0x595baf0948f26e2e!8m2!3d10.8758198!4d-74.9296412!16s%2Fg%2F11w203xctl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3DXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnMap}
          >
            Ver en Google Maps
          </a>
        </div>

        {/* Columna del Mapa */}
        <div className={styles.mapColumn}>
          <div className={styles.mapWrapper}>
            {/* Reemplaza este src con el Embed de tu mapa real */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7836.335810551165!2d-74.93501993862306!3d10.874830811529826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d5c9bf11418f%3A0x595baf0948f26e2e!2sCasa%20Encanto%20de%20Paluato!5e0!3m2!1ses!2sco!4v1766006238913!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Encanto de Paluato"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
