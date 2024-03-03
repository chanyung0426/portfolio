import React, { useState } from 'react'
import Menu from '../page/Menu';
import Store from '../page/Store';
import WhatsNew from '../page/WhatsNew'
import Story from '../page/Story';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SliderNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav className={`slider-nav ${isOpen ? 'open' : ''}`}>
            <ul className='nav-links'>
            <li className='category'>
                <Link to={`/products/버거`}><span>MENU</span><Menu/></Link>
            </li>
            <li className='category'> 
                <Link to='/store/find'><span>STORE</span><Store/></Link>
            </li>
            <li className='category'>
                <Link to='/new/promotion'><span>WHAT'S NEW</span><WhatsNew/></Link>
            </li>
            <li className='category'>
                <Link to='/story/brand'><span>STORY</span><Story/></Link>   
            </li>
            <li>
                <Link to='/searchresult'>검색</Link>
            </li>
        </ul>    
        </Nav>
    )
}

export default SliderNav

const Nav = styled.div`
    display: none;  

    @media (max-width: 1280px){
    display: none;
    display: block; 
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;    
    height: 100%;
    background: #FFBC0D;
    z-index: 100;

    .nav_on{
        display: block;
    }
    //navigation 메뉴
    ul{
        padding: 60px;
        li {
           display: block;
           width: 500px;
           margin-top: 80px;
           padding-bottom: 10px;
           text-align: left;
           font-size: 14px;
           font-weight: 600;
           border-bottom: 2px solid rgba(255,255,255,0.1);
           nav, div{
            display: none;
           }
        }
        span{
        display: block;
        font-size: 18px;
        color: #fff;
        }
    }
}
`