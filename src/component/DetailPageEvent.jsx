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
            category : product.category,
            allergic : product.allergic,
            description : product.description,
            price : product.price
          }
        })
    }
    return (
        <DetailItem onClick={detailNavigate}>

        <img src={product.image}/>

            <div className='textWrap'>
                 <h3 className='itemTitle'>{product.title}</h3>
                 <div className='itemFlex'>
                    <p className='itemAllergic'>{product.allergic}</p>
                    <p className='itemPrice'>{product.price}</p>
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
            font-size: 22px;
            font-weight: bold;
            transition: 500ms;
            color: rgba(0,0,0,1);
            &:hover{
                color: rgba(0,0,0,0.5);
            }
            .itemFlex{
            display: flex;
            justify-content: space-between;
            padding-top: 14px;
        }
    }
    .itemAllergic{
            padding-top: 14px;
            font-size: 16px;
    }
  
    .itemPrice{
            padding-top: 14px;
            color:  #44900c;
            font-size: 16px;
    }
    @media (max-width:389px){
        .itemTitle{
            font-size: 14px;
        }
        .itemAllergic{
            font-size: 12px;
        }
        .itemPrice{
            font-size: 12px;
        }
    }
`