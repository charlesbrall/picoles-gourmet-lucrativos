export interface Flavor {
  id: string;
  name: string;
  category: 'mais-vendidos' | 'chocolatudos' | 'frutados' | 'sofisticados';
  categoryLabel: string;
  badge?: string;
  icon: string;
  description: string;
  shell: string;
  estimatedCost: number;
  suggestedPrice: number;
  prepTime: string;
  difficulty: 'Muito Fácil' | 'Fácil' | 'Médio';
  secretTip: string;
}

export const FLAVORS: Flavor[] = [
  {
    id: 'ninho-nutella',
    name: 'Ninho com Nutella Cremoso',
    category: 'mais-vendidos',
    categoryLabel: 'Mais Vendidos',
    badge: 'Campeão de Vendas',
    icon: '🍫',
    description: 'Gelato artesanal de leite Ninho ultra macio com recheio farto de creme de avelã no coração do picolé.',
    shell: 'Casquinha de chocolate ao leite nobre com riscas de avelã e Ninho salpicado.',
    estimatedCost: 2.30,
    suggestedPrice: 9.50,
    prepTime: '15 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'Congele a Nutella em formato de bastonete por 20 minutos antes de posicionar no molde para o recheio ficar 100% centralizado.'
  },
  {
    id: 'morango-cravejado',
    name: 'Morango Cravejado Belga',
    category: 'mais-vendidos',
    categoryLabel: 'Mais Vendidos',
    badge: 'Sensação das Redes',
    icon: '🍓',
    description: 'Gelato de morangos selecionados frescos com geleia caseira rápida, envolvido em casquinha crocante cravejada.',
    shell: 'Banho de chocolate branco nobre com pedacinhos de amêndoas tostadas e pedaços de morango crocante.',
    estimatedCost: 2.60,
    suggestedPrice: 11.00,
    prepTime: '20 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'O choque térmico do picolé a -18°C com o chocolate a 31°C cria a película cravejada perfeita que estala ao morder.'
  },
  {
    id: 'pistache-sublime',
    name: 'Pistache Sublime Italiano',
    category: 'sofisticados',
    categoryLabel: 'Sofisticados',
    badge: 'Linha Ouro',
    icon: '🌰',
    description: 'Base enriquecida com pasta pura de pistache levemente tostado, textura sedosa sem nenhum cristal de gelo.',
    shell: 'Chocolate branco temperado com xerém de pistache verde selecionado da Sicília.',
    estimatedCost: 2.90,
    suggestedPrice: 13.50,
    prepTime: '15 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Uma pitadinha microscópica de flor de sal na base realça as notas amendoadas naturais do pistache.'
  },
  {
    id: 'oreo-nutella',
    name: 'Oreo Trufado com Nutella',
    category: 'chocolatudos',
    categoryLabel: 'Chocolatudos',
    badge: 'Favorito Teen',
    icon: '🍪',
    description: 'Massa amanteigada de baunilha com pedaços graúdos de biscoito Oreo que continuam crocantes após congelar.',
    shell: 'Casquinha de chocolate meio amargo 54% com farofa grossa de biscoito.',
    estimatedCost: 2.20,
    suggestedPrice: 9.00,
    prepTime: '12 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'Remova metade do recheio branco do biscoito para dosar a doçura e manter o contraste de cor perfeito.'
  },
  {
    id: 'pacoca-artesanal',
    name: 'Paçoca Artesanal Crocante',
    category: 'mais-vendidos',
    categoryLabel: 'Mais Vendidos',
    badge: 'Tradição Brasileira',
    icon: '🍬',
    description: 'Creme aveludado de amendoim tostado com pedacinhos de paçoca de rolha esfarelada e calda toffee interna.',
    shell: 'Cobertura de chocolate ao leite com amendoim granulado torrado na hora.',
    estimatedCost: 1.80,
    suggestedPrice: 8.50,
    prepTime: '10 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'Use paçocas sem excesso de açúcar para deixar o picolé leve e impossível de comer um só.'
  },
  {
    id: 'torta-limao',
    name: 'Torta de Limão Siciliano',
    category: 'frutados',
    categoryLabel: 'Frutados Nobres',
    badge: 'Refrescância Pura',
    icon: '🍋',
    description: 'Equilíbrio exato entre o azedinho do suco de limão siciliano, a cremosidade da base e crumble amanteigado.',
    shell: 'Fina camada de chocolate branco cítrico com raspas de limão verde e amarelo.',
    estimatedCost: 1.95,
    suggestedPrice: 9.00,
    prepTime: '15 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Raspe apenas a parte amarela e verde das cascas, sem atingir a parte branca para evitar amargor.'
  },
  {
    id: 'prestigio-supremo',
    name: 'Prestígio com Coco Queimado',
    category: 'chocolatudos',
    categoryLabel: 'Chocolatudos',
    badge: 'Clássico Refinado',
    icon: '🥥',
    description: 'Massa cremosa de leite de coco artesanal com fitas de coco ralado úmido e núcleo de brigadeiro de panela.',
    shell: 'Chocolate meio amargo com flocos crocantes de coco queimado dourado.',
    estimatedCost: 2.10,
    suggestedPrice: 9.50,
    prepTime: '18 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Hidrate o coco ralado em duas colheres de leite de coco morno antes de adicionar à massa base.'
  },
  {
    id: 'biscoff-caramelo',
    name: 'Biscoff Speculoos & Toffee',
    category: 'sofisticados',
    categoryLabel: 'Sofisticados',
    badge: 'Tendência Europeia',
    icon: '🥜',
    description: 'Gelato com sabor inconfundível dos biscoitos belgas caramelizados com toque de especiarias e canela.',
    shell: 'Casquinha de chocolate caramelo dourado com crumble finíssimo de Lotus Biscoff.',
    estimatedCost: 2.75,
    suggestedPrice: 12.00,
    prepTime: '15 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Aqueça ligeiramente a pasta Biscoff por 10 segundos no micro-ondas para facilitar a mesclagem ondulada.'
  },
  {
    id: 'ovomaltine-crocante',
    name: 'Ovomaltine Suíço Flocado',
    category: 'chocolatudos',
    categoryLabel: 'Chocolatudos',
    badge: 'Crocância Máxima',
    icon: '🍫',
    description: 'Base de chocolate maltado enriquecida com flocos graúdos de Ovomaltine que mantêm o estalo na boca.',
    shell: 'Banho de chocolate ao leite com flocos crocantes incrustados.',
    estimatedCost: 2.05,
    suggestedPrice: 9.00,
    prepTime: '10 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'Adicione os flocos no último minuto da batedeira para que não se dissolvam antes de ir ao freezer.'
  },
  {
    id: 'doce-leite-sal',
    name: 'Doce de Leite com Flor de Sal',
    category: 'sofisticados',
    categoryLabel: 'Sofisticados',
    badge: 'Toque Gourmet',
    icon: '🍮',
    description: 'Base suave com doce de leite artesanal pastoso de Minas Gerais e delicados cristais de flor de sal francesa.',
    shell: 'Casquinha de chocolate rubi ou caramelo com nozes picadinhas.',
    estimatedCost: 2.15,
    suggestedPrice: 10.00,
    prepTime: '12 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'A flor de sal deve ser colocada na finalização da casquinha, nunca dissolvida na base morna.'
  },
  {
    id: 'romeu-julieta',
    name: 'Romeu & Julieta Mineiro',
    category: 'sofisticados',
    categoryLabel: 'Sofisticados',
    badge: 'Sabor Afetivo',
    icon: '🌹',
    description: 'Creme sedoso de requeijão cremoso de corte com coração transbordando de goiabada cascão amolecida.',
    shell: 'Casquinha fina de chocolate branco neutro que deixa o sabor do queijo brilhar.',
    estimatedCost: 2.25,
    suggestedPrice: 9.50,
    prepTime: '15 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Aqueça a goiabada com 1 colher de água até virar uma calda espessa, deixe esfriar e use no centro do picolé.'
  },
  {
    id: 'chocolate-crocante',
    name: 'Chocolate 70% com Amêndoas',
    category: 'chocolatudos',
    categoryLabel: 'Chocolatudos',
    badge: 'Para Amantes de Cacau',
    icon: '🍫',
    description: 'Intensidade pura de cacau nobre brasileiro sem amargor excessivo, cremosa e aveludada até o último pedaço.',
    shell: 'Banho duplo de chocolate meio amargo com amêndoas laminadas tostadas.',
    estimatedCost: 2.40,
    suggestedPrice: 10.50,
    prepTime: '15 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Use cacau em pó 100% alcalino para garantir aquela cor escura e brilhante de vitrine italiana.'
  },
  {
    id: 'maracuja-trufado',
    name: 'Maracujá Trufado Meio Amargo',
    category: 'frutados',
    categoryLabel: 'Frutados Nobres',
    badge: 'Contraste Perfeito',
    icon: '🍈',
    description: 'Mousse congelada de maracujá da fruta com acidez na medida certa, recheada com ganache de chocolate 54%.',
    shell: 'Chocolate meio amargo com riscas douradas e sementinhas de maracujá caramelizadas.',
    estimatedCost: 2.15,
    suggestedPrice: 9.50,
    prepTime: '18 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Passe a polpa do maracujá na peneira sem bater as sementes no liquidificador para não soltar gosto amargo.'
  },
  {
    id: 'frutas-vermelhas',
    name: 'Frutas Vermelhas Silvestres',
    category: 'frutados',
    categoryLabel: 'Frutados Nobres',
    badge: 'Elegância Pura',
    icon: '🫐',
    description: 'Redução artesanal de mirtilos, amoras e framboesas mescladas na base branca aveludada criando efeito mármore.',
    shell: 'Casquinha de chocolate branco com raspas de chocolate ruby.',
    estimatedCost: 2.70,
    suggestedPrice: 11.50,
    prepTime: '20 min de preparo',
    difficulty: 'Fácil',
    secretTip: 'Mescle a geleia fria na massa diretamente na forma com auxílio de um palito de dente fazendo movimentos em 8.'
  },
  {
    id: 'cafe-macchiato',
    name: 'Café Macchiato & Caramelo',
    category: 'sofisticados',
    categoryLabel: 'Sofisticados',
    badge: 'Energia & Sabor',
    icon: '☕',
    description: 'Infusão aromática de café espresso com creme de leite fresco e fios generosos de caramelo toffee artesanal.',
    shell: 'Chocolate ao leite com nibs crocantes de cacau.',
    estimatedCost: 2.10,
    suggestedPrice: 9.50,
    prepTime: '12 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'Dissolva café solúvel premium liofilizado em 1 colher de água fervente para máxima potência sem adicionar líquido excessivo.'
  },
  {
    id: 'banana-caramelo',
    name: 'Banana Flambada com Doce de Leite',
    category: 'mais-vendidos',
    categoryLabel: 'Mais Vendidos',
    badge: 'Sobremesa de Domingo',
    icon: '🍌',
    description: 'Pedaços de banana caramelizada no açúcar mascavo com canela, envolvidos em creme aveludado e doce de leite.',
    shell: 'Chocolate branco com canela e açúcar cristal salpicado.',
    estimatedCost: 1.90,
    suggestedPrice: 8.50,
    prepTime: '16 min de preparo',
    difficulty: 'Muito Fácil',
    secretTip: 'Deixe a banana esfriar 100% antes de incorporar na base fria para não desestabilizar a emulsão cremosa.'
  }
];
