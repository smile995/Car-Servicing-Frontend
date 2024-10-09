import React from "react";

const ServicesCard = ({ service }) => {

const {price,title,img}=service
  return (
    <div className="card md:p-5 p-2 shadow-xl">
      <figure >
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-[220px] w-full"
        />
      </figure>
      <div className="mt-2 ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-2 flex justify-between items-center">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
