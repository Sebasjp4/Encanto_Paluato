import { useState } from "react";
import styles from "./Navbar.module.css";
import { LOGO } from "../../../constants/images";
import type { NavLink } from "../../../types";

// 1. Definimos la interfaz para recibir la función de abrir el modal
interface NavbarProps {
  onOpenAuth: () => void;
}

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#" },
  { label: "El Destino", href: "#destino" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Donde estamos", href: "#ubicacion" },
  { label: "Reservar", href: "#habitaciones" },
];

// 2. Desestructuramos onOpenAuth de las props
const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false); // Cerrar menú en móvil
      }
    }
  };

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <div className={styles.navBrand}>
        <a href="#">
          <img src={LOGO} alt="Logo Paluato" />
        </a>
      </div>

      {/* Menú de Navegación */}
      <nav className={`${styles.navCenter} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botones de Autenticación */}
      <div className={styles.navAuth}>
        {/* 3. Cambiamos <a> por <button> y asignamos el evento onClick */}
        <button onClick={onOpenAuth} className={styles.btnLogin}>
          Ingresar
        </button>
        <button onClick={onOpenAuth} className={styles.btnRegister}>
          Registrarse
        </button>
      </div>

      {/* Hamburger Menu (Móvil) */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Navbar;
