import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

function Navigation() {
    return (
        <Nav>
            <ul>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/store'>STORE</Link></li>
                <li><Link to='/new'>WHAT'S NEW</Link></li>
                <li><Link to='/story'>STORY</Link></li>
            </ul>
        </Nav>
    )
}

export default Navigation

const Nav = styled.nav`
border: 1px solid #000;
margin: 0 auto;
    ul{
        display: flex;
        gap: 100px;
        align-items: center;
        li{
            list-style: none;
            a{
                
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
`
