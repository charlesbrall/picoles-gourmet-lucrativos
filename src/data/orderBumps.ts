export interface OrderBump {
  id: string;
  title: string;
  badge?: string;
  originalPrice: number;
  price: number;
  description: string;
  icon: string;
}

export const ORDER_BUMPS: OrderBump[] = [
  {
    id: 'caldas',
    title: 'Apostila 20 Caldas Nobres & Recheios Trufados',
    badge: 'Mais Vendido',
    originalPrice: 27.00,
    price: 6.90,
    description: 'Ganache de chocolate belga que não endurece no freezer, caramelo toffee aveludado e pasta pura de pistache.',
    icon: '🍯'
  },
  {
    id: 'etiquetas',
    title: 'Pack de 50 Rótulos & Etiquetas Prontas no Canva',
    badge: 'Visual Profissional',
    originalPrice: 19.00,
    price: 4.90,
    description: 'Modelos editáveis pelo celular para imprimir e colar nas embalagens dos picolés, passando credibilidade imediata.',
    icon: '🏷️'
  },
  {
    id: 'fit',
    title: 'Mini Curso: Picolés Zero Açúcar, Fit & Proteicos',
    badge: 'Alta Procura',
    originalPrice: 34.00,
    price: 7.90,
    description: 'Receitas sem açúcar com whey protein e adoçadas naturalmente para atender quem treina ou diabéticos.',
    icon: '🥑'
  },
  {
    id: 'social',
    title: 'Pack de Fotos de Estúdio em Alta Resolução + Textos',
    badge: 'Pronto para Postar',
    originalPrice: 39.00,
    price: 9.90,
    description: 'Mais de 40 fotos reais de fotógrafo gastronômico e scripts de WhatsApp prontos para você fechar encomendas.',
    icon: '📸'
  },
  {
    id: 'termico',
    title: 'Guia de Transporte Térmico: Até 6h sem Derreter',
    badge: 'Essencial para Entregas',
    originalPrice: 22.00,
    price: 5.90,
    description: 'Como usar caixas de isopor simples e gelo reutilizável para entregar picolés perfeitos em festas e aniversários.',
    icon: '❄️'
  }
];
