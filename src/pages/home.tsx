import {ArrowRight, Star, Zap, ShoppingBag, Shield, Truck, Headphones, Tag} from 'lucide-react';
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
  onViewDetails: (id: string) => void;
}

const featuredProducts = products.slice(0, 4);
const specialOffers = products.filter((p) => p.originalPrice).slice(0, 3);

export default function HomePage({ onNavigate, onViewDetails }: HomePageProps) {
  return (
    <main className="min-h-screen bg-blue-950">
      {/* Hero */}
      <section
        aria-label="Banner principal"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(/gestaodeprojetos/products/fundodetela2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-blue-950" aria-hidden="true" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap size={14} fill="currentColor" aria-hidden="true" />
              Tecnologia Premium com Preço Justo
            </div>

            <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
              Bem-vindo a
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #3b82f6)" }}>
                BlifShop
              </span>
            </h1>

            <p className="text-blue-200/80 text-xl leading-relaxed mb-10 max-w-xl">
              Descubra os melhores produtos de tecnologia com design elegante, qualidade superior e os melhores preços do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("products")}
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/50 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <ShoppingBag size={22} aria-hidden="true" />
                Explorar Produtos
                <ArrowRight size={20} aria-hidden="true" />
              </button>

              <button
                onClick={() => onNavigate("offers")}
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Tag size={20} aria-hidden="true" />
                Ver Ofertas
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 flex-wrap">
              {[
                { value: "100+", label: "Produtos" },
                { value: "5k+", label: "Clientes" },
                { value: "4.9", label: "Avaliação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-white font-black text-3xl">{stat.value}</p>
                  <p className="text-blue-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section aria-labelledby="special-offers-title" className="py-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Zap size={20} className="text-white" fill="currentColor" />
              </div>
              <div>
                <p id="special-offers-title" className="text-white font-black text-lg">Ofertas Especiais - Até 30% OFF!</p>
                <p className="text-blue-200 text-sm">Válido por tempo limitado. Aproveite agora!</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate("offers")}
              className="flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 text-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Ver Todas as Ofertas
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-title" className="py-16 bg-blue-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="features-title" className="sr-only">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Entrega Rápida", desc: "Entrega em até 48h para todo o Brasil com rastreamento em tempo real" },
              { icon: Shield, title: "Garantia Total", desc: "Todos os produtos com garantia de 12 meses e suporte especializado" },
              { icon: Headphones, title: "Suporte 24/7", desc: "Equipe de especialistas prontos para ajudar a qualquer hora" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-blue-900/30 border border-blue-800/30 rounded-2xl p-5 hover:border-blue-700/50 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{title}</h3>
                  <p className="text-blue-300/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Products */}
      <section aria-labelledby="deals-title" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Tag size={18} className="text-blue-400" aria-hidden="true" />
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Ofertas Especiais</span>
              </div>
              <h2 id="deals-title" className="text-white font-black text-3xl">Melhores Promoções</h2>
            </div>
            <button
              onClick={() => onNavigate("offers")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              Ver todas
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialOffers.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section aria-labelledby="featured-title" className="py-16 bg-blue-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star size={18} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Mais Vendidos</span>
              </div>
              <h2 id="featured-title" className="text-white font-black text-3xl">Produtos em Destaque</h2>
            </div>
            <button
              onClick={() => onNavigate("products")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              Ver todos
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section aria-labelledby="promo-title" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl overflow-hidden border border-blue-700/40"
            style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #1e3a5f 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(/gestaodeprojetos/products/promocao.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden="true"
            />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative px-8 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest">Promoção Especial</span>
                <h2 id="promo-title" className="text-white font-black text-4xl sm:text-5xl mt-2 mb-4 leading-tight">
                  Até <span className="text-blue-300">30% OFF</span><br />
                  em áudio premium
                </h2>
                <p className="text-blue-200/80 text-lg max-w-md">
                  Aproveite os melhores fones e caixas de som com descontos exclusivos. Por tempo limitado!
                </p>
              </div>
              <button
                onClick={() => onNavigate("offers")}
                className="flex items-center gap-3 bg-white text-blue-700 font-black px-8 py-5 rounded-2xl hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow-2xl text-lg whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Aproveitar Oferta
                <ArrowRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
