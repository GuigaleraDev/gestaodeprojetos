import { useState } from "react";
import {ShoppingCart, Menu, X, Zap, Search} from 'lucide-react';
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, productId?: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Navbar({ currentPage, onNavigate, searchQuery, onSearchChange }: NavbarProps) {
  const { itemCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "home", label: "Início" },
    { id: "products", label: "Produtos" },
    { id: "offers", label: "Ofertas" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 backdrop-blur-md border-b border-blue-800/40 shadow-lg shadow-blue-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
            aria-label="Ir para pagina inicial"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-400/50 transition-shadow">
              <Zap size={18} className="text-white" fill="currentColor" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Blif<span className="text-blue-400">Shop</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Navegacao principal">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  currentPage === link.id
                    ? "bg-blue-600/30 text-blue-300 border border-blue-600/40"
                    : "text-blue-100/80 hover:text-white hover:bg-blue-800/40"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Search + Cart */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-xl px-3 py-2">
              <Search size={15} className="text-blue-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-transparent text-white text-sm outline-none placeholder-blue-400/60 w-40"
                aria-label="Buscar produtos"
              />
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-lg shadow-blue-600/30"
              aria-label={`Carrinho de compras, ${itemCount} ${itemCount === 1 ? "item" : "itens"}`}
            >
              <ShoppingCart size={20} className="text-white" aria-hidden="true" />
              {itemCount > 0 ? (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-300 text-blue-950 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              ) : null}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-blue-200 hover:text-white hover:bg-blue-800/40 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Abrir menu de navegacao"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen ? (
          <div className="md:hidden pb-4 border-t border-blue-800/40 mt-1 pt-3">
            <div className="flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-xl px-3 py-2 mb-3">
              <Search size={15} className="text-blue-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-transparent text-white text-sm outline-none placeholder-blue-400/60 flex-1"
                aria-label="Buscar produtos"
              />
            </div>
            <nav className="flex flex-col gap-1" role="navigation" aria-label="Navegacao mobile">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); setMobileOpen(false); }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    currentPage === link.id
                      ? "bg-blue-600/30 text-blue-300"
                      : "text-blue-100/80 hover:text-white hover:bg-blue-800/40"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
