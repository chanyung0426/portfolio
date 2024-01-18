import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';    

function Swiper() {
    return (
        <Swiper>
            <SwiperSlide>Slide1</SwiperSlide>
            <SwiperSlide>Slide2</SwiperSlide>
            <SwiperSlide>Slide3</SwiperSlide>
            <SwiperSlide>Slide4</SwiperSlide>
        </Swiper>
    )
}

export default Swiper
