"use client"
import React from 'react'
import { EDUCATION, Education_Card_Data, Experience_Card_Data } from './education-data'
import { motion } from 'framer-motion'

const Education = () => {

    return (

        <section id="education">

            {/* Education All Card  */}
            <motion.h2 initial={{ opacity: .6 }} whileInView={{ opacity: 1, y: [100, 0] }} transition={{ duration: 1 }} className='project_h2  text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Education</motion.h2>
            <div className="flex md:flex-row flex-col  justify-center items-center md:items-stretch   gap-5 md:mx-4 md:my-6 ">
                {Education_Card_Data && Education_Card_Data.length > 0 && Education_Card_Data.map((CardData: EDUCATION, index: number) => {
                    let pos:number= index%2 === 0?-200:200;
                    return (
                        <motion.div initial={{ opacity: .6 }} whileInView={{ opacity: 1, x: [pos, 0] }} transition={{ duration: 1 }} key={index} className={`my-4 border relative flex ${Math.floor(index % 2) == 0 ? 'flex-row-reverse justify-between' : 'flex-row'}   w-3/4 md:w-2/4 border-slate-500 rounded-lg  gap-4 px-5 py-3`}>
                            <span style={{ background: `url(${CardData.logo})`, backgroundSize: 'cover' }} className="min-w-20 border border-custom-text-300 min-h-20 max-w-20 max-h-20   rounded-full"></span>
                            <div>
                                <h3 className='text-custom-primary-300 text-md font-bold'>{CardData.institude_name}</h3>
                                <p className='text-custom-text-100'>{CardData.role}</p>
                                <span className='text-custom-text-300 text-xs'>{CardData.duration}</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>



            {/* Interships  */}
            <motion.h2 initial={{ opacity: .6 }} whileInView={{ opacity: 1, y: [100, 0] }} transition={{ duration: 1 }} className='project_h2  text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Experience </motion.h2>
            <div className="flex md:flex-row flex-col  justify-center items-center md:items-stretch   gap-5 md:mx-4 md:my-6 ">
                {Experience_Card_Data && Experience_Card_Data.length > 0 && Experience_Card_Data.map((CardData: EDUCATION, index: number) => {
                     let pos:number= index%2 === 0?-200:200;
                    return (
                        <motion.div initial={{ opacity: .6 }} whileInView={{ opacity: 1, x: [pos, 0] }} transition={{ duration: 1 }} key={index} className={`my-4 border relative flex  ${Math.floor(index % 2) == 0 ? 'flex-row-reverse justify-between' : 'flex-row'}   w-3/4 md:w-2/4 border-slate-500 rounded-lg  gap-4 px-5 py-3`}>
                            <span style={{ background: `url(${CardData.logo})`, backgroundSize: 'cover' }} className="min-w-20 min-h-20 max-w-20 max-h-20 border border-custom-text-300 rounded-full"></span>
                            <div>
                                <h3 className='text-custom-primary-300 text-md font-bold'>{CardData.institude_name}</h3>
                                <p className='text-custom-text-100'>{CardData.role}</p>
                                <span className='text-custom-text-300 text-xs'>{CardData.duration}</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

        </section>

    )
}

export default Education