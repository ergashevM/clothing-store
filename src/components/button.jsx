import React from "react";

const Button = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex justify-center">
      <button className="w-[218px] h-[52px] rounded-[62px] border-1 border-slate-200 font-satoshi font-medium text-base hover:scale-125 hover:bg-black hover:text-white hover:border-white transition-transform duration-300">
        View All
      </button>
    </div>
  );
};

export default Button;
