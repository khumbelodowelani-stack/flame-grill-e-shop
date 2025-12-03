import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header onCartClick={() => setCartOpen(true)} />
        <Hero />
        <MenuSection />
        <Contact />
        <Footer />
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
