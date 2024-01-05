import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


function DetailPageEvent({product}) {

    const navigate = useNavigate();
    const detailNavigate = () =>{
     navigate(`/products/detail/${product.id}`,{
          state : {
            title : product.title,
            id : product.id,
            image : product.image,
            option : product.option,
            category : product.category
          }
        })
    }
    return (
        <DetailItem onClick={detailNavigate}>

        <img src={product.image}/>

            <div className='textWrap'>
                 <h3 className='itemTitle'>{product.title}</h3>
                 <div className='itemFlex'>
                    <p className='itemOption'>{product.option}</p>
                 </div>
                 
            </div>    


        </DetailItem>
        
    )
}

export default DetailPageEvent

const DetailItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .itemTitle{
            font-size: 20px;
            font-weight: normal;
            transition: 500ms;
            color: rgba(0,0,0,0.5);
            &:hover{
                color: rgba(0,0,0,1);
            }
            
        }
`