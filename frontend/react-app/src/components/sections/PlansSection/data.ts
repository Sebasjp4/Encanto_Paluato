// ========================================
// DATA - Planes
// ========================================
// Diferentes opciones de planes para los visitantes

import type { Plan } from '../../../types';

export const plans: Plan[] = [
  {
    id: 'pasadia',
    icon: '☀️',
    title: 'Pasadía Solar',
    description:
      'Disfruta de nuestras instalaciones (piscina, zonas húmedas, hamacas) desde la mañana hasta el atardecer sin hospedaje.',
    ctaText: 'Consultar Disponibilidad',
    ctaLink: '#',
    colorClass: 'plan-1', // Sin guiones, camelCase
  },
  {
    id: 'casa-completa',
    icon: '🏰',
    title: 'Casa Completa',
    description:
      '¿Familia grande o evento privado? Reserva toda la cabaña exclusivamente para tu grupo y vive Paluato en privado.',
    ctaText: 'Cotizar Evento',
    ctaLink: '#',
    colorClass: 'plan-2', // Sin guiones, camelCase
  },
  {
    id: 'romantico',
    icon: '❤️',
    title: 'Escapada Romántica',
    description:
      'Decoración especial, cena privada y acceso a zonas exclusivas para celebrar el amor en pareja.',
    ctaText: 'Ver Detalles',
    ctaLink: '#',
    colorClass: 'plan-3', // Sin guiones, camelCase
  },
];