export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  badge?: string;
  inStock: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export const categories = [
  { id: "all", label: "Todos" },
  { id: "audio", label: "Audio" },
  { id: "computing", label: "Computadores" },
  { id: "wearables", label: "Wearables" },
  { id: "peripherals", label: "Perifericos" },
  { id: "accessories", label: "Acessorios" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Fone Pro X1",
    price: 349.90,
    originalPrice: 499.90,
    category: "audio",
    image: "/gestaodeprojetos/products/fonedeouvido.png",
    rating: 4.8,
    reviewCount: 128,
    description: "Fone de ouvido over-ear premium com cancelamento ativo de ruido e som surround 360 graus. Bateria de longa duracao e design ergonomico para uso prolongado.",
    features: ["Cancelamento ativo de ruido", "40h de bateria", "Driver 40mm", "Bluetooth 5.3", "Carregamento rapido USB-C"],
    badge: "Oferta",
    inStock: true,
    reviews: [
      { id: "r1", author: "Carlos M.", rating: 5, comment: "Qualidade de som incrivel! Vale cada centavo.", date: "2026-05-11", avatar: "C" },
      { id: "r2", author: "Ana Paula", rating: 5, comment: "Confortavel para longos periodos, cancelamento de ruido perfeito.", date: "2026-05-12", avatar: "A" },
      { id: "r3", author: "Ricardo S.", rating: 4, comment: "Excelente produto, apenas achei o cabo um pouco curto.", date: "2026-05-10", avatar: "R" },
    ]
  },
  {
    id: "2",
    name: "Notebook Ultra 15",
    price: 3299.00,
    originalPrice: 3999.00,
    category: "computing",
    image: "/gestaodeprojetos/products/notebook.png",
    rating: 4.9,
    reviewCount: 87,
    description: "Notebook ultrafino com tela Full HD 15.6 polegadas, processador de ultima geracao e bateria de ate 12 horas. Perfeito para trabalho e entretenimento.",
    features: ["Intel Core i7 13a geracao", "16GB RAM DDR5", "512GB SSD NVMe", "Tela 15.6 IPS 144Hz", "Bateria 12h"],
    badge: "Mais Vendido",
    inStock: true,
    reviews: [
      { id: "r4", author: "Fernanda L.", rating: 5, comment: "Rapidissimo e leve. Melhor investimento que fiz!", date: "2026-05-09", avatar: "F" },
      { id: "r5", author: "Marcos V.", rating: 5, comment: "Desempenho excepcional, tela maravilhosa.", date: "2026-05-12", avatar: "M" },
      { id: "r6", author: "Julia T.", rating: 4, comment: "Otimo notebook, mas poderia ter mais portas USB.", date: "2026-05-11", avatar: "J" },
    ]
  },
  {
    id: "3",
    name: "SmartWatch Tech S3",
    price: 899.90,
    originalPrice: 1199.90,
    category: "wearables",
    image: "/gestaodeprojetos/products/smartwatch.png",
    rating: 4.7,
    reviewCount: 203,
    description: "Relogio inteligente com monitoramento de saude completo, GPS integrado e resistencia a agua de 50 metros. Display AMOLED de alta resolucao.",
    features: ["GPS integrado", "Monitor cardiaco 24/7", "5ATM waterproof", "Display AMOLED 1.4\"", "Bateria 7 dias"],
    badge: "Novo",
    inStock: true,
    reviews: [
      { id: "r7", author: "Pedro A.", rating: 5, comment: "GPS preciso e monitor de saude muito util.", date: "2026-05-11", avatar: "P" },
      { id: "r8", author: "Camila R.", rating: 5, comment: "Design bonito e funcional. Super recomendo!", date: "2026-05-13", avatar: "C" },
      { id: "r9", author: "Bruno K.", rating: 4, comment: "Bateria dura bem, qualidade de construcao excelente.", date: "2026-05-10", avatar: "B" },
    ]
  },
  {
    id: "4",
    name: "Earbuds True Pro",
    price: 279.90,
    originalPrice: 379.90,
    category: "audio",
    image: "/gestaodeprojetos/products/earbud.png",
    rating: 4.6,
    reviewCount: 156,
    description: "Fones de ouvido in-ear verdadeiramente sem fio com cancelamento de ruido ativo, resistencia a sudor e case de carregamento com 30h de bateria total.",
    features: ["ANC Ativo", "IPX4 resistente a agua", "30h bateria total", "Bluetooth 5.3", "Modo Transparencia"],
    badge: "Oferta",
    inStock: true,
    reviews: [
      { id: "r10", author: "Larissa M.", rating: 5, comment: "Encaixe perfeito e som incrivel para o preço.", date: "2026-05-14", avatar: "L" },
      { id: "r11", author: "Thiago P.", rating: 4, comment: "Qualidade premium. ANC funciona muito bem.", date: "2026-05-06", avatar: "T" },
      { id: "r12", author: "Patricia N.", rating: 5, comment: "Melhor earbuds que ja tive. Som muito equilibrado.", date: "2026-05-07", avatar: "P" },
    ]
  },
  {
    id: "5",
    name: "Teclado Mecanico SoftStrike",
    price: 459.90,
    category: "peripherals",
    image: "/gestaodeprojetos/products/tecladomecanico.png",
    rating: 4.8,
    reviewCount: 94,
    description: "Teclado mecanico gamer com switches azuis, iluminacao RGB programavel e estrutura em aluminio. Layout ABNT2 completo com teclas multimedia.",
    features: ["Switches Azuis", "RGB 16.8M cores", "Anti-ghosting NKRO", "Estrutura aluminio", "USB-C destacavel"],
    inStock: true,
    reviews: [
      { id: "r13", author: "Gabriel F.", rating: 5, comment: "Som dos switches perfeito! Escrita muito satisfatoria.", date: "2026-05-08", avatar: "G" },
      { id: "r14", author: "Diego S.", rating: 5, comment: "Construcao solida, RGB lindo. Vale muito!", date: "2026-05-12", avatar: "D" },
      { id: "r15", author: "Rafael M.", rating: 4, comment: "Excelente qualidade. Apenas o cabo poderia ser mais grosso.", date: "2026-05-15", avatar: "R" },
    ]
  },
  {
    id: "6",
    name: "Mouse Gamer Logitech",
    price: 219.90,
    originalPrice: 299.90,
    category: "peripherals",
    image: "/gestaodeprojetos/products/mouse.png",
    rating: 4.7,
    reviewCount: 178,
    description: "Mouse gamer ergonomico com sensor optico de 25.600 DPI, 7 botoes programaveis e iluminacao RGB. Design ambidestro com grip lateral.",
    features: ["25.600 DPI", "7 botoes programaveis", "Polling Rate 1000Hz", "RGB 16.8M cores", "Cabo trancado"],
    badge: "Oferta",
    inStock: true,
    reviews: [
      { id: "r16", author: "Lucas H.", rating: 5, comment: "Precisao incrivel! Melhorou muito meu gameplay.", date: "2026-05-15", avatar: "L" },
      { id: "r17", author: "Victor A.", rating: 4, comment: "Leve e preciso. Perfeito para FPS.", date: "2026-05-14", avatar: "V" },
      { id: "r18", author: "Eduardo P.", rating: 5, comment: "Sensor top de linha. Responsividade excelente.", date: "2026-05-11", avatar: "E" },
    ]
  },
  {
    id: "7",
    name: "Caixa de Som Beat 360",
    price: 599.90,
    originalPrice: 799.90,
    category: "audio",
    image: "/gestaodeprojetos/products/Caixadesom.png",
    rating: 4.9,
    reviewCount: 67,
    description: "Caixa de som portatil com som 360 graus, resistencia a agua IPX7, 24 horas de bateria e luz de ambiente integrada. Conectividade multipoint.",
    features: ["Som 360 graus", "IPX7 waterproof", "24h de bateria", "Luz ambiente RGB", "Bluetooth multipoint"],
    badge: "Novo",
    inStock: true,
    reviews: [
      { id: "r19", author: "Isabela C.", rating: 5, comment: "Som potente e cristalino. Perfeita para festas!", date: "2026-05-11", avatar: "I" },
      { id: "r20", author: "Andre M.", rating: 5, comment: "Resistencia a agua real, testei na praia sem problemas.", date: "2026-05-13", avatar: "A" },
      { id: "r21", author: "Natalia P.", rating: 4, comment: "Excelente qualidade de audio e bateria dura muito.", date: "2026-05-14", avatar: "N" },
    ]
  },
  {
    id: "8",
    name: "Tablet Pad Ultra",
    price: 1899.90,
    originalPrice: 2299.90,
    category: "computing",
    image: "/gestaodeprojetos/products/tablet.png",
    rating: 4.8,
    reviewCount: 112,
    description: "Tablet de alta performance com tela AMOLED 11 polegadas 120Hz, processador octa-core e caneta stylus incluida. Ideal para criatividade e produtividade.",
    features: ["Tela AMOLED 11\" 120Hz", "Processador octa-core", "128GB armazenamento", "Caneta stylus incluida", "Bateria 10.000mAh"],
    badge: "Destaque",
    inStock: true,
    reviews: [
      { id: "r22", author: "Beatriz L.", rating: 5, comment: "Tela lindissima! Otimo para desenho digital.", date: "2026-05-14", avatar: "B" },
      { id: "r23", author: "Henrique S.", rating: 5, comment: "Desempenho excelente para producao de conteudo.", date: "2026-05-11", avatar: "H" },
      { id: "r24", author: "Mariana F.", rating: 4, comment: "Perfeita para trabalho e entretenimento.", date: "2026-05-15", avatar: "M" },
    ]
  },
];
