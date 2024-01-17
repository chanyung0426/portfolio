import React from 'react'
import styled from 'styled-components'
import PromotionDetail from './PromotionDetail'

function Image({images}) {
    return (
        <>
            <PromotionList className='promotionList'>
                {images && images.map((image)=>{
                    <li key={image.id}>
                        <PromotionDetail image={image}/>
                    </li>
                })}
            </PromotionList>
        </>
    )
}

export default Image

const PromotionList = styled.ul`
    display: flex;
    gap: 20px 5%;
    flex-wrap: wrap;
    li{
    flex-shrink: 0;
    flex-basis: 30%;
    }
`
