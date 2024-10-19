import React from "react";
import TopBanner from "../../Components/Top_Banner/TopBanner";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const service = useLoaderData();
  const { price, description, image, serviceName, serviceProvider, _id } =
    service;

  return (
    <div>
      <TopBanner title={"Service Details"} path={"Home/Service/Details"} />

      <div className="card md:card-side items-center bg-base-100 shadow-xl my-10">
        <figure className="md:w-1/2">
          <img src={image} alt="Album" />
        </figure>
        <div className="md:p-10 p-5 md:w-1/2 space-y-4">
          <h2 className="md:text-4xl text-2xl font-bold text-center">
            All About Your Service
          </h2>
          <h2 className="card-title">
            <span className="font-bold text-[#FF3811]">Title:</span>
            {serviceName}{" "}
          </h2>
          <p>
            <span className="font-bold text-[#FF3811]">Description:</span>
            {description}.
          </p>
          <p>
            <span className="font-bold text-[#FF3811]">Service Provider:</span>
            {serviceProvider}.
          </p>
          <h2 className="card-title">
            <span className="font-bold text-[#FF3811]">Price:</span>
            {price} $
          </h2>

          <div className="card-actions justify-center">
            <Link to={`/book/${_id}`}>
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

export default Details;
