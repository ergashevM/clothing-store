"use client";
import { useState, useEffect } from "react";
import Ad from "@/components/ad";
import Comments from "@/components/comments";
import DressStyle from "@/components/dressStyle";
import FeaturedProducts from "@/components/featuredProducts";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navigation from "@/components/navigation";
import NewArrivals from "@/components/newArrivals";
import Offer from "@/components/offer";
import TopSelling from "@/components/topSelling";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      const cartItems = JSON.parse(savedItems);
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    }
  }, []);

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col">
      <Ad />
      <Navigation cartCount={cartCount} />
      <HeroSection />
      <FeaturedProducts />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Comments />
      <Offer />
      <Footer />
    </div>
  );
};

export default Home;
