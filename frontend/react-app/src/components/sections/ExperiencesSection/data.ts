// ========================================
// DATA - Experiencias
// ========================================
// Actividades y experiencias que ofrece el hotel

import type { Experience } from '../../../types';

export const experiences: Experience[] = [
  {
    id: 'mariposario',
    title: 'Mariposario',
    description: 'Sumérgete en un mundo de color y transformación. Conoce nuestras especies nativas.',
    image: '/src/assets/images/imagen-fondo2.jpg',
  },
  {
    id: 'senderismo',
    title: 'Senderismo Ecológico',
    description: 'Recorre senderos ancestrales y descubre la fauna del bosque seco tropical.',
    image: '/src/assets/images/mirador.jpg',
  },
  {
    id: 'arte',
    title: 'Ruta de Arte',
    description: 'Descubre las historias detrás de nuestros murales y la tradición de Paluato.',
    image: '/src/assets/images/Murales.jpeg',
  },
];