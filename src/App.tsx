import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import HomePage from "@/pages/Home";
import ProductsPage from "@/pages/Products";
import OffersPage from "@/pages/Offers";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/products";

export const routes: RouteObject[] = [
  { path: "/", element: <ShopWrapper /> },
];

function ShopWrapper() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewDetails = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    if (q.trim()) {
      setCurrentPage("products");
    }
  };

  const selectedProduct = selectedProductId ? products.find((p) => p.id === selectedProductId) : null;

  const renderPage = () => {
    if (currentPage === "detail" && selectedProduct) {
      return (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setCurrentPage("products")}
          onNavigate={handleNavigate}
        />
      );
    }

    switch (currentPage) {
      case "products":
        return (
          <ProductsPage
            onViewDetails={handleViewDetails}
            onNavigate={handleNavigate}
            searchQuery={searchQuery}
          />
        );
      case "offers":
        return <OffersPage onViewDetails={handleViewDetails} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onViewDetails={handleViewDetails} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-blue-950">
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <CartDrawer />
        {renderPage()}
        <Footer />
      </div>
    </CartProvider>
  );
}

function App() {
  return useRoutes(routes);
}

export default App;
