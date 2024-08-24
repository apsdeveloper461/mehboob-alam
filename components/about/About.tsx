 "use client";
import React from 'react'
import './about.css'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
    <div className="shortAbout">
      <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="shortAboutImgCOn hidden md:block">
        <div className="im_g ">
        </div>
      </motion.div>
      <div   className="shortAboutContent" >

        <motion.p initial={{opacity:0}} whileInView={{opacity:1,x:[0,-100,0]}} transition={{delay:.8}}>
          <span className="absolute font-bold w-full text-center -top-4 text-2xl  pb-4 .cont text-custom-accent-200" style={{ fontFamily: 'fantasy' }}>About Me</span><br />
          I&#x27;m Mehboob Alam, a passionate software engineering student at the University of Engineering and Technology (UET) Lahore. I&#x27;m currently pursuing my degree and gaining hands-on experience in software development, with a focus on MERN Stack technologies.
          <br />
          <span className="cont">Expertise</span>
          <br />
          - Proficient in C++, MySQL, Git, and GitHub
          <br />
          - Familiarity with MERN Stack development (MongoDB, Express, React, Node.js)
          <br />
          - Strong foundation in software engineering principles and patterns
          <br />
          <span className="cont">Learning and Growing</span>
          <br />
          As a student, I&#x27;m constantly learning and expanding my skill set. I&#x27;m excited to apply my knowledge and skills to real-world projects and collaborate with others to build innovative solutions.

          Feel free to modify it as needed to fit your style and branding. Good luck with your studies and your portfolio website!</motion.p>
      </div>
    </div>
  </section>
  )
}

export default About