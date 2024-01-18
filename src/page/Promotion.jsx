import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getImages } from '../api/firebase';

function Promotion() {
    const [imageList, setImageList] = useState([]);

    useEffect(()=>{
        const getImageList = async ()=>{
            try{
                const images = await getImages();
                setImageList(images)
            }
            catch(error){
                console.error(error)
            }
        }
        getImageList();
    },[])

    return (
        <PromotionContainer>
            <ul className='container'>
                {imageList.map((imageUrl, index)=>(
                    <li key={index}>
                        <div className='img' style={{backgroundImage: `url(${imageUrl})`}}></div>
                    </li>
                ))}
            </ul>
        </PromotionContainer>
    )
}

export default Promotion

const PromotionContainer = styled.div`
    width: 1168px;
    margin: 0 auto;
    margin-top: 200px;
    background: #ccc;
    padding: 20px;
    
    .container{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        flex-direction: row;
        li{
        flex-shrink: 0;
        flex-basis: 30%;
        }
        .img{
        width: 366px;
        height: 300px;
        }
}
`