// ========================================
// DATA - Historia del Destino
// ========================================
// Datos de las 3 secciones de historia con sus colores y contenido

import type { HistorySectionProps } from '../../../types';

export const historySections: HistorySectionProps[] = [
  {
    title: 'El Origen de Nuestro Encanto',
    description:
      'En el corazón del Bosque Seco Tropical, se esconde un lugar que es mucho más que un destino: es un espejo que refleja la Colombia mágica. El Encanto de Paluato nació del sueño de una familia, un homenaje a la belleza de nuestro país, su gente y sus tradiciones.',
    image: '/src/assets/images/history-1.jpg',
    colorTheme: 'amarillo',
    imageOnLeft: false, // Imagen a la derecha
  },
  {
    title: 'Muros que Cuentan Historias',
    description:
      'Nuestros muros no solo sostienen un techo, sino que cuentan las historias de los siglos que nos inspiraron. Más que un simple hospedaje, es una invitación a regresar a lo esencial, a lo simple, donde podrás redescubrir el poder de volver a soñar.',
    image: '/src/assets/images/history-2.png',
    colorTheme: 'azul',
    imageOnLeft: true, // Imagen a la izquierda
  },
  {
    title: 'La Naturaleza como Fuente de Magia',
    description:
      'Aquí, la naturaleza no es solo un fondo, es la fuente de nuestra magia. Las montañas, los lagos y la exuberante flora te invitan a reconectar contigo mismo. Cada conversación teje un nuevo hilo en nuestro tapiz familiar, mostrándote que cada uno tiene un don.',
    image: '/src/assets/images/history-3.png',
    colorTheme: 'rojo',
    imageOnLeft: false, // Imagen a la derecha
  },
];