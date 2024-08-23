

import Head from "next/head";
import Homeanimation from '@/components/Animation/Homeanimation';
import Landing from '@/components/landing/Landing';
import ContactBar from '@/components/contactBar/ContactBar';
import Project from '@/components/project/Project';
import About from "@/components/about/About";
import ContactForm from "@/components/contactForm/ContactForm";
import Service from "@/components/service/Service";
import Education from "@/components/education/Education";
import HomeLayout from "@/components/HomeLayout";



export default function Home() {
  return (

    <>
      <HomeLayout>
        <Head>
          <link rel="icon" type="image/svg+xml" href={'./favicon.svg'} />
        </Head>
        <Homeanimation />
        <Landing />
        <ContactBar />
        <hr className='w-3/4 m-auto' />
        <About />
        <Service />
        <hr className='w-3/4 m-auto my-10' />
        <Education />
        <Project />
        <hr className='w-3/4 m-auto' />
        <ContactForm />


      </HomeLayout>
    </>



  );
}
