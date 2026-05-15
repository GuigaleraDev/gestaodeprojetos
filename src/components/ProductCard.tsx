import {Star, ShoppingCart, Eye} from 'lucide-react';
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

function StarRating({ rating, small }: { rating: number; small?: boolean }) {
  const size = small ? 12 : 14;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Avaliacao: ${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-blue-700"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export { StarRating };

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="group bg-blue-950/60 border border-blue-800/30 rounded-2xl overflow-hidden hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-900/40 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-blue-900/30 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge ? (
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
              {product.badge}
            </span>
          ) : null}
          {discount ? (
            <span className="bg-blue-400 text-blue-950 text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
              -{discount}%
            </span>
          ) : null}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetails(product.id)}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={`Ver detalhes de ${product.name}`}
          >
            <Eye size={16} aria-hidden="true" />
            Ver Detalhes
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-white font-semibold text-sm leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} small />
          <span className="text-blue-300 text-xs">{product.rating}</span>
          <span className="text-blue-500 text-xs">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-white font-bold text-lg">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.originalPrice ? (
              <span className="text-blue-500 text-sm line-through">
                R$ {product.originalPrice.toFixed(2).replace(".", ",")}
              </span>
            ) : null}
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-sm"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            <ShoppingCart size={16} aria-hidden="true" />
            {product.inStock ? "Adicionar ao Carrinho" : "Sem Estoque"}
          </button>
        </div>
      </div>
    </article>
  );
}
