import React from "react";
import img from "../../assets/images/checkout/checkout.png";

const TopBanner = ({title,path}) => {
  return (
    <div className="relative">
      <img className="w-full" src={img} alt="Banner" />

      <h1 className="text-white absolute inset-0 flex items-center font-bold md:text-5xl text-2xl md:left-10 left-5">
        {title}
      </h1>

      <div
        className="bg-[#FF3811] text-white font-semibold text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 md:px-10 px-5 py-1 md:py-2 text-xl "
        style={{
          clipPath: "polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)",
        }}
      >
       {path}
      </div>
    </div>
  );
};

export default TopBanner;
