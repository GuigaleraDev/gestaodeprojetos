import { useState } from "react";
import {ArrowLeft, ShoppingCart, Star, Check, ChevronRight} from 'lucide-react';
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { StarRating } from "@/components/ProductCard";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export default function ProductDetail({ product, onBack, onNavigate }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

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
          <button
            onClick={() => onNavigate("products")}
            className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            Produtos
          </button>
          <ChevronRight size={14} className="text-blue-600" aria-hidden="true" />
          <span className="text-blue-200 truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative bg-blue-900/30 rounded-3xl overflow-hidden aspect-square border border-blue-800/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {product.badge ? (
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.badge}
                </span>
              ) : null}
              {discount ? (
                <span className="bg-blue-400 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-full">
                  -{discount}%
                </span>
              ) : null}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-6 self-start transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar
            </button>

            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {product.category}
            </p>
            <h1 className="text-white font-bold text-3xl sm:text-4xl leading-tight mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} />
              <span className="text-blue-200 font-semibold">{product.rating}</span>
              <span className="text-blue-400 text-sm">({product.reviewCount} avaliacoes)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-white font-black text-4xl">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
              {product.originalPrice ? (
                <span className="text-blue-500 text-xl line-through">
                  R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                </span>
              ) : null}
              {discount ? (
                <span className="bg-blue-400/20 text-blue-300 border border-blue-400/30 text-sm font-bold px-3 py-1 rounded-full">
                  Economize {discount}%
                </span>
              ) : null}
            </div>

            <p className="text-blue-200/80 leading-relaxed mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-white font-bold mb-4">Características</h2>
              <ul className="space-y-2" aria-label="Características do produto">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-200">
                    <div className="w-5 h-5 bg-blue-600/30 border border-blue-600/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-blue-400" aria-hidden="true" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center justify-center gap-3 font-bold py-5 rounded-2xl text-lg transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-2xl ${
                added
                  ? "bg-green-600 hover:bg-green-500 shadow-green-600/30"
                  : "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30 hover:shadow-blue-500/40"
              } disabled:bg-blue-800/40 disabled:cursor-not-allowed text-white`}
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              {added ? (
                <>
                  <Check size={22} aria-hidden="true" />
                  Adicionado ao Carrinho!
                </>
              ) : (
                <>
                  <ShoppingCart size={22} aria-hidden="true" />
                  {product.inStock ? "Adicionar ao Carrinho" : "Produto Indisponível"}
                </>
              )}
            </button>

            {product.inStock ? (
              <p className="text-green-400 text-sm text-center mt-3 flex items-center justify-center gap-1.5">
                <Check size={14} aria-hidden="true" />
                Em estoque - Envio em 24h
              </p>
            ) : null}
          </div>
        </div>

        {/* Reviews */}
        <section aria-labelledby="reviews-title" className="mt-16">
          <h2 id="reviews-title" className="text-white font-bold text-2xl mb-8 flex items-center gap-3">
            <Star size={24} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
            Avaliacoes dos Clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-blue-900/30 border border-blue-800/30 rounded-2xl p-5 hover:border-blue-700/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.author}</p>
                    <p className="text-blue-400 text-xs">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} small />
                <p className="text-blue-200/80 text-sm mt-2 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
