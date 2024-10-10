import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { price, title, img } = service;
  return (
    <div className="card md:p-4 p-2 shadow-xl border-2 space-y-2 mt-5">
      <figure>
        <img src={img} alt="Shoes" className="rounded-xl h-[220px] w-full" />
      </figure>
      <div className="space-y-2 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="space-y-2  flex justify-between items-center">
          <p className="text-xl font-semibold text-[#FF3811]">
            Price: ${price}
          </p>
          <button className="btn btn-circle text-xl text-[#FF3811] font-semibold
            border-0 btn-outline">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
