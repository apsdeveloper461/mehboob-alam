"use client";
import React from 'react'

const Button = ({buttonContent,styles}:{buttonContent:string,styles:string}) => {
  return (
    <button style={{borderWidth:'1.7px '}} className={` rounded-full font-semibold ${styles}  `}>Hire me</button>
  )
}

export default Button