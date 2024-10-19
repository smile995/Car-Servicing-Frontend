import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import TopBanner from "../../Components/Top_Banner/TopBanner";
import Rating from "../../Components/Rating/Rating";

const ProductDetails = () => {
  const product = useLoaderData();
  const {productName, price,image,category,description,rating,stock,_id}=product
  console.log(product);

  return (
    <div>
      <TopBanner title={"Product Details"} path={"Home/product"} />
      <div className="card md:card-side items-center bg-base-100 shadow-xl my-10">
        <figure className="md:w-1/2">
          <img src={image} alt="Album" />
        </figure>
        <div className="md:p-10 p-5 md:w-1/2 space-y-4">
          <h2 className="md:text-4xl text-2xl font-bold text-center">
            All About Our product
          </h2>
          <h2 className="card-title">
            <span className="font-bold text-[#FF3811]">Rating:</span>
            <Rating rating={rating}></Rating>
          </h2>
          <h2 className="card-title">
            <span className="font-bold text-[#FF3811]">Title:</span>
            {productName}
          </h2>
          <p>
            <span className="font-bold text-[#FF3811]">Description:</span>
            {description}.
          </p>
          <p>
            <span className="font-bold text-[#FF3811]">Stock:</span>
            {stock}.
          </p>
          <p>
            <span className="font-bold text-[#FF3811]">Category:</span>
            {category}.
          </p>
          <p>
            <span className="font-bold text-[#FF3811]">Price:</span>
            $ {price}
          </p>
          
          
          

          <div className="card-actions justify-center">
            <Link to={`/order/product/${_id}`}>
              <button
                className="btn btn-block bg-[#FF3811] hover:btn-outline btn-error text-xl text-white  
                 font-semibold "
              >
                {" "}
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
