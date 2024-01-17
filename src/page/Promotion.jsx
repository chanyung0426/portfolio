import React, { useEffect, useState } from 'react'
import { getImages } from '../api/firebase';
import Image from '../component/Image';

function Promotion() {
    const [image, setImage] = useState([]);

    useEffect(()=>{
        const fetchImages = async()=>{
            try{
                const images = await getImages();
                setImage(images)
            }catch(error){
                console.error(error)
            }
        }
        fetchImages()
    },[])
    return (
        <div className='container'>
            <Image images={image}/>
        </div>
    )
}

export default Promotion
