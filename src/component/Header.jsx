import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { SiMcdonalds } from "react-icons/si";
import Navigation from './Navigation';
import styled from 'styled-components';
import Util from './Util';
import { googleLogOut, googleLogin, onUserState } from '../api/firebase';
import UserData from './UserData';


function Header() {
    const [user, setUser] = useState();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth <= 1280);
        };

        window.addEventListener('resize', handleResize);
        return()=> window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    const handleSubMenuToggle = () => {
        setSubMenuOpen(prevSubMenuOpen => !prevSubMenuOpen);
    };

    const login = ()=>{
        googleLogin().then(setUser);
    }
    const logOut = ()=>{
        googleLogOut().then(setUser);
    }

    useEffect(()=>{
        onUserState((user)=>{
            setUser(user);
        })
    },[])
    
    return (
        <HeaderContainer>
            <h1 className='logo'><Link to='/'><SiMcdonalds /></Link></h1>
            
            {isMobile && (
                <NavigationIcon className='hamburger-menu' onClick={handleMenuToggle}>
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} />
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} />
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} />
                </NavigationIcon>
            )}

            {!isMobile || menuOpen ? (
                <Navigation isMobile={isMobile} subMenuOpen={subMenuOpen} handleSubMenuToggle={handleSubMenuToggle} />
            ) : null}
            
            <Util/>
            
            <div className='userWrap'>
                {user && user.isAdmin &&
                <Link to='/product/upload' className='uploadBtn'>업로드</Link>
                }
                {user ? (
                    <>
                    <UserData user={user}/>
                    <button className='logOutBtn' onClick={logOut}>logout</button>
                    </>
                ) : (
                    <button className='loginBtn' onClick={login}>login</button>
                )}
            </div>

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
    width: 100%;
    height: 108px;
    border-bottom: 1px solid #ccc;
    z-index: 99;
    .logo{
        position: absolute;
        top: 0;
        left: 0;
        margin: 0px 61px;
        font-size: 108px;
        a{
            display: flex;
            align-items: center;
        }
        path{
            color: #FFBC0D;
        }
    }
    
    .userWrap{
        display: flex;
        margin-left: auto;
        padding-right: 61px;
        align-items: center;
        gap: 12px;
        button{
            padding: 6px 12px;
            border-radius: 6px;
            &.loginBtn{
                background: #FFBC0D;
            }
            &.logOutBtn{
                background: gray;
            }
        }
    }

    @media (max-width: 1280px){
        padding: 20px;
        width: 100%;
        .logo{
            top: 10px;
            left: 0;
            font-size: 88px;
        }
        .userwrap{
            display: none;
        }
    }
`

const NavigationIcon = styled.div`
    width: 25px;
    height: 25px;
    top: 50%;
    right: 25px;  
    cursor: pointer;
    position: absolute;
    z-index: 9999;

    /* Style for the three lines of the hamburger icon */
    .menu-icon {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.3s ease;
        

        &:first-child {
            transform: translateY(7px);
        }

        &:last-child {
            transform: translateY(-7px);
        }

        /* Rotate lines to form an X when menu is open */
        &.open {
            background: #fff;
            &:first-child {
                transform: rotate(45deg) translateY(0px);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:last-child {
                transform: rotate(-45deg) translateY(-0px);
            }
        }
    }
`