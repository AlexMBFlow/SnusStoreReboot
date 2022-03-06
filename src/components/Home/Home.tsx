import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Home.css"

export const Home = () => {

    useEffect( () => {
        gsap.to(img.current, {
            rotation: '+=360'
        })
    })

    const img = useRef(null)

    return (
        <div>
            <div ref={img} className="image"></div>
        </div>
    )
}