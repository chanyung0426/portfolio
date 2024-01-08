import React, { useEffect, useState } from 'react'
import DetailPageEvent from './DetailPageEvent';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function CategoryProductList({category, product}) {
    const [ sortProducts, setSortProducts] = useState(product);

    useEffect(()=>{
        setSortProducts(product)
    }, [product]);
    
    const sortName = () =>{
        const sortList = [...product].sort((a,b)=>{
            if(!a.name || !b.name){
                return 0
            }
            return a.name.charAt(0).localCompare(b.name.charAt(0))
        })
        setSortProducts(sortList);
    }
    return (
      
        <div className='container'>
        <h2>{category}</h2>

        <CategoryItem className='productList'>
            {product.map((product)=>(
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
    product : PropTypes.arrayOf(PropTypes.Object).isRequired,
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