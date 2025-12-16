import { useState } from "react";
import styles from "./Navbar.module.css";
import { LOGO } from "../../../constants/images";
import type { NavLink } from "../../../types";

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#" },
  { label: "El Destino", href: "#destino" },
  { label: "Experiencias", href: "#amenidades" },
  { label: "Reservar", href: "#habitaciones" },
];

const Navbar = () => {
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
        <a href="#" className={styles.btnLogin}>
          Ingresar
        </a>
        <a href="#" className={styles.btnRegister}>
          Registrarse
        </a>
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
