import React, { useEffect } from 'react'
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styled from 'styled-components';

import best01 from '../img/best01.png';
import best02 from '../img/best02.png';
import best03 from '../img/best03.png';
import best04 from '../img/best04.png';
import best05 from '../img/best05.png';
import best06 from '../img/best06.png';
import best07 from '../img/best07.png';

function MenuSwiper() {

    
    useEffect(()=>{
        const mySwiper = new Swiper('.swiper-container', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 5,
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
        });

        return ()=>{
            mySwiper.destroy();
        };
    }, []);

    return (
        <div>
            <h2>Best Menu</h2>
            <SwiperMenu>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                            <img src={best01} alt='bestmenu01'/>
                        </div>
                        <div className='swiper-slide'>
                           <img src={best02} alt='bestmenu01'/>
                        </div>
                        <div className='swiper-slide'>
                            <img src={best03} alt='bestmenu03'/>
                        </div>
                        <div className='swiper-slide'>
                            <img src={best04} alt='bestmenu04'/>
                        </div>
                        <div className='swiper-slide'>
                            <img src={best05} alt='bestmenu05'/>
                        </div>
                        <div className='swiper-slide'>
                            <img src={best06} alt='bestmenu06'/>
                        </div>
                        <div className='swiper-slide'>
                            <img src={best07} alt='bestmenu07'/>
                        </div>
                    </div>
                </div>
            </SwiperMenu>
        </div>
    )
}

export default MenuSwiper

const SwiperMenu = styled.div`
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
                    width: 330px;
                    height: auto;
                }
            }
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            cursor: pointer;

            &:after {
                font-size: 20px;
                color: #333;
            }
        }

        .swiper-button-next {
            right: 10px;
            &:after {
                content: '>';
            }
        }

        .swiper-button-prev {
            left: 10px;
            &:after {
                content: '<';
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