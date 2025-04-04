"use client";
import Link from "next/link";

const DressStyle = () => {
  return (
    <div className="w-full max-w-[1295px] mx-auto text-center bg-[#F0F0F0] rounded-[40px] px-22 pt-10 pb-15 font-satoshi font-bold text-[36px] mb-15">
      <h1 className="font-bold text-[48px] font-integral text-center mb-8 bg-gradient-to-r from-black to-white bg-clip-text text-transparent animate-gradient">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between mb-5">
        <Link className="w-full max-w-[407px] h-auto max-h-[289px] casual-background flex items-start justify-start transition-transform duration-500 hover:scale-105 mb-4 md:mb-0 bg-right cursor-pointer" href="/category/casual">
            <h4 className="mt-8 ml-8">Casual</h4>
        </Link>

        <div className="w-full max-w-[684px] h-auto max-h-[289px] formal-background flex items-start justify-start transition-transform duration-500 hover:scale-105 bg-right">
          <h4 className="mt-8 ml-8">Formal</h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="party-background flex items-start justify-start w-full max-w-[684px] h-auto max-h-[289px] transition-transform duration-500 hover:scale-105 mb-4 md:mb-0 bg-right">
          <h4 className="mt-8 ml-8">Party</h4>
        </div>

        <div className="w-full max-w-[407px] h-auto max-h-[289px] gym-background flex items-start justify-start transition-transform duration-500 hover:scale-105 bg-right cursor-pointer">
          <h4 className="mt-8 ml-8">Gym</h4>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
