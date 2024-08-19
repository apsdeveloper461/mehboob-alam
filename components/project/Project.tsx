import React from 'react'
import Card from '../card/Card'
import projects, { Projects } from './popularProject'

const Project = () => {


  return (
    <>
      <section id="project" className='mb-16'>

        <h2 className='project_h2 mb-10 text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4   md:px-16 gap-10 m-auto">
          {projects.map((project: Projects) => (
            <Card Id={String(project.id)} ImgURL={project.url} Heading={project.title} Description={project.customData.technolgies} ButtonContent={'Explore'} />
          )
          )}
        </div>
      </section>
    </>
  )
}

export default Project