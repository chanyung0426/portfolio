import React, { useEffect } from 'react'
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styled from 'styled-components';
import img01 from '../img/swiper01.jpg';
import img02 from '../img/swiper02.jpg';
import img03 from '../img/swiper03.jpg';
import img04 from '../img/swiper04.jpg';
import img05 from '../img/swiper05.jpg';
import MainInner from '../component/MainInner';


function MySwiper() {

    useEffect(()=>{
        const mySwiper = new Swiper('.swiper-container', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            autoHeight: true,
        });

        return ()=>{
            mySwiper.destroy();
        };
    }, []);

    return (
        <MainContainer>
            <SwiperContainer> 
             <div className='swiper-container'>
                <div className='swiper-wrapper'>
                    <div className="swiper-slide">
                        <img src={img01} alt='slide01'/> 
                    </div>
                    <div className="swiper-slide">
                        <img src={img02} alt='slide02'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={img03} alt='slide03'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={img04} alt='slide04'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={img05} alt='slide05'/>
                    </div>
                </div>
                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>
                <div className='swiper-pagination'></div>
             </div>
            </SwiperContainer>

            <MainInner/>
        </MainContainer>
    )
}

export default MySwiper

const MainContainer = styled.div`
    @media (max-width: 1024px){
        width: 100%;
    }
`
const SwiperContainer = styled.div`
    position: relative;
    top: 108px;
    left: 0;
    margin: 0 auto;
    max-width: 1900px;

    .swiper-container {
        overflow: hidden;
        width: 100%;
        position: relative;

        .swiper-wrapper {
            display: flex;
            transition: transform 0.3s ease-in-out;

            .swiper-slide {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
          
            cursor: pointer;

            &:after {
                font-size: 20px;
                color: #333;
            }
        }

        .swiper-pagination {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;

            .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                margin: 0 5px;
                border-radius: 50%;
                background-color: #888;
                cursor: pointer;

                &.swiper-pagination-bullet-active {
                    background-color: #333;
                }
            }
        }
    }
`;
