import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../page/Menu';
import Store from '../page/Store';
import WhatsNew from '../page/WhatsNew';
import Story from '../page/Story';

const DropdownMenu = ({children})=>{
    return (
        <ul className='subMenu'>
            <li>{children}</li>
        </ul>
    )
}

function Navigation() {

    const [activeMenu, setActiveMenu] = useState(null);
    const timeoutRef = useRef(null); //timeout을 관리하기 위한 ref
    
    const handleMouseEnter = (menuName) => () => {
        clearTimeout(timeoutRef.current); // 이전에 설정된 timeout을 제거
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(menuName);
        }, 100); // 100ms 지연 후 메뉴 활성화
    }

    const handleMouseLeave = () =>{
        clearTimeout(timeoutRef.current); //이전에 설정된 timeout을 제거
        timeoutRef.current = setTimeout(()=>{
            setActiveMenu(null);
        }, 100); //100ms 지연 후 메뉴 비활성화
    };
    
    return (
        <Nav>
            <ul>
                <li onMouseEnter={handleMouseEnter('MENU')}
                    onMouseLeave={handleMouseLeave}>
                    <Link to={`/products/버거`}><span>MENU</span></Link>
                    {activeMenu === 'MENU' && <DropdownMenu><Menu/></DropdownMenu>}
                </li>
                <li onMouseEnter={handleMouseEnter('STORE')} 
                    onMouseLeave={handleMouseLeave}>
                    <Link to='/store/find'><span>STORE</span></Link>
                    {activeMenu === 'STORE' && <DropdownMenu><Store/></DropdownMenu>}
                </li>
                <li onMouseEnter={handleMouseEnter('WHATS_NEW')}
                    onMouseLeave={handleMouseLeave}>
                    <Link to='/new/promotion'><span>WHAT'S NEW</span></Link>
                    {activeMenu === 'WHATS_NEW' && <DropdownMenu><WhatsNew/></DropdownMenu>}
                </li>
                <li onMouseEnter={handleMouseEnter('STORY')}
                    onMouseLeave={handleMouseLeave}>
                    <Link to='/story/brand'><span>STORY</span></Link>
                    {activeMenu === 'STORY' && <DropdownMenu><Story/></DropdownMenu>}
                </li>
                <li>
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
        transition: 250ms;
        z-index: 1;
        text-align: center;
        &:hover{
            ul{
                display: block;
                width: 100%;
            }
            ul:before{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: -100%;
                left: 0px;
                transition: 250ms;
                z-index: -1;
            }
        }
        ul{
            display: none;
            position: absolute;
            top: 62px;
            left: 0;
            background: #fff;
            border-top: 3px solid gold;
            z-index: -1;
            li{
                padding: 25px 0px 35px;
            }
        }
    }
}

@media (max-width: 1280px){
    display: none;
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