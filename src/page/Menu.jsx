import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CategoryContext } from '../context/CategoryContext'


function Menu() {
    const {categoryList} = useContext(CategoryContext);
    return (
         <nav>
            {categoryList.map((el, index)=>(
            <li key={index}>
                <Link to={`/products/${el}`}>{el}</Link>
            </li>
           ))}  
        </nav>
    )
}

export default Menu
