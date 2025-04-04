"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Basket from "../assets/basket.svg";
import User from "../assets/user.svg";
import MenuIcon from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Dropdown from "./dropdown";
import Search from "@/assets/search.svg";

const Navigation = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-[1240px] h-auto mx-auto mt-4 flex items-center justify-between flex-wrap border-b-1 border-[#f0f0f0] pb-4">
      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image src={MenuIcon} alt="Menu" />
      </div>

      <Link href="/">
        <h1 className="font-bold text-[32px] font-integral -mt-[6px]">
          SHOP.CO
        </h1>
      </Link>

      <ul className="hidden md:flex items-center gap-4 flex-wrap">
        <li>
          <Dropdown />
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      <div className="relative w-full max-w-[577px] flex-grow">
        <input
          className="w-full h-[47px] bg-[#F0F0F0] rounded-[62px] pl-14 pr-5 focus:outline-none focus:border-black"
          placeholder="Search for products..."
          type="search"
        />
        <Image className="absolute -mt-9 ml-5" src={Search} alt="search" />
      </div>

      <div className="w-full max-w-[100px] flex items-center gap-4 not-: relative">
        <Link href="/cart">
          <Image src={Basket} alt="basket" />
          {cartCount > 0 && (
            <span className="absolute top-[10px] right-[70px] w-[20px] pb-[1px] h-[20px] flex items-center justify-center bg-black text-white rounded-full text-xs">
              {cartCount}
            </span>
          )}
        </Link>
        <Image className="mt-1" src={User} alt="user" />
      </div>

      {isMenuOpen && (
        <div className="absolute top-[48px] left-0 w-full bg-white border border-gray-300 sm:hidden z-10">
          <div className="flex justify-between items-center p-2">
            <h2 className="font-bold">Menu</h2>
            <Image
              src={Close}
              alt="Close"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col items-start gap-2 p-2">
            <li>
              <Dropdown />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
