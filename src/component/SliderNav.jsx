import React, { useState } from 'react'
import Menu from '../page/Menu';
import Store from '../page/Store';
import WhatsNew from '../page/WhatsNew'
import Story from '../page/Story';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SliderNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <Nav className={`slider-nav ${isOpen ? 'open' : ''}`}>
            <div className='menu-toggle' onClick={toggleMenu}>
                <div className='hamburger-icon'></div>
            </div>
            <ul className='nav-links'>
            <li>
                <Link to={`/products/버거`}><span>MENU</span><Menu/></Link>
            </li>
            <li>
                <Link to='/store/find'><span>STORE</span><Store/></Link>
            </li>
            <li>
                <Link to='/new/promotion'><span>WHAT'S NEW</span><WhatsNew/></Link>
            </li>
            <li>
                <Link to='/story/brand'><span>STORY</span><Story/></Link>   
            </li>
        </ul>    
        </Nav>
    )
}

export default SliderNav

const Nav = styled.div`
    @media (max-width: 1280px){
    position: fixed;
    width: 50%;
    height: 100%;
    background: #FFBC0D;
    left: 80%;
    padding: 60px;
    
    //navigation 메뉴
    ul{
        li{
           display: block;
           width: 500px;
           padding-bottom: 30px;
           margin-bottom: 30px;
           text-align: left;
           border-bottom: 2px solid rgba(255,255,255,0.1);
           &:hover{
            ul{
                display: none;
                width: 100%;
            }
            ul:before{
                display: none;
            }
           }
        }
    }
    span{
        color: #fff;
    }
    
}
`