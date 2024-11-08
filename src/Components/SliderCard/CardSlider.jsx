import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import UseDataFetch from '../../Hooks/UseDataFetch';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const CardSlider = () => {
  const experts = UseDataFetch('/expert.json');

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
      {experts?.map((expert) => (
        <SwiperSlide key={expert._id}>
          <div className="p-5 bg-base-100 border-2 rounded-xl">
            <figure>
              <img
                src={expert?.image}
                alt="Expert"
                className="rounded-xl w-full h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-3xl font-bold">{expert?.name}</h2>
              <p className="text-[#737373] font-semibold text-2xl">{expert?.expertIn}</p>
              <div className="flex gap-5 items-center">
                <a href={expert?.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl font-bold text-blue-800" />
                </a>
                <a href={expert?.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl font-bold text-[#ed4265]" />
                </a>
                <a href={expert?.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl font-bold text-[#0a66c2]" />
                </a>
                <a href={expert?.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-3xl font-bold text-[#55abed]" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
