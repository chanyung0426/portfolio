import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(()=>{
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return()=>{
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
           {windowWidth > breakpoint ? (
            <p>Large screen</p>
            ) : (
            <p>Small screen</p>
            )}   
        </div>
    )
}

export default MyComponent
