import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css'  

import img1 from './img/swiper01.jpg';
import img2 from './img/swiper02.jpg';
import img3 from './img/swiper03.jpg';
import img4 from './img/swiper04.jpg';
import img5 from './img/swiper05.jpg';
import styled from 'styled-components';

function Swiper() {

//   const StyledSwiper = styled(Swiper)`
//   width: 100%;
//   margin: auto;

//   .swiper-pagination {
//     bottom: 10px;
//   }

//   .swiper-button-next, .swiper-button-prev {
//     color: #fff;
//   }

//   .swiper-slide {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f0f0;
//     border-radius: 8px; 
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
//     padding: 20px;
//   }

//   img {
//     max-width: 100%; 
//     height: auto;
//     border-radius: 4px; 
//   }
// `;
    return (
      <StyledSwiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}  
      scrollbar={{ draggable: true }}
      >
        <SwiperSlide><img src={img1} alt="swiper01" />01</SwiperSlide>
        <SwiperSlide><img src={img2} alt="swiper02" />02</SwiperSlide>
        <SwiperSlide><img src={img3} alt="swiper03" />03</SwiperSlide>
        <SwiperSlide><img src={img4} alt="swiper04" />04</SwiperSlide>
        <SwiperSlide><img src={img5} alt="swiper05" />05</SwiperSlide>
      </StyledSwiper>
    )
}

export default Swiper

const SwiperSlide = styled.swiper`
  width: 100%;
  margin: auto;

  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-button-next, .swiper-button-prev {
    color: #fff;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 8px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
    padding: 20px;
  }

  img {
    max-width: 100%; 
    height: auto;
    border-radius: 4px; 
  }
`