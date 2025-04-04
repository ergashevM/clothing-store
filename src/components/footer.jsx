import Image from "next/image";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Visa from "../assets/visa.svg";
import Mastercard from "../assets/mastercard.svg";
import Paypal from "../assets/paypal.svg";
import IphonePay from "../assets/iphonePay.svg";
import GooglePay from "../assets/googlePay.svg";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-end lg:h-[470px] bg-[#F0F0F0] lg:pl-35 lg:pr-10">
      <div className="w-full max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-slate-300 pb-10 pt-25">
        <div className="w-full max-w-[248px] h-auto flex flex-col justify-between lg:h-[177px] mb-5 lg:mb-0">
          <h1 className="font-bold text-[32px] font-integral -mt-[6px]">
            SHOP.CO
          </h1>
          <p className="font-satoshi font-normal text-sm text-gray-500 my-5 lg:my-0">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <span className="flex gap-x-3">
            <Image
              className="hover:scale-130 transition-transform duration-300"
              src={Twitter}
              alt="twitter"
            />
            <Image
              className="hover:scale-130 transition-transform duration-300"
              src={Facebook}
              alt="facebook"
            />
            <Image
              className="hover:scale-130 transition-transform duration-300"
              src={Instagram}
              alt="instagram"
            />
            <Image
              className="hover:scale-130 transition-transform duration-300"
              src={Github}
              alt="github"
            />
          </span>
        </div>

        <ul className="w-full max-w-[104px] h-auto lg:h-[177px] flex flex-col justify-between leading-[19px] font-satoshi font-normal text-base flex-grow min-h-[177px] mb-5 lg:mb-0">
          <li className="font-medium uppercase">company</li>
          <li className="text-gray-500">About</li>
          <li className="text-gray-500">Features</li>
          <li className="text-gray-500">Works</li>
          <li className="text-gray-500">Career</li>
        </ul>

        <ul className="w-full max-w-[136px] h-auto lg:h-[177px] flex flex-col justify-between leading-[19px] font-satoshi font-normal text-base flex-grow min-h-[177px] mb-5 lg:mb-0">
          <li className="font-medium uppercase">help</li>
          <li className="text-gray-500">Customer Support</li>
          <li className="text-gray-500">Delivery Details</li>
          <li className="text-gray-500">Terms & Conditions</li>
          <li className="text-gray-500">Privacy Policy</li>
        </ul>

        <ul className="w-full max-w-[149px] h-auto lg:h-[177px] flex flex-col justify-between leading-[19px] font-satoshi font-normal text-base flex-grow min-h-[177px] mb-5 lg:mb-0">
          <li className="font-medium uppercase">faq</li>
          <li className="text-gray-500">Account</li>
          <li className="text-gray-500">Manage Deliveries</li>
          <li className="text-gray-500">Orders</li>
          <li className="text-gray-500">Payments</li>
        </ul>

        <ul className="w-full max-w-[248px] h-auto lg:h-[177px] flex flex-col justify-between leading-[19px] font-satoshi font-normal text-base flex-grow min-h-[177px]">
          <li className="font-medium uppercase">resources</li>
          <li className="text-gray-500">Free eBooks</li>
          <li className="text-gray-500">Development Tutorial</li>
          <li className="text-gray-500">How to - Blog</li>
          <li className="text-gray-500">Youtube Playlist</li>
        </ul>
      </div>

      <div className="w-full max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row items-center justify-between mt-5 pb-10">
        <p className="font-satoshi text-sm font-normal text-gray-500">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <span className="flex gap-x-3 mt-3 lg:mt-0">
          <Image
            className="hover:scale-120 transition-transform duration-300"
            src={Visa}
            alt="visa"
          />
          <Image
            className="hover:scale-120 transition-transform duration-300"
            src={Mastercard}
            alt="mastercard"
          />
          <Image
            className="hover:scale-120 transition-transform duration-300"
            src={Paypal}
            alt="paypal"
          />
          <Image
            className="hover:scale-120 transition-transform duration-300"
            src={IphonePay}
            alt="iphone pay"
          />
          <Image
            className="hover:scale-120 transition-transform duration-300"
            src={GooglePay}
            alt="google pay"
          />
        </span>
      </div>
    </div>
  );
};

export default Footer;
