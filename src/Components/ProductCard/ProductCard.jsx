import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { productName, rating, image, price, _id } = product;
  return (
    <div className="card md:p-4 p-2 shadow-xl border-2 space-y-2 mt-5">
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
          <button className="p-3 text-[#FF3811] border-2 rounded absolute top-4 right-4 text-xl hover:bg-[#FF3811] hover:text-white ">
            <FaShoppingBag></FaShoppingBag>
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
