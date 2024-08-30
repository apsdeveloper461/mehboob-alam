"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import "./slide_show.css";

const Slideshow = ({ slideImages }: { slideImages: string[] | undefined }) => {
  // popularProject
  // console.log(slideImages);
  return (
    <>
    {/* <Image src={'/projects/P2/1.jpg'} alt="img" fill={true}   className="w-min-full" /> */}
      {slideImages !== undefined && slideImages?.length > 0 && (
        <div className="slide-container">
          <Slide>
            {slideImages?.map((slideImage, index) => {
                console.log(slideImage);
                
              return (
                <div key={index}  className="relative imges">
       
                    <Image src={slideImage} alt="image" fill={true}  className="rounded-md" placeholder="blur" blurDataURL="data:image/png;base64,..."/>    
                            
                </div>
              );
            })} 
          </Slide>
        </div>
      )}
    </>
  );
};

export default Slideshow;
