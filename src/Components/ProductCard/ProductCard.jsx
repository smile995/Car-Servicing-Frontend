import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const { productName, rating, image, price, _id } = product;
  return (
    <div className="card md:p-4 p-2 shadow-xl hover:border-y-2 border-[#FF3811] space-y-2 mt-5">
      <div className="relative">
        <div>
          <figure>
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl h-[220px] w-full"
            />
          </figure>
        </div>
        <Link to={`/product/${_id}`}>
          <button className="p-2 rounded absolute top-0 right-0  bg-[#FF3811] text-white ">
            Details
            
          </button>
        </Link>
      </div>
      <div className="space-y-2 ">
        <Rating rating={rating}></Rating>
        <h2 className="text-2xl font-bold text-center">{productName}</h2>

        <p className="text-xl text-center font-semibold text-[#FF3811]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
