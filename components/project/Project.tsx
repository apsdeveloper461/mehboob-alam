"use client";
import React from 'react'
import Card from './card/Card'
import projects, { Projects } from './popularProject'
import { motion } from 'framer-motion';

const Project = () => {


  return (
    <>
      <section id="project" className='mb-16'>

        <h2 className='project_h2 mb-10 text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4   md:px-16 gap-10 m-auto">
          {projects && projects.map((project: Projects,index:number) => {
            let tim:number=(index+1)*.3;
            return(
              <motion.div key={project.id} initial={{ opacity: .6 }} whileInView={{ opacity: 1, y: [100, 0] }} transition={{ duration: tim }}>
              <Card  Id={String(project.id)} ImgURL={project.url} Heading={project.title} Description={project.technolgies} ButtonContent={'Explore'} />
            </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Project