import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getImages } from '../api/firebase';

function Promotion({image}) {

    const [imageList, setImageList] = useState([]);

    useEffect(()=>{
        const getImageList = async ()=>{
            try{
                const images = await getImages();
                const imageUrls = images.map(img => img.image);  
                setImageList(imageUrls)
                console.log(imageUrls)
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
                        <div 
                        className='img' 
                        style={{ 
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: 'cover',
                            height: '300px',
                            }}>
                        </div>
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
    padding: 20px;
    
    .container{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        flex-direction: row;
        li{
        flex-shrink: 0;
        flex-basis: 30%;
        }
}
`