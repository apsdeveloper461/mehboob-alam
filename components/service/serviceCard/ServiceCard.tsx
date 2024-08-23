"use client"
import { SERVICE_CARD } from '../ServiceData'
import './service_card.css'

const ServiceCard = ({serviceCardData}:{serviceCardData:SERVICE_CARD}) => {
   
    return (
        <div className="service-card-contanier min-w-56 md:min-w-60 bg-custom-background-100 bg-opacity-60  shadow-xl shadow-custom-background-300 border border-gray-400 " >

            {/* <div className="service-card cursor-pointer  border border-slate-500 flex justify-center items-center"  style={{ background: `url(./projects/card-bg.jpg)`, backgroundSize: 'cover' }}>
            </div> */}
            <h2 className='text-xl  text-custom-accent-200 mt-5 text-center' style={{ fontFamily: 'fantasy' }}>{serviceCardData.title}</h2>
            <div className="service-card-content  py-4 ">
                <h1 className=' text-lg text-custom-text-200 font-bold mx-2'>Properties :</h1>
                <ul className='service-card-list mx-2 pl-6'>
                    {serviceCardData?.properties && serviceCardData.properties?.map((item,idx:number)=>{
                        return(

                            <li key={idx}>{item}</li>
                        )
                    })
                    }
                </ul>

               <div className="flex items-center justify-center"> <button className='relative  px-4 mx-auto py-1 text-md   opacity-90  border-2 rounded-full font-semibold bg-transparent hover:opacity-100 border-custom-accent-100 text-custom-accent-100 hover:bg-custom-accent-100 hover:text-custom-text-200 mt-4 ' type="button">{serviceCardData.button} &rarr; </button>
               </div>
            </div>
        </div>

    )
}

export default ServiceCard