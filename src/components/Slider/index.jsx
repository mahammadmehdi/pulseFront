import React from 'react'
import "./index.scss"
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    
           <Swiper
      
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className='pulseSlider'><h1 className='header'>Food and more.</h1><span className='desc'>By Chef Francis Smith</span></div></SwiperSlide>
      <SwiperSlide><div className='specialSlider'><h1 className='header'>Special Dish</h1><span className='desc'>By Chef Francis Smith</span></div></SwiperSlide>
      <SwiperSlide><div className='hygenicSlider'><h1 className='header'>Hygenic Food</h1><span className='desc'>By Chef Francis Smith</span></div></SwiperSlide>
     
      ...
    </Swiper>

  )
}

export default Slider