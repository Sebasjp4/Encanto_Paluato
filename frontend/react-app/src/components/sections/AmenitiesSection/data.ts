// ========================================
// DATA - Amenidades (Instalaciones)
// ========================================
// Datos del Bento Grid con las áreas del hotel

import type { Amenity } from '../../../types';

export const amenities: Amenity[] = [
  {
    id: 'piscina',
    title: 'Piscina Infinita',
    image: '/src/assets/images/piscina.jpg',
    gridClass: 'item-large', // Ocupa 2x2
  },
  {
    id: 'mirador',
    title: 'Mirador',
    image: '/src/assets/images/mirador.jpg',
    gridClass: 'item-tall', // Ocupa 2 espacios verticales
  },
  {
    id: 'jacuzzi',
    title: 'Jacuzzi',
    image: '/src/assets/images/jacuzzi.jpg',
    gridClass: '', // Tamaño normal (1x1)
  },
  {
    id: 'hamacas',
    title: 'Zona Relax',
    image: '/src/assets/images/hamacas.jpg',
    gridClass: '',
  },
  {
    id: 'murales',
    title: 'Ruta del Arte',
    image: '/src/assets/images/Murales.jpeg',
    gridClass: 'item-wide', // Ocupa 2 espacios horizontales
  },
  {
    id: 'bar',
    title: 'Bar Social',
    image: '/src/assets/images/bar.jpg',
    gridClass: '',
  },
  {
    id: 'cocina',
    title: 'Cocina Abierta',
    image: '/src/assets/images/cocina.jpg',
    gridClass: '',
  },
  {
    id: 'rooftop',
    title: 'Rooftop Lounge',
    image: '/src/assets/images/rooftop.jpg',
    gridClass: 'item-wide',
  },
  {
    id: 'kiosko',
    title: 'Kiosko',
    image: '/src/assets/images/Kiosko.jpeg',
    gridClass: '',
  },
  {
    id: 'malla',
    title: 'Malla de Descanso',
    image: '/src/assets/images/Malla.jpg',
    gridClass: '',
  },
];