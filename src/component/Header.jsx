import React from 'react'
import {Link} from 'react-router-dom';
import { SiMcdonalds } from "react-icons/si";
import Navigation from './Navigation';
import styled from 'styled-components';

function Header() {
    return (
        <HeaderContainer>
            <h1 className='logo'><Link to='/'><SiMcdonalds /></Link></h1>
            <Navigation/>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    padding: 6px 22px;
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid red;
    width: 100%;
    height: 140px;
    .logo{
        position: absolute;
        top: 0;
        left: 0;
        margin: 15px 0px 0px 365px;
        font-size: 100px;
        a{
            display: flex;
            align-items: center;
        }
        path{
            color: #FFBC0D;
        }
    }
`
