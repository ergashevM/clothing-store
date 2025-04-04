"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Right from "../assets/right.svg";
import Left from "../assets/left.svg";
import Star from "../assets/starForRating.svg";
import Check from "../assets/check.svg";

const commentsData = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
];

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + commentsData.length) % commentsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % commentsData.length);
  };

  return (
    <div className="w-full max-w-[1295px] mx-auto">
      <div className="w-full max-w-[1295px] mx-auto flex items-end justify-between mb-10">
        <h3 className="font-bold text-[48px] font-integral text-center md:text-left bg-gradient-to-r from-black to-white bg-clip-text text-transparent animate-gradient">
          OUR HAPPY CUSTOMERS
        </h3>
        <span className="flex items-center justify-center gap-x-3">
          <button onClick={handlePrev}>
            <Image src={Left} alt="left" />
          </button>
          <button onClick={handleNext}>
            <Image src={Right} alt="right" />
          </button>
        </span>
      </div>
      <div className="w-full max-w-[1440px] h-auto flex flex-wrap items-center justify-between gap-4 mb-14">
        {commentsData.map((comment, index) => (
          <div
            key={index}
            className={`w-full sm:max-w-[300px] md:max-w-[400px] h-auto flex flex-col justify-between border border-slate-200 rounded-[20px] pt-8 pb-10 px-5 gap-y-2 transition-transform duration-500 ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
          >
            <span className="flex gap-x-2">
              {Array.from({ length: comment.stars }).map((_, starIndex) => (
                <Image key={starIndex} src={Star} alt="star" />
              ))}
            </span>
            <span className="flex gap-x-1">
              <h5 className="font-bold font-satoshi text-[20px]">
                {comment.name}
              </h5>
              <Image src={Check} alt="check" />
            </span>
            <p className="font-normal text-base font-satoshi text-gray-500">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
