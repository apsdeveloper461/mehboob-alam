 
import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about">
    <div className="shortAbout">
      <div className="shortAboutImgCOn hidden md:block">
        <div className="im_g ">
        </div>
      </div>
      <div className="shortAboutContent" >

        <p>
          <span className="absolute font-bold w-full text-center -top-4 text-2xl  pb-4 .cont text-custom-accent-200" style={{ fontFamily: 'fantasy' }}>About Me</span><br />
          I&abos;m Mehboob Alam, a passionate software engineering student at the University of Engineering and Technology (UET) Lahore. I&abos;m currently pursuing my degree and gaining hands-on experience in software development, with a focus on MERN Stack technologies.
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
          As a student, I&abos;m constantly learning and expanding my skill set. I&abos;m excited to apply my knowledge and skills to real-world projects and collaborate with others to build innovative solutions.

          Feel free to modify it as needed to fit your style and branding. Good luck with your studies and your portfolio website!</p>
      </div>
    </div>
  </section>
  )
}

export default About