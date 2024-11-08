import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quote from "../../assets/icons/quote.svg";
import { Pagination, Navigation } from "swiper/modules";

import UseDataFetch from "../../Hooks/UseDataFetch";
import Rating from "../Rating/Rating";
const Reviews = () => {
  const reviews = UseDataFetch("/reviews.json");
  console.log(reviews);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        // When the window is >= 320px, show 1 slide
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // When the window is >= 640px, show 2 slides
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // When the window is >= 1024px, show 3 slides
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {reviews?.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="p-5 bg-base-100 border-2 rounded-xl">
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div>
                  <img src={review.image} className="rounded-full w-12" alt="" />
                </div>
                <div>
                  <p className="text-xl font-bold">{review?.name}</p>
                  <p className="text-[#737373] font-semibold">{review?.profession}</p>
                </div>
              </div>
              <div>
                <img src={quote} className="w-10" alt="" />
              </div>
            </div>
            <div className="card-body items-center">
              <p className="text-[#737373] font-semibold ">
                {review?.message}
              </p>
              <Rating rating={review.rating}></Rating>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Reviews;
