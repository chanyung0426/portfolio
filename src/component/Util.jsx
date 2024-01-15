import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Util() {
    return (
        <UitilContainer>
            <ul>
                <li><Link to='/renter'>임차문의</Link></li>
                <li><Link to='/recruit'>RECRUIT</Link></li>
                <li><Link to='/lang'>LANG</Link></li>
            </ul>

        </UitilContainer>
    )
}

export default Util

const UitilContainer = styled.div`
    width: 311px;
    position: absolute;
    top: 7px;
    left: 13%;
    margin-right: auto;
    /* border: 2px solid gold; */
    ul{
        display: flex;
        gap: 4px;
        margin-top: 45px;

        li{
            list-style: none;
            width: 80px;
            height: 36px;
            
        }
        li:first-child{
            background: red;
            border-radius: 48px;
            a{  
                font-size: 13px;
                font-weight: 600;
                line-height: 35px;
                text-align: center;
                padding-left: 14px;
                text-decoration: none;
                color: #fff;
            }
        }
        li:nth-child(2){
            background: #d87e00;
            border-radius: 48px;
            a{  
                font-size: 13px;
                font-weight: 600;
                line-height: 35px;
                text-align: center;
                padding-left: 15px;
                text-decoration: none;
                color: #fff;
            }
        }
        li:last-child{
            background: #264a36;
            border-radius: 48px;
            a{  
                font-size: 13px;
                font-weight: 600;
                line-height: 35px;
                text-align: center;
                padding-left: 22px;
                text-decoration: none;
                color: #fff;
            }
        }
    }
`