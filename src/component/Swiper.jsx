import React from 'react'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function Swiper() {
    return (
        <Swiper
        pagination={true} modules={[Pagination]} className="mySwiper"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img/>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    )
}

export default Swiper
