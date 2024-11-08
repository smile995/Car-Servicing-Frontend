import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import UseDataFetch from '../../Hooks/UseDataFetch';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const CardSlider = () => {
    const experts= UseDataFetch('/expert.json')

    
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
    >
    {
        experts?.map(expert=>  <SwiperSlide key={expert._id}>
            <div className="p-5 bg-base-100 border-2 rounded-xl">
              <figure >
                <img
                  src={expert?.image}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">{expert?.name}</h2>
                <p className='text-[#737373] font-semibold text-2xl'>{expert?.expertIn}</p>
               <div className=' flex gap-5 items-center'>
                <FaFacebook className='block text-3xl font-bold text-blue-800'></FaFacebook>
                <FaInstagram className='block text-3xl font-bold text-[#ed4265]'></FaInstagram>
                <FaLinkedin className='block text-3xl font-bold text-[#0a66c2]'></FaLinkedin>
                <FaTwitter className='block text-3xl font-bold text-[#55abed]'></FaTwitter>
                
               </div>
              </div>
            </div>
          </SwiperSlide>)
    }

    
  
    </Swiper>
  );
};

export default CardSlider;
