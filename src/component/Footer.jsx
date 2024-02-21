import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer>
            <List>
            <ul className='fUtil'>
                <li><Link to='https://www.mcdonalds.co.kr/kor/etc/private.do' target="_blank">개인정보 처리방침</Link></li>
                <li><Link to='https://www.mcdonalds.co.kr/kor/etc/location.do' target="_blank">위치정보 이용약관</Link></li>
                <li><Link to='https://www.mcdonalds.co.kr/kor/etc/sitemap.do' target="_blank">사이트맵</Link></li>
                <li><Link to='https://www.mcdonalds.co.kr/kor/store/rental.do' target="_blank">임차문의</Link></li>
                <li><Link to='https://voc.mcd.co.kr/MC/HOM/faqMain.jsp' target="_blank">고객문의</Link></li>
                <li><Link to='https://www.mcdonalds.co.kr/kor/story/people/recruit.do' target="_blank">인재채용</Link></li>
            </ul>
            
            <ul className='fSNS'>
                <li><Link to='https://www.facebook.com/McDonaldsKorea' target="_blank"><FaFacebook /></Link></li>
                <li><Link to='https://www.instagram.com/mcdonalds_kr/' target="_blank"><FaInstagram /></Link></li>
                <li><Link to='https://www.youtube.com/user/McDonaldsKor' target="_blank"><FaYoutube /></Link></li>
                <li><Link to='https://story.kakao.com/ch/mcdonalds/feed' target="_blank"><SiKakaotalk /></Link></li>
            </ul>

            <ul className='fInfo'>
                <li>한국맥도날드(유)</li>
                <li>대표이사: 김기원</li>
                <li>사업자등록번호: 101-81-26409</li>
                <li>전화주문: 1600-5252</li>
                <li>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</li>
            </ul>
            </List>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    color: #fff;
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
    background: #292929;
    margin-top: auto;
    padding-bottom: 30px;
    @media (max-width:1024px){
        padding-bottom: 0;
    }
`
const List = styled.div`
    width: 1168px;
    margin: 0 auto;
    padding: 45px 0 55px;
    text-align: left;

    .fUtil{
        float: left;
        width: 190px;
        a{
            color:#fff;
        }
    }
    .fSNS{
        float: right;
        li{
            float: left;
            font-size: 40px;
            margin-left: 20px;
        }
    }
    .fInfo{
        float: left;
        font-weight: 400;
        opacity: .6;
    }
    @media (max-width: 1280px){
        width: 91.25%;  
    }
    @media (max-width: 1024px){
        padding: 35px 0 45px;
        .fUtil{
            display: none;
        }
        .fSNS{
            float: none;
            display: table;
            margin: 0 auto;
        }
        .fInfo{
            float: none;
            display: flex;
            li{
                font-size: 12px;
                margin-left: 10px;
            }
        }
    }
    @media (max-width:768px){
        padding: 25px 0 35px;
        .fInfo{
            display: block;
            margin-top: 15px;
        }
        .fSNS{
            li{
                font-size: 35px;
            }
        }
    }
`