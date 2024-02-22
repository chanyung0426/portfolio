import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

function ProductDetail() {
    const state = useLocation().state;
    const { image, title, description, price } = state;

    return (
        <div className='container'>
            <DetailPage>
                <div className='detailImg'>
                    <img src={image} alt={title}/>
                </div>
                <div className='detailText'>
                    <h3>{title}</h3>
                    <p className='description'>{description}</p>
                    <p className='price'>{price}</p>
                </div>
            </DetailPage>
        </div>
    )
}

export default ProductDetail

const DetailPage = styled.div`
display: flex;
gap: 40px;
width: 1168px;
margin: 0 auto;
margin-top: 250px; 

.detailImg{
    max-width: 400px;
    img{
        width: 100%;
        display: block;
    }
}
.detailText{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
   
    h3{
        font-size: 35px;
        width: 100%;
        font-weight: 500;
        border-bottom: solid 1px rgba(0,0,0,0.1);
        padding-bottom: 20px;
    }
    p{
        width: 100%;
        font-size: 18px;
        color: #808080;
        font-weight: 500;
    }
}
@media (max-width:768px){
       width: 50%;
       margin: 150px 25% 100px;
       flex-direction: column;  
       justify-content: center; 
}
@media (max-width: 391px){
       margin-bottom: 50px;
       .detailText{
        h3{
        font-size: 30px;
        }
        p{
            font-size: 14px;
            line-height: 1.5;
        }
       }
}
`