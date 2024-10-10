import React from "react";

const TitleSubTitle = ({ heading, title, message }) => {
  return (
    <div className="flex justify-center text-center lg:w-2/5 md:w-1/2 mx-auto">
      <div className="space-y-3">
        <h6 className="text-[#FF3811] font-bold text-xl">{heading}</h6>
        <h1 className="font-bold md:text-5xl text-3xl">{title}</h1>
        <p className="text-[#737373]">{message}</p>
      </div>
    </div>
  );
};

export default TitleSubTitle;
