import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';

import UseDataFetch from "../../Hooks/UseDataFetch";
const Reviews = () => {
  const reviews = UseDataFetch("/reviews.json");
  console.log(reviews);

  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return (
    <Swiper {...params}>
    {reviews?.map((review, index) => (
      <div
        key={index}
        className="h-96 w-80 bg-cover bg-center flex items-center justify-center p-4 text-white"
        style={{ backgroundImage: `url(${review.imageUrl})` }}
      >
        <div className="bg-black bg-opacity-60 p-4 rounded-lg text-center">
          <h2 className="text-lg font-bold mb-2">{review.name}</h2>
          <p className="mb-2">{review.reviewText}</p>
          <p className="text-yellow-400">Rating: {review.rating} / 5</p>
        </div>
      </div>
    ))}
  </Swiper>
  );
};

export default Reviews;
