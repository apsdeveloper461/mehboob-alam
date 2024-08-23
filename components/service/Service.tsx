"use client"
import ServiceCard from './serviceCard/ServiceCard'
import { serviceCards } from './ServiceData'

const Service = () => {


  return (
    <section id='services' className='px-8 md:px-12  md:mr-16 lg:mr-0'>

      <h2 className='project_h2 mb-10 text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Services</h2>

      {serviceCards &&
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:mr-0  gap-6 md:gap-16 ">

            <div className="cursor-pointer  hover:z-40 hover:scale-105  hover:transition-all "><ServiceCard key={'servicecard1'} serviceCardData={serviceCards[0]}/></div>

            <div className="cursor-pointer hover:z-40 hover:scale-105 md:z-30 md:scale-105" ><ServiceCard key={'servicecard2'} serviceCardData={serviceCards[1]}/></div>
            <div className="cursor-pointer sm:hidden md:block  hover:z-40 hover:scale-105" ><ServiceCard key={'servicecard3'} serviceCardData={serviceCards[2]}/></div>


          </div>
          <div className="cursor-pointer hidden sm:block md:hidden mt-10  hover:z-40 hover:scale-105" ><ServiceCard key={'servicecard3'} serviceCardData={serviceCards[2]}/></div>
        </>
      }
    </section>
  )
}

export default Service