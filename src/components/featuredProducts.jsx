"use client"

import React, { useEffect, useState } from 'react';
import Versace from "@/assets/versace.svg";
import Zara from "@/assets/zara.svg";
import Gucci from "@/assets/gucci.svg";
import Prada from "@/assets/prada.svg";
import C_Klein from "@/assets/klein.svg";
import Image from "next/image";

const brands = [
  { src: Versace, alt: "versace" },
  { src: Zara, alt: "zara" },
  { src: Gucci, alt: "gucci" },
  { src: Prada, alt: "prada" },
  { src: C_Klein, alt: "calvin klein" },
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-wrap items-center justify-between bg-black px-20">
      {brands.map((brand, index) => (
        <div
          key={index}
          className={`flex items-center justify-center m-2 transition-transform duration-500 ${index === currentIndex ? 'scale-150' : 'scale-100'}`}
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            className="h-[60px] md:h-[80px] lg:h-[100px]"
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
