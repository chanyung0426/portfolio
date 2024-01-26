import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../page/Menu';
import Store from '../page/Store';
import WhatsNew from '../page/WhatsNew';
import Story from '../page/Story';

function Navigation() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    
    return (
        <Nav>
            <ul>
                <li onMouseEnter={()=>setDropdownOpen(true)}
                    onMouseLeave={()=>setDropdownOpen(false)}>
                        <Link to={`/products/버거`}><span>MENU</span></Link>
                     {isDropdownOpen && (
                        <ul className='subMenu'>    
                            <li><Menu/></li>
                        </ul>
                     )}
                </li>
                <li onMouseEnter={()=>setDropdownOpen(true)}
                    onMouseLeave={()=>setDropdownOpen(false)}>
                    <Link to='/store/find'><span>STORE</span></Link>
                    {isDropdownOpen && (
                        <ul className='subMenu'>
                            <li><Store/></li>
                        </ul>
                     )}
                </li>
                <li onMouseEnter={()=>setDropdownOpen(true)}
                    onMouseLeave={()=>setDropdownOpen(false)}>
                    <Link to='/new/promotion'><span>WHAT'S NEW</span></Link>
                    {isDropdownOpen && (
                        <ul className='subMenu'>
                            <li><WhatsNew/></li>
                        </ul>
                     )}
                </li>
                <li onMouseEnter={()=>setDropdownOpen(true)}
                    onMouseLeave={()=>setDropdownOpen(false)}>
                    <Link to='/story/brand'><span>STORY</span></Link>
                    {isDropdownOpen && (
                        <ul className='subMenu'>
                            <li><Story/></li>
                        </ul>
                     )}
                </li>
                <li >
                    <Link to='/searchresult'>검색</Link>
                </li>
            </ul>
        </Nav>
    )
}


export default Navigation

const Nav = styled.nav`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: 600;
    li{
        display: inline-block;
        position: relative;
        width: 130px;
        height: 100%;
        text-align: center;
        &:hover{
            ul{
                display: block;
                width: 100%;
            }
        }
        ul{
            display: none;
            position: absolute;
            top: 62px;
            left: 0;
            background: #fff;
            border-top: 3px solid gold;
            li{
                padding: 25px 0px 35px;
                
            }
        }
    }
}


`