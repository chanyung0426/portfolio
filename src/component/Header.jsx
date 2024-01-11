import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { SiMcdonalds } from "react-icons/si";
import Navigation from './Navigation';
import styled from 'styled-components';
import Util from './Util';
import { googleLogOut, googleLogin, onUserState } from '../api/firebase';
import UserData from './UserData';
import Search from './Search';

function Header() {
    const [user, setUser] = useState();

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
    
    console.log(user)
    return (
        <HeaderContainer>
            <h1 className='logo'><Link to='/'><SiMcdonalds /></Link></h1>
            <Navigation/>
            <Util/>
            <Search/>
            
            <div className='userWrap'>
                {user && user.isAdmin &&
                <Link to='/product/upload' className='uploadBtn'>업로드</Link>
                }
                {user? (
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
    border: 2px solid red;
    width: 100%;
    height: 140px;
    .logo{
        position: absolute;
        top: 0;
        left: 0;
        margin: 15px 0px 0px 365px;
        font-size: 100px;
        /* border: 2px solid blue; */
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
        align-items: center;
        gap: 12px;
        button{
            padding: 6px 12px;
            border-radius: 6px;
            &.loginBtn{
                background: gold;
            }
            &.logOutBtn{
                background: gray;
            }
        }
    }
`
