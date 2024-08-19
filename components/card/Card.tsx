"use client";
import React, { useRef, useEffect } from 'react';
import './card.css'

const THRESHOLD = -5;

const Card = ({ Id, ImgURL, Heading, Description, ButtonContent }: { Id: string, ImgURL: string, Heading: string, Description: string, ButtonContent: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Event handler for native MouseEvent
  const handleHover = (e: MouseEvent) => {
    const cardElement = cardRef.current;
    if (cardElement) {
      const { clientX, clientY } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = cardElement;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD + THRESHOLD / 2).toFixed(2);

      cardElement.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.1, 1.1, 1.1)`;
    }
  };

  // Event handler for native MouseEvent
  const resetStyles = (e: MouseEvent) => {
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.style.transform = `perspective(${cardElement.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  useEffect(() => {
    const card = cardRef.current;
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
    <>

      <div id={Id} className=" cursor-pointer card_container m-auto example-3 ">
        <div className="card h-48 border border-slate-500" ref={cardRef} style={{ background: `url(${ImgURL})`, backgroundSize: 'cover' }}>
          <div className="content p-0 ">
            <h2 className='text-2xl  text-custom-accent-200' style={{ fontFamily: 'fantasy' }}>{Heading}</h2>
            <p >{Description}</p>
            <button className=' px-3 py-1 text-lg  border-gray-300 opacity-80  border-2 rounded-lg font-semibold hover:bg-transparent hover:opacity-100 hover:border-custom-accent-100 hover:text-custom-accent-100 bg-custom-accent-100 text-custom-text-200 mt-2 ' type="button">{ButtonContent} &rarr; </button>
          </div>
        </div>
      </div >


    </>
  );
};

export default Card;
