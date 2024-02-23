import React, { useEffect, useState } from 'react'
import DetailPageEvent from './DetailPageEvent';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function CategoryProductList({category, product}) {
    const [ sortProducts, setSortProducts] = useState(product);

    useEffect(()=>{
        setSortProducts(product)
    }, [product]);
    
    
    return (
      
        <div className='container'>
        <h2>{category}</h2>

        <CategoryItem className='productList'>
            {sortProducts.map((product)=>(
                <li key={product.id}>
                    <DetailPageEvent product={product}/>
                </li>
            ))} 
        </CategoryItem>
        </div>

       
    )
}

CategoryProductList.propTypes={
    category : PropTypes.string.isRequired,
    product : PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default CategoryProductList

const CategoryItem = styled.ul`
    width: 1168px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 140px;
    li{
        height: 350px;
        flex-shrink: 0;
        background: #ffe88a;
        border-radius: 10px;
        margin: 0 0 35px 35px;
        padding: 20px;
    }
    @media (max-width: 1280px){
        width: 91.25%;
    }
    @media (max-width: 1024px){
        width: 100%;
        li{
            margin: 0 auto;
            margin-bottom: 50px;
        }
    }
    @media (max-width: 768px){
        width: 100%;
    }   
    @media (max-width:390px){
        li{
            width: 40%;
            height: 250px;
            padding: 10px;
            margin-bottom: 25px;
        }
    }
`