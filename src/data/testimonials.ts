export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatarText: string;
  tag: string;
  quote: string;
  highlight: string;
  result: string;
  verifiedBuyer: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mariana-santos',
    name: 'Mariana Santos',
    city: 'Curitiba · PR',
    avatarText: 'MS',
    tag: 'Festa da Família & Primeiras Encomendas',
    quote: 'Eu nunca tinha feito um picolé na vida. Comprei as forminhas e fiz a receita de Ninho com Nutella e Morango Cravejado no sábado para o aniversário da minha afilhada. Não sobrou absolutamente nada na mesa! As mães vieram me perguntar de onde eu tinha encomendado. No mesmo domingo fechei duas encomendas de 25 unidades cada.',
    highlight: 'Fiz no sábado, no domingo fechei encomendas de 50 picolés',
    result: 'R$ 480 faturados na primeira semana',
    verifiedBuyer: true
  },
  {
    id: 'patricia-almeida',
    name: 'Patrícia Almeida',
    city: 'Campinas · SP',
    avatarText: 'PA',
    tag: 'Renda Extra no Condomínio',
    quote: 'Paguei R$ 9,90 achando que seria mais um e-book genérico, mas as aulas e a planilha são fantásticas. A técnica da base que não vai ao fogo me economizou horas na cozinha. Montei um kit degustação com 4 sabores para o grupo do meu condomínio e vendi 68 picolés em um único final de semana de calor.',
    highlight: 'Recuperei o valor do curso mais de 60 vezes logo nos primeiros dias',
    result: '68 unidades vendidas no 1º final de semana',
    verifiedBuyer: true
  },
  {
    id: 'carlos-eduardo',
    name: 'Carlos Eduardo & Fernanda',
    city: 'Belo Horizonte · MG',
    avatarText: 'CE',
    tag: 'Consumo Familiar & Economia Real',
    quote: 'Compramos inicialmente apenas para fazer em casa pros nossos dois filhos pequenos. Aqui em BH, um picolé artesanal no shopping custa de R$ 16 a R$ 20. Hoje a gente gasta cerca de R$ 2,30 por unidade e fazemos sabores incríveis como Pistache e Doce de Leite com Flor de Sal. O freezer vive abastecido e a textura é inacreditavelmente cremosa.',
    highlight: 'Economizamos mais de R$ 250 por mês em sobremesas',
    result: 'Picolés de padrão internacional na cozinha de casa',
    verifiedBuyer: true
  },
  {
    id: 'juliana-prado',
    name: 'Juliana Prado',
    city: 'Salvador · BA',
    avatarText: 'JP',
    tag: 'Nova Confeiteira Artesanal',
    quote: 'O que mais me surpreendeu foi que o picolé não fica com cristais de gelo, mesmo no meu congelador convencional de geladeira duplex. O suporte no WhatsApp foi super atencioso quando tive dúvida sobre o ponto do chocolate para banhar. Hoje tenho clientes fixos que pedem toda sexta-feira!',
    highlight: 'Textura aveludada igual gelato italiano em freezer comum',
    result: 'Clientes fixos semanais em Salvador',
    verifiedBuyer: true
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'producao' | 'negocio' | 'acesso';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Preciso de máquina profissional de sorvete ou seladora industrial?',
    answer: 'Não! O método foi 100% desenvolvido para ser feito em casa com uma batedeira comum (pode ser a mais simples, daquelas portáteis) e o freezer da sua própria geladeira doméstica. As forminhas de silicone custam cerca de R$ 18 na internet e ensinamos onde comprar nos bônus.',
    category: 'producao'
  },
  {
    question: 'Nunca fiz doces na vida. Eu realmente consigo fazer?',
    answer: 'Com certeza. O método é à prova de erros porque a base NÃO vai ao fogo e NÃO leva ovos, eliminando os dois maiores motivos de desastres na cozinha (queimar calda ou desandar ponto de ovos). É literalmente bater os ingredientes no tempo indicado, saborizar e colocar nas formas.',
    category: 'producao'
  },
  {
    question: 'Por que a receita não leva ovos? O que dá a cremosidade?',
    answer: 'A cremosidade vem da nossa fórmula de emulsão fria com teor de gordura láctea balanceado. Sem ovos, o picolé não tem aquele cheiro ou gosto residual de ovo, é seguro para crianças e pessoas com alergia alimentar e tem validade muito mais longa no freezer.',
    category: 'producao'
  },
  {
    question: 'O picolé fica duro feito pedra ou com pedacinhos de gelo?',
    answer: 'Não! Esse é o grande segredo do nosso método. Receitas caseiras comuns criam cristais de gelo porque têm excesso de água livre. Nossa base tem o equilíbrio exato de sólidos e gordura que impede a formação de gelo, mantendo a textura macia para morder mesmo a -18°C.',
    category: 'producao'
  },
  {
    question: 'Quanto custa para fazer cada picolé e qual é o lucro se eu quiser vender?',
    answer: 'O custo médio por picolé gourmet varia de R$ 1,80 a R$ 2,90 (já contando palito, embalagem e casquinha de chocolate nobre). O preço de venda praticado no mercado varia de R$ 8,00 a R$ 14,00 por unidade. Isso significa uma margem de lucro líquido que frequentemente ultrapassa 300%.',
    category: 'negocio'
  },
  {
    question: 'Posso vender alimentos na minha cidade? Preciso de alvará?',
    answer: 'Você pode começar vendendo para amigos, familiares, vizinhos e sob encomenda. Cada município possui diretrizes da vigilância sanitária para manipulação de alimentos artesanais. No Bônus 4 explicamos as boas práticas de higiene, rotulagem e como formalizar de forma simples como MEI quando sua demanda crescer.',
    category: 'negocio'
  },
  {
    question: 'Como eu recebo o acesso ao curso e aos 5 bônus?',
    answer: 'O acesso é imediato após a aprovação do pagamento. Se pagar por Pix ou Cartão de Crédito, você recebe instantaneamente no seu e-mail os dados de login para a área de membros exclusiva, com todas as aulas em vídeo em alta definição, apostilas em PDF para download e a planilha de precificação.',
    category: 'acesso'
  },
  {
    question: 'E se eu não gostar ou achar que não é para mim?',
    answer: 'Você tem 7 dias de garantia incondicional blindada. Assista às aulas, baixe o material e faça suas primeiras receitas. Se não gostar por qualquer motivo, basta mandar uma mensagem e devolvemos 100% do seu dinheiro, sem burocracia nem perguntas.',
    category: 'acesso'
  }
];
