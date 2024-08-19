"use client"
import React from 'react'
import ServiceCard from './serviceCard/ServiceCard'

const Service = () => {

  return (
    <section id='services'>

     <h2 className='project_h2 mb-10 text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Services</h2>
        
            <div  className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2   md:px-16 gap-10 m-auto">

    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
            </div>
    </section>
  )
}

export default Service