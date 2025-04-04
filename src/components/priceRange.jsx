"use client";
import React from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Arrow from "../assets/down.svg";

const RangeSlider = ({ priceRange, setPriceRange }) => {
  const [showPrice, setShowPrice] = React.useState(false);

  const rangeSelector = (event, newValue) => {
    setPriceRange(newValue);
  };

  const togglePriceDisplay = () => {
    setShowPrice(!showPrice);
  };

  return (
    <div style={{ margin: "auto", display: "block", width: "fit-content" }}>
      <span
        className="w-[250px] flex justify-between my-4 border-b border-gray-300 pb-4"
        onClick={togglePriceDisplay}
      >
        <h3 className="font-bold font-satoshi text-[20px]">Price</h3>
        <Image
          className={`transition-transform duration-300 ${showPrice ? "-rotate-180" : ""}`}
          src={Arrow}
          alt="arrow"
        />
      </span>
      {showPrice && (
        <>
          <Slider
            value={priceRange}
            onChange={rangeSelector}
            valueLabelDisplay="off"
            min={0}
            max={300}
            sx={{
              color: "black",
              "& .MuiSlider-track": {
                backgroundColor: "black",
              },
              "& .MuiSlider-thumb": {
                backgroundColor: "black",
              },
            }}
          />
          <div className="w-[250px] flex justify-between pb-4 border-b-1 border-gray-300">
            <span className="font-satoshi text-md font-medium my-2">${priceRange[0]}</span>
            <span className="font-satoshi text-md font-medium my-2">${priceRange[1]}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default RangeSlider;
