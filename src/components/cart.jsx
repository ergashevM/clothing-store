"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/assets/loading.gif";
import Arrow from "@/assets/down.svg";
import Right from "@/assets/rright.svg";
import Trash from "@/assets/trash.svg";
import Discount from "@/assets/discount.svg";

const Carts = ({ cartItems, setCartItems, isLoading, setIsLoading }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price.current * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const newItems = cartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  const removeItem = (productId) => {
    const newItems = cartItems.filter((item) => item.product.id !== productId);
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, [setCartItems, setIsLoading]);

  return (
    <div className="w-full max-w-[1240px] mx-auto pt-6 mb-15 px-4">
      <span className="flex gap-x-3 font-satoshi font-normal text-base mb-3">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <Image className="-rotate-90" src={Arrow} alt="arrow" />
        <h5>Cart</h5>
      </span>
      <h1 className="font-integral font-bold text-[40px] mb-6 uppercase">
        Your cart
      </h1>
      <div className="flex flex-col lg:flex-row justify-between h-auto w-full gap-x-5">
        <div className="chosen w-full lg:w-[715px] h-auto border-1 border-gray-300 rounded-[20px] px-6 py-4 mb-4 lg:mb-0">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Image
                className="w-[150px] h-[150px] mt-30 object-contain"
                src={Loading}
                alt="Loading..."
                width={100}
                height={100}
              />
            </div>
          ) : cartItems.length === 0 ? (
            <p className="font-satoshi text-lg">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b border-gray-300 py-4"
              >
                <Image
                  className="rounded-[9px] w-[124px] h-[124px] object-cover"
                  src={item.product.mainImage}
                  alt="product"
                />
                <div className="w-full max-w-[527px] lg:h-[124px] flex justify-between ml-5">
                  <div className="flex flex-col justify-between">
                    <h3 className="font-bold font-satoshi text-[20px]">
                      {item.product.productname}
                    </h3>
                    {item.product.size && (
                      <p className="font-satoshi font-normal text-sm">
                        Size:
                        <span className="text-gray-500 ml-1">
                          {item.product.size}
                        </span>
                      </p>
                    )}
                    {item.product.color && (
                      <p className="font-satoshi font-normal text-sm">
                        Color:{" "}
                        <span className="text-gray-500">
                          {item.product.colorName}
                        </span>
                      </p>
                    )}
                    <p className="font-bold font-satoshi text-[24px]">
                      ${item.product.price.current}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <Image
                      width={24}
                      height={24}
                      src={Trash}
                      alt="trash"
                      className="cursor-pointer"
                      onClick={() => removeItem(item.product.id)}
                    />
                    <div className="w-[126px] h-[44px] flex justify-around items-center bg-[#F0F0F0] rounded-[62px]">
                      <p
                        className="font-satoshi font-semibold text-2xl cursor-pointer"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        -
                      </p>
                      <p className="font-satoshi font-semibold text-base">
                        {item.quantity}
                      </p>
                      <p
                        className="font-satoshi font-semibold text-2xl cursor-pointer"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        +
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="prices w-full lg:w-[505px] max-h-[408px] px-6 py-4 border-1 border-gray-300 rounded-[20px] flex flex-col justify-between gap-y-4">
          <h3 className="font-satoshi font-bold text-[24px]">Order Summary</h3>
          <div className="flex items-center justify-between">
            <p className="font-normal text-[20px] text-gray-500 font-satoshi">
              Subtotal
            </p>
            <p className="font-satoshi font-bold text-[20px]">
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-normal text-[20px] text-gray-500 font-satoshi">
              Discount (-20%)
            </p>
            <p className="font-satoshi font-bold text-[20px] text-[#FF3333]">
              -${discount.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between border-b-1 border-gray-300 pb-4">
            <p className="font-normal text-[20px] text-gray-500 font-satoshi">
              Delivery Fee
            </p>
            <p className="font-satoshi font-bold text-[20px]">${deliveryFee}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-normal text-[20px] font-satoshi">Total</p>
            <p className="font-satoshi font-bold text-[20px]">
              ${total.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-[326px] flex-grow">
              <input
                className="w-full h-[47px] bg-[#F0F0F0] rounded-[62px] pl-14 pr-5 focus:outline-none focus:border-black"
                placeholder="Add promo code"
                type="search"
              />
              <Image
                className="absolute -mt-9 ml-5"
                src={Discount}
                alt="discount"
              />
            </div>
            <button className="w-[119px] h-[47px] rounded-[62px] border-1 border-slate-200 font-satoshi font-medium text-base hover:scale-105 bg-black hover:bg-white text-white hover:text-black transition-transform duration-300">
              Apply
            </button>
          </div>
          <button className="flex justify-center items-center w-full max-w-[457px] h-[60px] rounded-[62px] border-1 border-slate-200 font-satoshi font-medium text-base hover:scale-105 bg-black text-white transition-transform duration-300">
            Go to Checkout
            <span>
              <Image className="ml-2" src={Right} alt="right arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
