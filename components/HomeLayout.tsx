
import Navbar from '@/components/Navbar'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section id="home">
        <Navbar />
        {children}
      </section>

    </>
  )
}

export default HomeLayout