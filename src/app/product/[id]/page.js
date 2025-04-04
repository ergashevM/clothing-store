"use client";
import { useState, useEffect } from "react";
import Ad from "@/components/ad";
import Navigation from "@/components/navigation";
import { useParams } from "next/navigation";
import database from "@/components/database";
import ThumbnailImage from "@/components/ThumbnailImage";
import ProductDetail from "@/components/ProductDetail";
import Reviews from "@/components/reviews";
import AlsoLikeYou from "@/components/alsoLikeYou";
import Offer from "@/components/offer";
import Footer from "@/components/footer";

const ProductDetails = () => {
  const { id } = useParams();
  const product = database.find((item) => item.id.toString() === id);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (quantity, selectedSize) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.product.size === selectedSize
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = prevItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });
      } else {
        newItems = [...prevItems, { product: { ...product, size: selectedSize }, quantity }];
      }

      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return newItems;
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Ad />
      <Navigation cartCount={cartCount} />
      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start lg:items-stretch mt-10">
        <div className="flex-shrink-0">
          <ThumbnailImage
            mainImage={product.mainImage}
            thumbnails={product.thumbnails}
          />
        </div>
        <div className="flex-grow mt-4 lg:mt-0 lg:ml-4">
          <ProductDetail product={product} handleAddToCart={handleAddToCart} />
        </div>
      </div>
      <Reviews />
      <AlsoLikeYou />
      <Offer />
      <Footer />
    </div>
  );
};

export default ProductDetails;
