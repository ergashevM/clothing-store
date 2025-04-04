import Image from "next/image";
import Link from "next/link";
import Star from "../assets/starForRating.svg";
import HalfStar from "../assets/halfStar.svg";
import database from "@/components/database";

const AlsoLikeYou = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-15 lg:pl-18 mb-15">
      <h1 className="font-bold text-[48px] font-integral text-center mt-20 mb-15 bg-gradient-to-r from-black to-white bg-clip-text text-transparent animate-gradient">
        You might also like
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {database.slice(8, 12).map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <div className="transition-transform duration-500 hover:scale-110 cursor-pointer">
              <Image
                src={product.productImage}
                alt={product.productname}
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-y-2 py-4">
                <h3 className="font-satoshi font-bold text-[20px]">
                  {product.productname}
                </h3>
                <span className="flex gap-x-2">
                  {Array.from({
                    length: Math.floor(parseFloat(product.stink)),
                  }).map((_, index) => (
                    <Image
                      width={18}
                      height={18}
                      key={index}
                      src={Star}
                      alt="star"
                    />
                  ))}
                  {product.stink.includes(".5") && (
                    <Image
                      width={8}
                      height={16}
                      src={HalfStar}
                      alt="half star"
                    />
                  )}
                  <p className="font-satoshi text-sm font-normal text-black ml-2">
                    {product.stink}
                  </p>
                </span>
                <div className="flex items-center gap-x-4">
                  <p className="font-satoshi font-bold text-[24px]">
                    ${product.price.current}
                    {product.price.old && (
                      <span className="text-gray-500 line-through ml-4">
                        {product.price.old}
                      </span>
                    )}
                  </p>
                  {product.percent && (
                    <span className="w-[58px] h-[28px] bg-red-200 bg-opacity-10 flex items-center justify-center text-red-500 font-satoshi text-[12px] font-medium rounded-[62px]">
                      ${product.percent}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlsoLikeYou;
