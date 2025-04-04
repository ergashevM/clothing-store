"use client";
import Image from "next/image";
import Arrow from "../assets/down.svg";
import Link from "next/link";
import Star from "../assets/starForRating.svg";
import HalfStar from "../assets/halfStar.svg";
import database from "@/components/database";
import React from "react";
import Guilty from "@/assets/guilty.png";

const Casual = ({ priceRange, selectedColor }) => {
  const filteredProducts = database.filter((product) => {
    const currentPrice = product.price.current;
    const isInRange =
      currentPrice >= priceRange[0] && currentPrice <= priceRange[1];
    const isColorMatch = selectedColor
      ? product.filterColor.includes(selectedColor)
      : true;

    return isInRange && isColorMatch;
  });

  return (
    <div className="w-full max-w-[1240px] mx-auto flex justify-between">
      <div className="w-full max-w-[920px] mt-10">
        <div className="flex items-center justify-between flex-wrap">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <p className="font-satoshi text-base font-normal text-gray-500 flex gap-x-4">
            Showing {filteredProducts.length} of {database.length} Products
            <span className="flex gap-x-1.5">
              Sort by:
              <span className="font-medium text-black flex gap-x-1">
                Most Popular
                <Image src={Arrow} alt="arrow" />
              </span>
            </span>
          </p>
        </div>
        <div className="w-full max-w-[1440px] mx-auto mt-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} passHref>
                  <div className="transition-transform duration-500 hover:scale-110 cursor-pointer">
                    <Image
                      src={product.productImage}
                      alt={product.productname}
                      width={500}
                      height={500}
                    />
                    <div className="flex flex-col gap-y-2 py-4">
                      <h3 className="font-satoshi font-bold text-[20px]">
                        {product.productname}
                      </h3>
                      <span className="flex gap-x-2">
                        {Array.from({
                          length: Math.floor(parseFloat(product.stink)),
                        }).map((_, index) => (
                          <Image
                            width={18}
                            height={18}
                            key={index}
                            src={Star}
                            alt="star"
                          />
                        ))}
                        {product.stink.includes(".5") && (
                          <Image
                            width={8}
                            height={16}
                            src={HalfStar}
                            alt="half star"
                          />
                        )}
                        <p className="font-satoshi text-sm font-normal text-black ml-2">
                          {product.stink}
                        </p>
                      </span>
                      <div className="flex items-center gap-x-4">
                        <p className="font-satoshi font-bold text-[24px]">
                          ${product.price.current}
                          {product.price.old && (
                            <span className="text-gray-500 line-through ml-4">
                              {product.price.old}
                            </span>
                          )}
                        </p>
                        {product.percent && (
                          <span className="w-[58px] h-[28px] bg-red-200 bg-opacity-10 flex items-center justify-center text-red-500 font-satoshi text-[12px] font-medium rounded-[62px]">
                            ${product.percent}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="font-integral text-[18px] text-red-500 flex">
                Unfortunately, we currently do not have any products in stock
                that match the selected price range or color you selected.
                <Image src={Guilty} alt="guilty man" />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casual;

