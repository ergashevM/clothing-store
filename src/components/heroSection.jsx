import Star from "@/assets/star.svg";
import Models from "@/assets/models.png";
import OtherImage from "@/assets/other.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between bg-[#F2F0F1] lg:pl-25 lg:pr-10 lg:gap-x-10 h-auto lg:max-h-[663px] overflow-hidden">
      <div className="w-full max-w-[680px]">
        <h1 className="font-bold text-[32px] lg:text-[64px] font-integral leading-10 lg:leading-15 mb-8 bg-gradient-to-r from-black to-white bg-clip-text text-transparent animate-gradient">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-base font-normal font-satoshi text-black  text-opacity-60 mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed <br /> to bring out your individuality and cater to your
          sense of style.
        </p>
        <button className="w-full max-w-[210px] h-[52px] bg-black text-white rounded-[62px] font-satoshi font-medium text-base mb-15 mx-auto lg:mx-0 hover:scale-125 hover:bg-white hover:text-black hover:border-black hover:border-1 transition-transform duration-300">
          Shop Now
        </button>
        <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-6">
          <div className="lg:border-slate-400 sm:border-0 md:border-0 lg:border-r-[1px] pr-8 text-center">
            <h4 className="font-bold text-[40px] font-satoshi]">200+</h4>
            <p className="font-normal text-base font-satoshi">
              international Brands
            </p>
          </div>
          <div className="lg:border-slate-400 sm:border-0 md:border-0 lg:border-r-[1px] pr-8 text-center">
            <h4 className="font-bold text-[40px] font-satoshi]">2,000+</h4>
            <p className="font-normal text-base font-satoshi">
              High-Quality Products
            </p>
          </div>
          <div className="text-center pr-8">
            <h4 className="font-bold text-[40px] font-satoshi]">30,000+</h4>
            <p className="font-normal text-base font-satoshi">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-[680px] lg:pt-65 pt-10">
        <Image
          className="w-full h-full object-cover lg:hidden"
          src={OtherImage}
          alt="other"
        />
        <Image
          className="hidden lg:block w-full h-full object-cover"
          src={Models}
          alt="models"
        />
        <Image
          className=" absolute lg:bottom-1/2 left-10 w-full max-w-[56px]"
          src={Star}
          alt="star"
        />
        <Image
          className="absolute lg:bottom-180 right-10 w-full max-w-[104px]"
          src={Star}
          alt="star"
        />
      </div>
    </div>
  );
};

export default HeroSection;
