// ========================================
// WHATSAPP FLOATING BUTTON - Encanto de Paluato
// ========================================
// Botón flotante fijo en la esquina inferior derecha
// que permite contacto directo por WhatsApp

import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa"; // Icono de WhatsApp

// Constantes de configuración
const WHATSAPP_CONFIG = {
  phoneNumber: "573227082710", // Número de teléfono (código país + número)
  message: "Hola! Me gustaría obtener más información sobre Encanto de Paluato", // Mensaje predeterminado
};

const WhatsAppButton = () => {
  // Construye la URL de WhatsApp con el número y mensaje pre-cargado
  const whatsappUrl = `https://wa.me/${
    WHATSAPP_CONFIG.phoneNumber
  }?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.btnWhatsapp}
      target="_blank" // Abre en nueva pestaña
      rel="noopener noreferrer" // Seguridad: previene acceso al objeto window.opener
      aria-label="Contactar por WhatsApp" // Accesibilidad para lectores de pantalla
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
};

export default WhatsAppButton;
