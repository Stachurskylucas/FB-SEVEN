// ==============================================================================
// JSON-LD SCHEMA MARKUP (LocalBusiness / ExerciseGym / SportsActivityLocation)
// Módulo 3: Arquitectura SEO
// ==============================================================================

export const FB_SEVEN_MAIN_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ExerciseGym',
      '@id': 'https://fbsevengym.com/#organization',
      name: 'FB SEVEN TRAINING',
      alternateName: 'FB Seven Gym',
      url: 'https://fbsevengym.com',
      logo: 'https://fbsevengym.com/images/logo.png',
      image: [
        'https://fbsevengym.com/images/sede-pacifico-recepcion.png',
        'https://fbsevengym.com/images/sede-pacifico-maquinas.png'
      ],
      description: 'Centro de alto rendimiento con 3 sedes en Bella Vista y Muñiz (Zona Oeste). Maquinaria biomecánica pesada, pilates reformer, boxeo y musculación con pase libre multisede.',
      telephone: '+5491144724002',
      priceRange: '$$',
      currenciesAccepted: 'ARS',
      paymentAccepted: 'Cash, Credit Card, Debit Card, MercadoPago',
      sameAs: [
        'https://instagram.com/fbseventraining',
        'https://wa.me/5491144724002'
      ],
      subOrganization: [
        {
          '@type': 'ExerciseGym',
          '@id': 'https://fbsevengym.com/#sede-pacifico',
          name: 'FB SEVEN - Sede Pacífico (Ex Cine Pacífico)',
          url: 'https://fbsevengym.com/#galeria-sedes',
          telephone: '+5491144724002',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Senador Morón 1450',
            addressLocality: 'Bella Vista',
            addressRegion: 'Buenos Aires',
            postalCode: '1661',
            addressCountry: 'AR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -34.5651,
            longitude: -58.6853
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '06:00',
              closes: '23:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '08:00',
              closes: '20:00'
            }
          ]
        },
        {
          '@type': 'ExerciseGym',
          '@id': 'https://fbsevengym.com/#sede-ricchieri',
          name: 'FB SEVEN - Sede Ricchieri (Fuerza & Boxeo)',
          url: 'https://fbsevengym.com/#galeria-sedes',
          telephone: '+5491144724002',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Teniente General Ricchieri 691',
            addressLocality: 'Bella Vista',
            addressRegion: 'Buenos Aires',
            postalCode: '1661',
            addressCountry: 'AR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -34.5623,
            longitude: -58.6921
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '07:00',
              closes: '22:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '09:00',
              closes: '18:00'
            }
          ]
        },
        {
          '@type': 'ExerciseGym',
          '@id': 'https://fbsevengym.com/#sede-muniz',
          name: 'FB SEVEN - Sede Muñiz (Pilates Reformer & Wellness)',
          url: 'https://fbsevengym.com/#galeria-sedes',
          telephone: '+5491144724002',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. León Gallardo 70',
            addressLocality: 'Muñiz',
            addressRegion: 'Buenos Aires',
            postalCode: '1663',
            addressCountry: 'AR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -34.5478,
            longitude: -58.7051
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '07:00',
              closes: '22:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '09:00',
              closes: '14:00'
            }
          ]
        }
      ]
    }
  ]
};
