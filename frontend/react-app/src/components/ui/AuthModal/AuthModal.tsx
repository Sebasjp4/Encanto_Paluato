/* frontend/react-app/src/components/ui/AuthModal/AuthModal.tsx */

import React, { useState, useEffect } from "react";
import styles from "./AuthModal.module.css";
// Importamos iconos reales
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.container} ${isRegistering ? styles.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        {/* --- FORMULARIO REGISTRO --- */}
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form action="#">
            <h1>Crear Cuenta</h1>

            <div className={styles.socialIcons}>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Google"
              >
                <FcGoogle />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Facebook"
              >
                <FaFacebook style={{ color: "#1877F2" }} />
              </button>
            </div>

            <span>o usa tu email para registrarte</span>
            <input type="text" placeholder="Nombre Completo" />
            <input type="email" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />

            <button type="submit" className={styles.btnAction}>
              Registrarme
            </button>
          </form>
        </div>

        {/* --- FORMULARIO LOGIN --- */}
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form action="#">
            <h1>Bienvenido</h1>

            <div className={styles.socialIcons}>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Google"
              >
                <FcGoogle />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Facebook"
              >
                <FaFacebook style={{ color: "#1877F2" }} />
              </button>
            </div>

            <span>o usa tu cuenta existente</span>
            <input type="email" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />

            <a
              href="#"
              style={{ marginTop: "15px", color: "#666", fontSize: "0.9rem" }}
            >
              ¿Olvidaste tu contraseña?
            </a>

            <button type="submit" className={styles.btnAction}>
              Ingresar
            </button>
          </form>
        </div>

        {/* --- PANEL VERDE DESLIZANTE --- */}
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <h1>¿Ya eres familia?</h1>
              <p>
                Si ya tienes una cuenta, ingresa para gestionar tus reservas
                mágicas.
              </p>
              <button
                className={styles.ghost}
                onClick={() => setIsRegistering(false)}
              >
                Iniciar Sesión
              </button>
            </div>

            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1>¿Primera vez aquí?</h1>
              <p>
                Únete a nuestra familia y empieza a descubrir el encanto de
                Paluato.
              </p>
              <button
                className={styles.ghost}
                onClick={() => setIsRegistering(true)}
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
