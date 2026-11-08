export interface Bonus {
  id: number;
  title: string;
  badge: string;
  realValue: number;
  description: string;
  highlight: string;
  deliverables: string[];
}

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: 'Masterclass: Morango Cravejado com Chocolate Branco Gold',
    badge: 'O Sabor Mais Desejado',
    realValue: 14.00,
    description: 'Aprenda a fazer o picolé que virou febre nas redes sociais. O segredo da emulsão de morangos in natura que não solta água nem cristaliza, junto com a técnica exata da casquinha cravejada uniforme.',
    highlight: 'Técnica exclusiva para a casquinha não quebrar ao morder',
    deliverables: [
      'Passo a passo em vídeo com a proporção exata da calda de morangos',
      'Temperatura ideal do banho para o chocolate estalar com crocância perfeita',
      'Guia de substituições (frutas vermelhas, mirtilo e maracujá cravejado)'
    ]
  },
  {
    id: 2,
    title: 'Lista Secreta de Fornecedores & Embalagens no Atacado',
    badge: 'Economia Imediata',
    realValue: 19.00,
    description: 'Onde comprar formas de silicone profissionais de grau alimentício, palitos chanfrados de bétula e embalagens seláveis com até 40% de desconto direto de distribuidores nacionais que entregam na sua casa.',
    highlight: 'Economize mais de R$ 80 já no seu primeiro pedido de insumos',
    deliverables: [
      'Contatos diretos de WhatsApp dos fornecedores mais confiáveis do Brasil',
      'Links com cupons de frete grátis e compras a partir de pequenas quantidades',
      'Dicas para comprar chocolate nobre em gotas pagando menos que no mercado'
    ]
  },
  {
    id: 3,
    title: 'Planilha Inteligente de Custos & Precificação Automática',
    badge: 'Controle Total do Lucro',
    realValue: 12.00,
    description: 'Planilha pronta em Excel e Google Planilhas (funciona no celular). Você só digita quanto pagou na lata de leite condensado e a planilha calcula na hora o custo por grama, custo por picolé e sugere o preço de venda para 250% a 350% de lucro.',
    highlight: 'Nunca mais venda nada no escuro ou com receio de ter prejuízo',
    deliverables: [
      'Cálculo automático de custos invisíveis (palito, embalagem, gás/energia)',
      'Simulador de combos promocionais para festas e aniversários',
      'Aba de controle de estoque simples para você não deixar faltar insumo'
    ]
  },
  {
    id: 4,
    title: 'Guia de Bolso: Da Sua Cozinha à Primeira Venda em 48 Horas',
    badge: 'Renda Extra Rápida',
    realValue: 19.00,
    description: 'Um roteiro sem enrolação com o método exato para você oferecer pros primeiros clientes (vizinhos de condomínio, grupos de mães, colegas de trabalho e parentes) sem parecer insistente.',
    highlight: 'Inclui fotos profissionais em alta resolução para você montar seu cardápio',
    deliverables: [
      'Scripts de mensagens validados para WhatsApp que geram pedidos imediatos',
      'Modelos prontos de cardápio digital editáveis no Canva gratuito',
      'Manual de conservação, transporte e entrega sem derreter no calor'
    ]
  },
  {
    id: 5,
    title: 'Suporte Direto no WhatsApp por 14 Dias com a Equipe',
    badge: 'Acompanhamento Real',
    realValue: 29.00,
    description: 'Ficou em dúvida se a textura da base está no ponto correto? O chocolate ficou grosso ou fino demais? Mande uma foto ou vídeo no WhatsApp da equipe para receber orientação personalizada em minutos.',
    highlight: 'Segurança absoluta de que seus primeiros picolés sairão perfeitos',
    deliverables: [
      'Canal privativo para tirar dúvidas técnicas diretamente',
      'Feedback sobre suas produções e fotos de produtos',
      'Dicas práticas de adaptação para diferentes marcas de ingredientes da sua cidade'
    ]
  }
];
