"use client"
import React, { useEffect, useRef } from 'react'
import './service_card.css'

const THRESHOLD = -5;
const ServiceCard = () => {
    const serviceCardRef = useRef<HTMLDivElement>(null);

    // Event handler for native MouseEvent
    const handleHover = (e: MouseEvent) => {
      const cardElement = serviceCardRef.current;
      if (cardElement) {
        const { clientX, clientY } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = cardElement;
  
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = ((vertical * THRESHOLD + THRESHOLD / 2)).toFixed(2);
  
        cardElement.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.1, 1.1, 1.1)`;
      }
    };
  
    // Event handler for native MouseEvent
    const resetStyles = (e: MouseEvent) => {
      const cardElement = serviceCardRef.current;
      if (cardElement) {
        cardElement.style.transform = `perspective(${cardElement.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
      }
    };
  
    useEffect(() => {
      const card = serviceCardRef.current;
      const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  
      if (card && !motionMatchMedia.matches) {
        // Add event listeners
        card.addEventListener("mousemove", handleHover as EventListener);
        card.addEventListener("mouseleave", resetStyles as EventListener);
  
        // Cleanup event listeners on component unmount
        return () => {
          card.removeEventListener("mousemove", handleHover as EventListener);
          card.removeEventListener("mouseleave", resetStyles as EventListener);
        };
      }
    }, []);
  
    return (
        <div className="service-card-contanier bg-custom-background-100 bg-opacity-60  shadow-lg shadow-slate-700 border border-gray-400 " >

            <div className="service-card cursor-pointer  border border-slate-500 flex justify-center items-center" ref={serviceCardRef} style={{ background: `url(./projects/card-bg.jpg)`, backgroundSize: 'cover' }}>
                <h2 className='text-2xl  text-custom-accent-200' style={{ fontFamily: 'fantasy' }}>Frontend Web Development</h2>
            </div>
            <div className="service-card-content px-5 py-4 mx-10">
                <h1 className=' text-xl text-custom-text-200 font-bold'>Properties :</h1>
                <ul className='service-card-list'>
                    <li>Interactive web development</li>
                    <li>Convert Figma Design into Website</li>
                    <li>smooth Design</li>
                </ul>

                <button className='relative w-3/4 px-10 mx-auto py-1 text-lg   opacity-90  border-2 rounded-full font-semibold bg-transparent hover:opacity-100 border-custom-accent-100 text-custom-accent-100 hover:bg-custom-accent-100 hover:text-custom-text-200 mt-4 ' type="button">Hire Me &rarr; </button>
          
            </div>
        </div>

    )
}

export default ServiceCard