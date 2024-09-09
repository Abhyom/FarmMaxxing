export const PRODUCT_CATEGORIES = [
    {
      label: 'Crops',
      value: 'crops' as const,
      featured: [
        {
          name: 'Wheat',
          href: `/products?category=crops&wheat`,
          imageSrc: '/nav/crops/wheat.jpg',
        },
        {
          name: 'Maize',
          href: '/products?category=crops&maize',
          imageSrc: '/nav/crops/maize.jpg',
        },
        {
          name: 'Vegetables',
          href: '/products?category=crops&vegetables',
          imageSrc: '/nav/crops/vegetables.jpg',
        },
        {
          name: 'Fruits',
          href: '/products?category=crops&fruits',
          imageSrc: '/nav/crops/fruits.jpg',
        },
      ],
    },
    {
      label: 'Specialty Crops',
      value: 'specialty_crops' as const,
      featured: [
        {
          name: 'Organic Fruits',
          href: `/products?category=specialty_crops&organic_fruits`,
          imageSrc: '/nav/specialty/organic-fruits.jpg',
        },
        {
          name: 'Medicinal Plants',
          href: '/products?category=specialty_crops&medicinal_plants',
          imageSrc: '/nav/specialty/medicinal-plants.jpg',
        },
        {
          name: 'Exotic Vegetables',
          href: '/products?category=specialty_crops&exotic_vegetables',
          imageSrc: '/nav/specialty/exotic-vegetables.jpg',
        },
        {
          name: 'Herbs and Spices',
          href: '/products?category=specialty_crops&herbs_spices',
          imageSrc: '/nav/specialty/herbs-spices.jpg',
        },
      ],
    },
  ];
  
  
  