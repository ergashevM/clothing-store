"use client";
import { useState, useEffect } from "react";
import Ad from "@/components/ad";
import Navigation from "@/components/navigation";
import Carts from "@/components/cart";
import Offer from "@/components/offer";
import Footer from "@/components/footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("cartItems");
      if (savedItems) {
        setCartItems(JSON.parse(savedItems));
      }
      setIsLoading(false);
    }
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Ad />
      <Navigation cartCount={cartCount} />
      <Carts
        cartItems={cartItems}
        setCartItems={setCartItems}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Offer />
      <Footer />
    </div>
  );
};

export default Cart;
