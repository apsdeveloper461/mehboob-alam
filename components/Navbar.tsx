"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropDownMenuFunction = (): void => {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown) {
            dropdown.classList.toggle("show");
            if (!dropdown.classList.contains('show')) {
                setIsDropdownOpen(false)
            } else {
                setIsDropdownOpen(true)
            }

        }
    }
    useEffect(() => {


        // Handler for click events
        const handleClickOutside = (event: MouseEvent) => {
            if (!event?.target || !(event.target as HTMLElement).matches('.dropbtn')) {
                const dropdowns = document.getElementsByClassName('dropdown-content');
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i] as HTMLElement;
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
                setIsDropdownOpen(false); // Update state if needed
            }
        };

        // Add event listener on mount
        window.addEventListener('click', handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render


    return (
        <>

            {/* navbar for destop and laptops */}
            <div className='hidden md:flex  items-center justify-between  h-20 px-8 lg:px-16'>
                <div className='text-slate-300 text-2xl font-semibold'>Alam&apos;s Potflio</div>
                <ul className=' header rounded-xl py-2 px-5  md:flex items-center  md:gap-10 lg:gap-16 xl:gap-20 text-slate-400'>
                    <li>
                        <Link href='#about'>About Us</Link>
                    </li>
                    <li>
                        <Link href='#project'>Project</Link>
                    </li>
                    <li>
                        <Link href='#services'>Services</Link>
                    </li>
                    <li>
                        <Link href='#contact'>Contact Us</Link>
                    </li>
                    <li>
                        <a href="mailto:mehboobalam786461@gmail.com" target='_blank'  style={{borderWidth:'1.7px '}} className= 'hiremebtn  rounded-full font-semibold' >Hire Me</a>
                    
                    </li>
                </ul>

            </div>

            {/* Navbar for small devices */}
            <div className='header px-5 lg:px-16 md:hidden flex justify-between w-screen h-20 items-center'>
                <div className='text-slate-300 text-2xl font-semibold'>Alam&apos;s Potflio</div>

                <div className="md:hidden dropdown relative">
                    <div className="menu border rounded-md " >
                        <button onClick={() => dropDownMenuFunction()} style={{
                            background: isDropdownOpen ? 'url(/close.png)' : 'url(/menubar.png)',
                        }} className="dropbtn w-6 h-6 m-2">
                        </button>
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1, y: [-100, 0] }} transition={{ duration: 1 }} id="myDropdown" className=" dropdown-content md:hidden -z-10" >
                    <Link href='#about'>About Us</Link>
                    <Link href='#project'>Projects</Link>
                    <Link href='#services'>Services</Link>
                    <Link href='#contact'>Contact Us</Link>
                    <div className='dropdown-item mx-auto py-2'>
                    <a href="mailto:mehboobalam786461@gmail.com" target='_blank'  style={{borderWidth:'1.7px '}} className= 'hiremebtn  rounded-full font-semibold' >Hire Me</a>
                    
                    </div>
                    </motion.div>

        </>
    )
}

export default Navbar