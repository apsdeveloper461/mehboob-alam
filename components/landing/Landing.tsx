"use client";
import React from 'react'
import './landing.css'
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className='contianer relative md:mb-40 mb-28 md:top-12 flex md:flex-row-reverse  flex-col gap-2 md:gap-12' style={{ padding: '0px 3vw' }} >
      <div  className="rightContainer m-auto rounded-full min-h-60 min-w-60  md:min-h-72 md:min-w-72 lg:min-h-80 lg:min-w-80 lg:mr-16">
        <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1,scale:1}} transition={{delay:.6,duration:1.5}} viewport={{once:true}}  className="right_img rounded-full bg-cover" style={{ backgroundImage: 'url(/profile_image.png)' }
        }></motion.div>
      </div>
      <div className="leftContainer translate-y-20   flex flex-col items-center justify-center md:block">
        <motion.div initial={{ x: -1000 }} animate={{ x: [0, 100,0] }} >

          <div className='cont'>Hi, I am</div>
          <div className='h2 text-2xl lg:text-4xl'> MEHBOOB  Alam <span className="cont">(Aps Developer)</span></div>
          <div style={{ color: 'grey' }} className='p text-justify px-3 lg:text-xl '>a  <span className=" text-custom-primary-100">software engineering student at UET Lahore</span>  with a passion for building innovative solutions. Skilled in <span className=" text-custom-primary-100">MERN Stack Developer ||</span> React Js <span className=" text-custom-primary-100">||</span> Node Js <span className=" text-custom-primary-100">||</span> Express Js <span className=" text-custom-primary-100">||</span> Redux <span className=" text-custom-primary-100">||</span> MongoDB <span className=" text-custom-primary-100">||</span> MySQL <span className=" text-custom-primary-100">||</span> Bootstrap <span className=" text-custom-primary-100">||</span> CSS <span className=" text-custom-primary-100">&</span> JavaScript, I&#x27;m dedicated to creating cutting-edge software and web applications. Explore my projects, skills, and experiences to learn more about me and my work</div>
        </motion.div>
        <motion.div initial={{ y: -1000 }} animate={{ y: [0, 20, 0,20,0]}} transition={{delay:.5}} className="ContactButton">
          <a className="ContactBtn rounded-xl" href='https://drive.google.com/file/d/1NeczaEqEemaOE_vmOUdN_oXpcGHSttNo/view?usp=sharing' target='_blank'>Download Resume</a>
        </motion.div>
      </div>

    </div>
  )
}

export default Landing