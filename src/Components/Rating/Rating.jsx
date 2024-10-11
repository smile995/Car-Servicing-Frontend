import React from "react";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // Half star if rating has a decimal part
  const totalStars = 5; // Total stars

  return (
    <div className="flex justify-center items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <span key={index} className="text-yellow-500 text-3xl">★</span>
      ))}
      {halfStar && <span className="text-yellow-500 text-3xl">☆</span>}
      {Array.from({ length: totalStars - fullStars - (halfStar ? 1 : 0) }).map((_, index) => (
        <span key={index} className="text-gray-300 text-4xl">☆</span>
      ))}
    </div>
  );
};

export default Rating;
