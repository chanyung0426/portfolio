import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

function ProductDetail() {
    const state = useLocation().state;
    console.log(state)
    const {id, image, title, description, category} = state;

    return (
        <div className='container'>
             <DetailPage>
                <div className='detailImg'>
                    <img src={image} alt={title}/>
                </div>
                <div className='detailText'>
                    <h3>{title}</h3>
                    <p className='description'>{description}</p>
                </div>
                
            </DetailPage>
        </div>
    )
}

export default ProductDetail

const DetailPage = styled.div`
width: 100%;
display: flex;
gap: 40px;
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
        font-size: 24px;
        width: 100%;
        font-weight: normal;
        border-bottom: solid 1px rgba(0,0,0,0.1);
        padding-bottom: 20px;
    }
}
`