import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


function PromotionDetail({image}) {

    const navigate = useNavigate();
    const detailNavigate = () =>{
     navigate(`/new/promotion`,{
          state : {
            title : image.title,
            id : image.id,
            image : image.image,
            category : image.category,
          }
        })
    }
    return (
        <DetailItem onClick={detailNavigate}>

        <img src={image.image}/>

            <div className='textWrap'>
                 <h3 className='itemTitle'>{image.title}</h3>
                 
            </div>    


        </DetailItem>
        
    )
}

export default PromotionDetail

const DetailItem = styled.div`
    display: flex;
    margin-top: 140px;
    flex-direction: column;
    gap: 20px;

    .itemTitle{
            font-size: 22px;
            font-weight: bold;
            transition: 500ms;
            color: rgba(0,0,0,1);
            &:hover{
                color: rgba(0,0,0,0.5);
            }
    }
`