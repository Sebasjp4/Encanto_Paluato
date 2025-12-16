// ========================================
// FOOTER COMPONENT - Encanto de Paluato
// ========================================
// Este componente renderiza el pie de página con información de contacto,
// enlaces de navegación y redes sociales

import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Iconos de redes sociales

// Definimos los datos de navegación como constantes para fácil mantenimiento
const FOOTER_LINKS = {
  explore: [
    { label: "Inicio", href: "#" },
    { label: "Nuestros Refugios", href: "#habitaciones" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "Planes", href: "#planes" },
  ],
};

const Footer = () => {
  // Función para manejar el scroll suave al hacer clic en enlaces internos
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Si el enlace es una ancla (#), prevenimos el comportamiento por defecto
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll animado
      }
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Grid de 3 columnas con información del footer */}
      <div className={styles.footerGrid}>
        {/* COLUMNA 1: Información de la marca */}
        <div className={styles.colFooter}>
          <h3>Encanto de Paluato</h3>
          <p>
            Un refugio colonial donde la magia, la naturaleza y la cultura se
            unen para crear recuerdos inolvidables.
          </p>

          {/* Iconos de redes sociales */}
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* COLUMNA 2: Enlaces de navegación */}
        <div className={styles.colFooter}>
          <h3>Explora</h3>
          <ul>
            {FOOTER_LINKS.explore.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA 3: Información de contacto */}
        <div className={styles.colFooter}>
          <h3>Contáctanos</h3>
          <p>📍 Km 5 Vía al Mar, Paluato, Colombia</p>
          <p>
            📞 <a href="tel:+573227082710">+57 322 7082710</a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:reservas@encantodepaluato.com">
              reservas@encantodepaluato.com
            </a>
          </p>
          <p>🕒 Atención: 8:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Línea divisoria y copyright */}
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Encanto de Paluato. Todos los
          derechos reservados. | Diseño y Desarrollo Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;
