import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../page/Menu';

const Navigation =()=> {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () =>{
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <Nav>
            <ul>
                <li className={`dropDown ${isDropdownOpen ? 'open' : ''}`}>
                    <div onClick={handleDropdownToggle}>
                     MENU
                    </div>
                    {isDropdownOpen && (
                        <div className='dropDownMenu'>
                                <Menu/>                   
                        </div>
                    )}
                </li>
                <li><Link to='/store'>STORE</Link></li>
                <li><Link to='/new'>WHAT'S NEW</Link></li>
                <li><Link to='/story'>STORY</Link></li>
                <li><Link to='/searchresult'>검색</Link></li>
            </ul>
        </Nav>
    )
}

export default Navigation

const Nav = styled.nav`
position: absolute;
top: 50%;
left: 50%;
/* border: 1px solid #000; */
transform: translate(-50%, -50%);

ul {
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: center;
    position: relative;
    font-weight: 600;
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropDown {
    
position: relative;
display: inline-block;
}

.dropDown div {
cursor: pointer;
padding: 10px;   
color: #3c3c3c;
}

.dropDownMenu {
    display: none;
    position: absolute;
    top: 240%;
    left: 0;
    
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropDown.open .dropDownMenu {
    display: block;
    flex-direction: column;
}   

.dropDownMenu a {
    display: block;
    padding: 10px;
    color: #a5a5a5;
    text-decoration: none;
}

.dropDownMenu a:hover {
    background-color: #eee;
}
`