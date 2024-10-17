import React from "react";
import img from "../../assets/images/checkout/checkout.png";
const TopBanner = () => {
  return (
    <div className="relative  ">
      <img className="w-full " src={img} alt="" />
      <h1 className="text-white  absolute bottom-1/2 left-10 
      font-bold  text-5xl">
        Check out
      </h1>
      <button className="bg-[#FF3811] text-white font-semibold text-3xl absolute bottom-0 right-1/2 px-5 py-3 rounded-t-lg"> helllow</button>
    </div>
  );
};

export default TopBanner;
