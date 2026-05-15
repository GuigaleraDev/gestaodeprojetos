import { useState, useMemo } from "react";
import {SlidersHorizontal, Search, ChevronRight, Package} from 'lucide-react';
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface ProductsPageProps {
  onViewDetails: (id: string) => void;
  onNavigate: (page: string) => void;
  searchQuery: string;
  initialCategory?: string;
}

export default function ProductsPage({ onViewDetails, onNavigate, searchQuery, initialCategory }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "all");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        list.sort((a, b) => {
          const dA = a.originalPrice ? (1 - a.price / a.originalPrice) : 0;
          const dB = b.originalPrice ? (1 - b.price / b.originalPrice) : 0;
          return dB - dA;
        });
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

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
          <ChevronRight size={14} className="text-blue-600" aria-hidden="true" />
          <span className="text-blue-200">Produtos</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white font-black text-4xl mb-2">Nossos Produtos</h1>
          <p className="text-blue-300/80">
            {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-blue-900/30 border border-blue-800/30 rounded-2xl p-4 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filtrar por categoria">
              <SlidersHorizontal size={16} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-blue-800/30 text-blue-300 hover:bg-blue-700/40 hover:text-white"
                  }`}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <label htmlFor="sort-select" className="text-blue-400 text-sm whitespace-nowrap">Ordenar:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-blue-800/40 border border-blue-700/40 text-white text-sm rounded-lg px-3 py-1.5 outline-none focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <option value="featured">Destaques</option>
                <option value="price-asc">Menor Preco</option>
                <option value="price-desc">Maior Preco</option>
                <option value="rating">Melhor Avaliacao</option>
                <option value="discount">Maior Desconto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center">
              <Search size={32} className="text-blue-500" aria-hidden="true" />
            </div>
            <div>
              <p className="text-blue-200 font-bold text-xl">Nenhum produto encontrado</p>
              <p className="text-blue-400 mt-1">Tente ajustar os filtros ou buscar por outro termo</p>
            </div>
            <button
              onClick={() => { setActiveCategory("all"); }}
              className="mt-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Package size={16} aria-hidden="true" />
              Ver todos os produtos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
