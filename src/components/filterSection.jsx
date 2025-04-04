"use client";
import Image from "next/image";
import { useState } from "react";
import Arrow from "../assets/down.svg";
import Filter from "../assets/anotherFilter.svg";
import RangeSlider from "./priceRange";
import Check from "../assets/checkWhite.svg";

const FilterSection = ({ setPriceRange, priceRange, setSelectedColor }) => {
  const [selectedColor, setColor] = useState(null);
  const handleColorSelect = (color) => {
    const newColor = selectedColor === color ? null : color;
    setColor(newColor);
    setSelectedColor(newColor);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showDressStyle, setShowDressStyle] = useState(false);

  const colors = [
    { id: 1, color: "#00C12B" },
    { id: 2, color: "#F50606" },
    { id: 3, color: "#F5DD06" },
    { id: 4, color: "#F57906" },
    { id: 5, color: "#06CAF5" },
    { id: 6, color: "#063AF5" },
    { id: 7, color: "#7D06F5" },
    { id: 8, color: "#F506A4" },
    { id: 9, color: "#FFFFFF" },
    { id: 10, color: "#000000" },
  ];

  const sizes = [
    { size: "XX-Small", width: "96px" },
    { size: "X-Small", width: "86px" },
    { size: "Small", width: "74px" },
    { size: "Medium", width: "90px" },
    { size: "Large", width: "76px" },
    { size: "X-Large", width: "89px" },
    { size: "XX-Large", width: "98px" },
    { size: "3X-Large", width: "97px" },
    { size: "4X-Large", width: "98px" },
  ];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="w-full max-w-[295px]">
      <span className="flex gap-x-3 font-satoshi font-normal text-base">
        <h5 className="text-gray-500">Home</h5>
        <Image className="-rotate-90" src={Arrow} alt="arrow" />
        <h5>Casual</h5>
      </span>
      <div className="flex flex-col border-1 border-gray-300 rounded-[20px] px-5 py-7 mt-7">
        <span className="flex justify-between py-4 border-b-1 border-gray-300">
          <h2 className="font-bold font-satoshi text-[20px]">Filters</h2>
          <Image src={Filter} alt="filter" />
        </span>
        <RangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
        <div className="border-b border-gray-300 pb-5 mb-5">
          <h4
            className="font-bold font-satoshi text-[20px] my-4 flex justify-between cursor-pointer"
            onClick={() => setShowColors(!showColors)}
          >
            Colors
            <Image
              className={`transition-transform duration-300 ${showColors ? "rotate-180" : ""}`}
              src={Arrow}
              alt="arrow"
            />
          </h4>
          {showColors && (
            <div className="grid grid-cols-5 gap-2">
              {colors.map(({ id, color }) => (
                <span
                  key={id}
                  className={`w-[37px] h-[37px] rounded-full flex justify-center items-center cursor-pointer border-1 border-gray-400 ${
                    selectedColor === color ? "border-2 border-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                >
                  {selectedColor === color && color === "#FFFFFF" && (
                    <span className="pb-1">✔️</span>
                  )}
                  {selectedColor === color && color !== "#FFFFFF" && (
                    <Image src={Check} alt="check" />
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-gray-300 pb-5 mb-5">
          <h4
            className="font-bold font-satoshi text-[20px] my-4 flex justify-between"
            onClick={() => setShowSizes(!showSizes)}
          >
            Size
            <Image
              className={`transition-transform duration-300 ${showSizes ? "rotate-180" : ""}`}
              src={Arrow}
              alt="arrow"
            />
          </h4>
          {showSizes && (
            <div className="flex flex-wrap items-center gap-3">
              {sizes.map(({ size, width }) => (
                <button
                  key={size}
                  className={`h-[39px] text-center rounded-[62px] font-satoshi font-normal text-base ${
                    selectedSize === size
                      ? "bg-[#000] text-white"
                      : "bg-[#F0F0F0] text-gray-500"
                  }`}
                  style={{ width }}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pb-4 font-satoshi font-normal text-base">
          <h4
            className="font-bold font-satoshi text-[20px] my-2 flex justify-between"
            onClick={() => setShowDressStyle(!showDressStyle)}
          >
            Dress Style
            <Image
              className={`transition-transform duration-300 ${showDressStyle ? "rotate-180" : ""}`}
              src={Arrow}
              alt="arrow"
            />
          </h4>
          {showDressStyle && (
            <>
              {["Casual", "Formal", "Party", "Gym"].map((item) => (
                <span className="flex justify-between mb-2" key={item}>
                  <h5 className="text-gray-500">{item}</h5>
                  <Image className="-rotate-90" src={Arrow} alt="arrow" />
                </span>
              ))}
            </>
          )}
        </div>
        <button className="w-[247px] h-[48px] rounded-[62px] border-1 border-slate-200 font-satoshi font-medium text-sm hover:scale-105 hover:bg-white hover:text-black text-white bg-black transition-transform duration-300">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
