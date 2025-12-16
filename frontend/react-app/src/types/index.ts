// ========================================
// TIPOS GLOBALES - Encanto de Paluato
// ========================================

// --- NAVEGACIÓN ---
export interface NavLink {
  label: string;
  href: string;
}

// --- AMENIDADES (Bento Grid) ---
export interface Amenity {
  id: string;
  title: string;
  image: string;
  gridClass?: 'item-large' | 'item-wide' | 'item-tall' | ''; // Clases especiales para el grid
}

// --- HABITACIONES (Pósters) ---
export interface Room {
  id: string;
  name: string;
  posterImage: string;
  description?: string;
}

// --- EXPERIENCIAS ---
export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
}

// --- PLANES ---
export interface Plan {
  id: string;
  icon: string; // Emoji o nombre de icono
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  colorClass: 'plan-dia' | 'plan-full' | 'plan-romantico';
}

// --- TESTIMONIOS ---
export interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    role: string;
    avatar?: string; // URL o color de placeholder
  };
}

// --- SECCIÓN DE HISTORIA (Reusable) ---
export interface HistorySectionProps {
  title: string;
  description: string;
  image: string;
  colorTheme: 'amarillo' | 'azul' | 'rojo';
  imageOnLeft?: boolean; // Para invertir orden en desktop
}