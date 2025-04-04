import React, { useState } from "react";
import Image from "next/image";
import Filter from "../assets/filter.svg";
import Down from "../assets/down.svg";
import Star from "../assets/starForRating.svg";
import HalfStar from "../assets/halfStar.svg";
import Check from "../assets/check.svg";
import Settings from "../assets/settings.svg";

const Reviews = () => {
  const [activeButton, setActiveButton] = useState("reviews");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const commentsData = [
    {
      name: "Samantha D.",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      images: {
        stars: 4,
        halfStar: 1,
      },
      data: "Posted on August 14, 2023",
    },
    {
      name: "Liam K.",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      images: {
        stars: 4,
        halfStar: null,
      },
      data: "Posted on August 18, 2023",
    },
    {
      name: "Ethan R.",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      images: {
        stars: 3,
        halfStar: 1,
      },
      data: "Posted on August 16, 2023",
    },
    {
      name: "Olivia P.",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      images: {
        stars: 4,
        halfStar: null,
      },
      data: "Posted on August 17, 2023",
    },
    {
      name: "Alex M.",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      images: {
        stars: 4,
        halfStar: null,
      },
      data: "Posted on August 15, 2023",
    },
    {
      name: "Ava H.",
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      images: {
        stars: 4,
        halfStar: 1,
      },
      data: "Posted on August 19, 2023",
    },
  ];

  return (
    <div>
      <div className="w-full max-w-[1240px] h-auto mx-auto flex flex-col mt-10 font-satoshi text-[16px] lg:text-[20px]">
        <div className="flex flex-wrap justify-between w-full">
          <button
            className={`w-full sm:w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.5rem)] rounded-[2px] border-b-2 ${
              activeButton === "details" ? "border-b-black" : "border-slate-300"
            } pb-3 mb-2 lg:mb-0`}
            onClick={() => handleButtonClick("details")}
          >
            Product Details
          </button>
          <button
            className={`w-full sm:w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.5rem)] rounded-[2px] border-b-2 ${
              activeButton === "reviews" ? "border-b-black" : "border-slate-300"
            } pb-3 mb-2 lg:mb-0`}
            onClick={() => handleButtonClick("reviews")}
          >
            Rating & Reviews
          </button>
          <button
            className={`w-full sm:w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.5rem)] rounded-[2px] border-b-2 ${
              activeButton === "faqs" ? "border-b-black" : "border-slate-300"
            } pb-3 mb-2 lg:mb-0`}
            onClick={() => handleButtonClick("faqs")}
          >
            FAQs
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1240px] h-auto mx-auto flex flex-col lg:flex-row items-start justify-between mt-8">
        <h3 className="font-bold text-[20px] lg:text-[24px] font-satoshi mb-2 lg:mb-0">
          All Reviews
          <span className="font-normal text-base text-gray-500 ml-2">
            (451)
          </span>
        </h3>
        <div className="flex gap-3 items-center">
          <Image src={Filter} alt="filter" className="h-[48px] w-[48px]" />
          <button className="w-[120px] h-[48px] flex gap-x-2 items-center justify-center rounded-[62px] bg-[#F0F0F0] font-satoshi text-base font-medium">
            Latest
            <Image src={Down} alt="down" className="h-5 w-5" />
          </button>
          <button className="w-[166px] h-[48px] flex gap-x-2 items-center justify-center rounded-[62px] text-white bg-[#000] font-satoshi text-base font-medium">
            Write a Review
          </button>
        </div>
      </div>
      <div className="w-full max-w-[1245px] h-auto mx-auto flex flex-wrap items-center justify-between gap-4 mt-10">
        {commentsData.map((comment, index) => (
          <div
            key={index}
            className={`w-full sm:max-w-[300px] md:max-w-[610px] h-auto flex flex-col justify-between border border-slate-200 rounded-[20px] pt-8 pb-10 px-5 gap-y-2 transition-transform duration-500`}
          >
            <span className="flex justify-between items-center">
              <span className="flex">
                {[...Array(comment.images.stars)].map((_, i) => (
                  <Image key={`star-${index}-${i}`} src={Star} alt="star" />
                ))}
                {comment.images.halfStar && (
                  <Image src={HalfStar} alt="half-star" />
                )}
              </span>
              <Image src={Settings} alt="settings" />
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
            <p className="font-medium text-base font-satoshi text-gray-500">
              {comment.data}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="w-[218px] h-[52px] rounded-[62px] border-1 border-slate-300 font-satoshi font-medium text-base hover:scale-125 hover:bg-black hover:text-white hover:border-white transition-transform duration-300 my-10">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
