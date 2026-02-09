// src/data/products.js

export const products = [
  {
    id: "roman-standard", // Това ще е част от URL-а: /product/roman-standard
    name: 'Римска щора "Стандарт"',
    price: '45 лв/кв.м',
    category: 'roman',
    shortDesc: 'Класически дизайн и лесна поддръжка.',
    description: 'Нашият модел "Стандарт" е перфектният баланс между цена и качество. Изработен от устойчив полиестер, който не задържа прах и се почиства лесно. Механизмът е скрит и осигурява плавно движение.',
    images: [
       // Първата снимка е главна
      "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?w=800", 
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800",
      "https://images.unsplash.com/photo-1461988320302-91b564c5c9bc?w=800"
    ],
    specs: {
      "Материал": "100% Полиестер",
      "Степен на затъмнение": "50% (Пропуска светлина)",
      "Механизъм": "Chain System (С верижка)",
      "Гаранция": "24 месеца",
      "Произход": "Италия"
    }
  },
  {
    id: "roman-blackout",
    name: 'Римска щора "Blackout"',
    price: '65 лв/кв.м',
    category: 'roman',
    shortDesc: 'Пълно затъмнение за спокоен сън.',
    description: 'Специализирана тъкан с гумирано покритие от задната страна, което блокира 100% от слънчевата светлина. Идеални за спални и детски стаи.',
    images: [
      "https://images.unsplash.com/photo-1461988320302-91b564c5c9bc?w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?w=800"
    ],
    specs: {
      "Материал": "Blackout Textil",
      "Степен на затъмнение": "100%",
      "Механизъм": "Chain System",
      "Гаранция": "36 месеца",
      "Произход": "Германия"
    }
  },
  {
    id: "vertical-classic",
    name: 'Вертикална щора "Класик"',
    price: '5€/кв.м',
    category: 'vertical',
    shortDesc: 'Елегантно решение за големи прозорци и офиси.',
    description: 'Класически вертикални щори с текстилни ленти с ширина 89мм или 127мм. Предлагат отличен контрол на светлината чрез завъртане на ламелите. Подходящи както за дома, така и за бизнес пространства.',
    images: [
      "/images/vertical/vertical-orange.png",
      "/images/vertical/vertical-gray.png",
      "/images/vertical/vertical-gray2.jpg",
      "/images/vertical/vertical-gray3.png",
      "/images/vertical/vertical-office.jpg", 
      "/images/vertical/vertical-beige.png"
    ],
    specs: {
      "Материал": "Антистатичен текстил",
      "Ширина на лентата": "89 мм / 127 мм",
      "Управление": "Ръчно (въже и верижка)",
      "Монтаж": "Таван или стена",
      "Гаранция": "24 месеца"
    }
  }
  // Можеш да добавиш още продукти тук...
];