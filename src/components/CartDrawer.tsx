import {X, Trash2, Plus, Minus, ShoppingBag, CreditCard} from 'lucide-react';
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleCheckout = () => {
    alert(`Pedido realizado com sucesso! Total: R$ ${total.toFixed(2).replace(".", ",")}`);
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen ? (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      ) : null}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-blue-950 border-l border-blue-800/40 z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-blue-800/40">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-blue-400" />
            <h2 className="text-white font-bold text-lg">Meu Carrinho</h2>
            {items.length > 0 ? (
              <span className="bg-blue-600/30 text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-600/30">
                {items.reduce((s, i) => s + i.quantity, 0)} {items.reduce((s, i) => s + i.quantity, 0) === 1 ? "item" : "itens"}
              </span>
            ) : null}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-blue-300 hover:text-white hover:bg-blue-800/40 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center">
                <ShoppingBag size={32} className="text-blue-500" />
              </div>
              <div>
                <p className="text-blue-200 font-medium">Seu carrinho esta vazio</p>
                <p className="text-blue-400 text-sm mt-1">Adicione produtos para continuar</p>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 bg-blue-900/30 border border-blue-800/30 rounded-xl p-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{item.product.name}</p>
                  <p className="text-blue-400 text-xs mt-0.5">{item.product.category}</p>
                  <p className="text-blue-300 font-bold text-sm mt-1">
                    R$ {item.product.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1.5 text-blue-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    aria-label={`Remover ${item.product.name} do carrinho`}
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="flex items-center gap-1 bg-blue-900/50 rounded-lg border border-blue-700/40">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 text-blue-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-l-lg"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-white text-xs font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 text-blue-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-r-lg"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 ? (
          <div className="px-5 py-5 border-t border-blue-800/40 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-blue-200">Subtotal</span>
              <span className="text-white font-bold text-lg">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <p className="text-blue-400 text-xs text-center">Frete calculado no checkout</p>
            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Finalizar compra"
            >
              <CreditCard size={18} aria-hidden="true" />
              Finalizar Compra
            </button>
          </div>
        ) : null}
      </aside>
    </>
  );
}
