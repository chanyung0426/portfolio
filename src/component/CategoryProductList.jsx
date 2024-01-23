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
    display: flex;
    gap: 20px 5%;
    flex-wrap: wrap;
    li{
        flex-shrink: 0;
        flex-basis: 30%;
    }
`