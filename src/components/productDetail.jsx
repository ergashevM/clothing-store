"use client";
import Image from "next/image";
import { useState } from "react";
import Star from "../assets/starForRating.svg";
import HalfStar from "../assets/halfStar.svg";
import Check from "../assets/checkWhite.svg";

const ProductDetail = ({ product, handleAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const colors = product.color;

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const sizes = product.sizes;
  const handleAddToCartClick = () => {
    if (selectedSize) {
      handleAddToCart(quantity, selectedSize);
    } else {
      alert("Iltimos, o'lchamni tanlang.");
    }
  };

  return (
    <div className="w-full max-w-[654px] h-auto lg:h-auto ml-4 sm:ml-10">
      <div className="border-b border-gray-300 pb-5">
        <h1 className="font-integral font-bold text-[32px] sm:text-[40px]">
          {product.productname}
        </h1>
        <span className="flex gap-x-2 my-2">
          {Array.from({ length: parseFloat(product.stink) }).map((_, index) => (
            <Image
              key={index}
              className="w-[20px] sm:w-[25px]"
              src={Star}
              alt="star"
            />
          ))}
          {product.stink.split("/")[1] > product.stink.split("/")[0] && (
            <Image className="w-[10px] sm:w-[15px]" src={HalfStar} alt="star" />
          )}
          <p className="flex items-end font-satoshi text-base font-normal text-black ml-2">
            {product.stink}
          </p>
        </span>
        <div className="flex gap-x-7 items-center">
          <p className="font-satoshi font-bold text-[24px] sm:text-[32px]">
            ${product.price.current}
            {product.price.old && (
              <span className="text-gray-500 line-through ml-4">
                {product.price.old}
              </span>
            )}
          </p>
          {product.percent && (
            <span className="w-[72px] h-[34px] bg-red-200 bg-opacity-10 flex items-center justify-center text-red-500 font-satoshi text-[16px] font-medium rounded-[62px]">
              {product.percent}
            </span>
          )}
        </div>
        <p className="font-satoshi text-base font-normal leading-[22px] text-gray-500 mt-3">
          {product.description}
        </p>
      </div>
      <div className="border-b border-gray-300 pb-5">
        <h4 className="font-normal text-base font-satoshi text-gray-500 my-4">
          Select Colors
        </h4>
        <div className="max-w-[130px] flex justify-start items-center gap-x-2">
          {colors.map(({ id, color }) => (
            <span
              key={id}
              className={`w-[37px] h-[37px] rounded-[50%] flex justify-center items-center cursor-pointer ${
                selectedColor === color ? "border-2 border-black" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            >
              {selectedColor === color && <Image src={Check} alt="check" />}
            </span>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-300 pb-5">
        <h4 className="font-normal text-base font-satoshi text-gray-500 my-4">
          Choose Size
        </h4>
        <div className="max-w-[430px] flex flex-wrap justify-between items-center">
          {sizes.map((size) => (
            <button
              key={size}
              className={`w-[86px] h-[46px] text-center rounded-[62px] font-satoshi font-normal text-base ${
                selectedSize === size
                  ? "bg-[#000] text-white"
                  : "bg-[#F0F0F0] text-gray-500"
              }`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-5">
        <div className="w-[170px] h-[52px] flex justify-around items-center bg-[#F0F0F0] rounded-[62px]">
          <p
            className="font-satoshi font-semibold text-2xl cursor-pointer"
            onClick={decreaseQuantity}
          >
            -
          </p>
          <p className="font-satoshi font-semibold text-base">{quantity}</p>
          <p
            className="font-satoshi font-semibold text-2xl cursor-pointer"
            onClick={increaseQuantity}
          >
            +
          </p>
        </div>
        <button
          onClick={handleAddToCartClick}
          className="w-full max-w-[400px] h-auto lg:h-[52px] font-satoshi font-medium text-base text-white bg-black hover:bg-white hover:text-black hover:border-1 hover:border-black rounded-[62px] mt-4 sm:mt-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
