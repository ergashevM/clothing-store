"use client";
import Image from "next/image";
import { useState } from "react";

const ThumbnailImage = ({ mainImage, thumbnails, initialSelectedId = 0 }) => {
  const [selectedId, setSelectedId] = useState(initialSelectedId);
  const [currentImage, setCurrentImage] = useState(mainImage);

  const changeImage = (index) => {
    setSelectedId(index);
    setCurrentImage(thumbnails[index]);
  };

  return (
    <div className="w-full max-w-[600px] h-auto mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-[150px] flex flex-row lg:flex-col justify-between mb-4 mr-4 lg:mb-0">
        {thumbnails.map((thumb, index) => (
          <Image
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[80px] h-[80px] lg:w-full lg:h-auto max-w-[167px] max-h-[158px] overflow-hidden cursor-pointer rounded-md mb-2 lg:mb-3 ${
              selectedId === index ? "border-2 border-black rounded-xl" : ""
            }`}
            width={100}
            height={100}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
      <Image
        src={currentImage}
        alt="Main Product"
        className="w-full lg:max-w-[444px] h-auto lg:h-[540px] flex-1 rounded-[20px] object-cover"
        width={444}
        height={540}
      />
    </div>
  );
};

export default ThumbnailImage;
