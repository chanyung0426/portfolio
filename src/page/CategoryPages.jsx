import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryProductList from '../component/CategoryProductList';
import { getCategoryProduct } from '../api/firebase';

function CategoryPages() {
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getCategoryProduct(category).then((product)=>{
            setProducts(product);
        }).catch((error)=>{
            console.error(error)
        })
    }, [category])
    console.log(products)

    return (
        <div>
             {category}
             <CategoryProductList category={category} product={products}/> 
        </div>
    )
}

export default CategoryPages
