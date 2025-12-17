// ========================================
// DATA - Habitaciones (Refugios)
// ========================================
// Datos de las 3 habitaciones del hotel

import type { Room } from '../../../types';

export const rooms: Room[] = [
  {
    id: 'cuadruple',
    name: 'Habitación Cuádruple',
    posterImage: '/src/assets/images/Habitaciones/poster-cuadruple.jpg',
    description: 'Perfecta para familias o grupos de amigos. Amplia y cómoda con 4 camas.',
  },
  {
    id: 'pareja',
    name: 'Habitación Pareja',
    posterImage: '/src/assets/images/Habitaciones/poster-pareja.jpg',
    description: 'Ambiente romántico e íntimo. Ideal para escapadas en pareja.',
  },
  {
    id: 'suite',
    name: 'Suite Cayena',
    posterImage: '/src/assets/images/Habitaciones/poster-suite.jpg',
    description: 'La experiencia premium. Balcón privado y vistas panorámicas.',
  },
];