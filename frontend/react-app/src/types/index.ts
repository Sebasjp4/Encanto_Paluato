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
  colorClass: 'plan-1' | 'plan-2' | 'plan-3'; // camelCase
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

// Tipos para el futuro desarrollo

export type UserRole = 'client' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  userId: string;
  roomId: number; // Coincide con el ID de tus habitaciones
  startDate: string; // ISO Date
  endDate: string;
  totalPrice: number;
  status: BookingStatus;
  guestsCount: number;
  createdAt: string;
}