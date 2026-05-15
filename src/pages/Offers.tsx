import {Tag, ArrowRight, Zap, Clock} from 'lucide-react';
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface OffersPageProps {
  onViewDetails: (id: string) => void;
  onNavigate: (page: string) => void;
}

const offersProducts = products.filter((p) => p.originalPrice || p.badge === "Oferta" || p.badge === "Destaque");

export default function OffersPage({ onViewDetails, onNavigate }: OffersPageProps) {
  return (
    <main className="min-h-screen bg-blue-950 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm py-4 mb-6">
          <button
            onClick={() => onNavigate("home")}
            className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            Inicio
          </button>
          <span className="text-blue-600 mx-1" aria-hidden="true">/</span>
          <span className="text-blue-200">Ofertas Especiais</span>
        </nav>

        {/* Header Banner */}
        <div
          className="relative rounded-3xl overflow-hidden mb-10 border border-blue-700/40"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 60%, #0f172a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="relative px-8 sm:px-12 py-10 sm:py-14">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Clock size={14} aria-hidden="true" />
              Ofertas por Tempo Limitado
            </div>
            <h1 className="text-white font-black text-4xl sm:text-5xl mb-3">
              Ofertas <span className="text-blue-300">Especiais</span>
            </h1>
            <p className="text-blue-200/80 text-lg max-w-lg">
              Aproveite os melhores descontos em produtos de tecnologia premium. Até 30% de desconto!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Zap, label: "Frete Grátis acima de R$299" },
                { icon: Tag, label: "Até 30% OFF" },
                { icon: Clock, label: "Oferta por tempo limitado" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full"
                >
                  <Icon size={13} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-2xl flex items-center gap-2">
            <Tag size={20} className="text-blue-400" aria-hidden="true" />
            Produtos em Oferta
          </h2>
          <span className="text-blue-400 text-sm">{offersProducts.length} produtos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {offersProducts.map((product) => (
            <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))}
        </div>

        {/* CTA to all products */}
        <div className="mt-12 text-center">
          <p className="text-blue-300 mb-4">Quer ver todos os nossos produtos?</p>
          <button
            onClick={() => onNavigate("products")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Ver Catálogo Completo
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </main>
  );
}
