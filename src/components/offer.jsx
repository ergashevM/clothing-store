import Image from "next/image";
import Email from "../assets/email.svg";

const Offer = () => {
  return (
    <div className="w-full max-w-[1240px] h-auto lg:h-[180px] mx-auto flex flex-col lg:flex-row items-center justify-around rounded-[20px] bg-black -mb-22 z-50 relative p-5">
      <div className="max-w-[551px] text-white">
        <h1 className="font-integral font-bold text-[40px] leading-[45px] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="flex flex-col gap-y-3 relative mt-5 lg:mt-0">
        <input
          className="w-full lg:w-[349px] h-[48px] rounded-[62px] font-satoshi text-base bg-white font-normal text-gray-500 pl-12 pr-5 border border-gray-300"
          type="email"
          placeholder="Enter your email address"
        />
        <Image
          src={Email}
          alt="Email Icon"
          className="absolute left-4 top-[25px] transform -translate-y-1/2 w-5 h-5"
        />
        <button className="w-full lg:w-[349px] h-[48px] font-satoshi font-medium text-base text-center bg-white rounded-[62px]">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default Offer;
