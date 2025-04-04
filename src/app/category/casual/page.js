"use client";
import React, { useState, useEffect } from "react";
import Ad from "@/components/ad";
import Casual from "@/components/casual";
import FilterSection from "@/components/filterSection";
import Navigation from "@/components/navigation";
import Offer from "@/components/offer";
import Footer from "@/components/footer";
import Image from "next/image";
import Filter from "@/assets/filter.svg";
import database from "@/components/database";

const Category = () => {
  const [priceRange, setPriceRange] = useState([50, 250]);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      const cartItems = JSON.parse(savedItems);
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    }
  }, []);

  const handleAddToCart = (quantity) => {
    setCartCount((prevCount) => prevCount + quantity);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 770);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProducts = database.filter((product) => {
    const currentPrice = product.price.current;
    const isInRange =
      currentPrice >= priceRange[0] && currentPrice <= priceRange[1];
    const isColorMatch = selectedColor ? product.color === selectedColor : true;

    return isInRange && isColorMatch;
  });

  return (
    <div>
      <Ad />
      <Navigation cartCount={cartCount} />
      <div className="w-full max-w-[1240px] mx-auto flex justify-between mt-5 gap-x-5 relative">
        {isSmallScreen && !isFilterVisible && (
          <div className="mt-10 cursor-pointer" onClick={toggleFilter}>
            <Image
              className="min-w-[40px]"
              src={Filter}
              alt="Filter"
              width={50}
            />
          </div>
        )}

        {isFilterVisible && isSmallScreen && (
          <div className="absolute top-0 left-0 w-full bg-white z-10 p-4 shadow-md">
            <button className="text-[50px] mb-4" onClick={toggleFilter}>
              X
            </button>
            <FilterSection
              setPriceRange={setPriceRange}
              priceRange={priceRange}
              setSelectedColor={setSelectedColor}
            />
          </div>
        )}

        <div className={`hidden md:block lg:block`}>
          <FilterSection
            setPriceRange={setPriceRange}
            priceRange={priceRange}
            setSelectedColor={setSelectedColor}
          />
        </div>

        <Casual priceRange={priceRange} selectedColor={selectedColor} />
      </div>
      <Offer />
      <Footer />
    </div>
  );
};

export default Category;
