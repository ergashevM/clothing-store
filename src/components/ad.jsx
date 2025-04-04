"use client";
import { useState } from "react";
import Image from "next/image";
import Close from "../assets/closeAdd.svg";

const Ad = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[38px] font-satoshi flex items-center justify-center bg-[#000] text-white relative">
      <h1 className="font-normal text-sm">
        Sign up and get 20% off to your first order.
        <span className="font-medium underline ml-1">Sign Up Now</span>
      </h1>
      <Image
        className="absolute right-5 hidden sm:hidden md:block md:right-20 lg:block lg:right-30 cursor-pointer"
        width={15}
        src={Close}
        alt="close"
        onClick={handleClose}
      />
    </div>
  );
};

export default Ad;
