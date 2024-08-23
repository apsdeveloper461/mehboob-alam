'use client';
import popularProject from '@/components/project/popularProject';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const Project = () => {
  const { projectid } = useParams();
  const PageData = popularProject.find((item) => (item.id) === Number(projectid))


  return (
    <>

      <div className='header px-2  flex gap-5 w-screen h-16 items-center'>
        <Link href={'/'} className='text-3xl font-bold text-custom-text-300'>&#8592;</Link>
        <h1 className='text-custom-accent-100 text-lg font-semibold'>{PageData?.title}</h1>
      </div>
      <div className='mt-5 md:px-5 px-2'>

        <h2 className='text-custom-accent-100 text-xl font-semibold italic'>Technologies: </h2>
        <p className='text-custom-primary-300 my-3  md:text-md font-semibold italic text-center'>{PageData?.technolgies}</p>
        <h2 className='text-custom-accent-100 text-xl font-semibold italic'>Description: </h2>
        <p className='text-custom-text-300  italic text-justify pl-3 mt-2'>{PageData?.descrition}</p>
        {
          PageData?.github &&
          <>
          <div className='w-screen flex justify-center items-center mt-7 '>
            <Link href={PageData?.github} target='_blank' className='m-auto  py-2 px-5 border-2 hover:bg-custom-accent-300 hover:text-custom-text-100 border-custom-accent-300 text-custom-accent-300 rounded-md'> Check at Github</Link>
          </div>
            <hr className='w-3/4 m-auto my-10' />
          </>
        }


        {PageData?.OtherData.map((items, index) => {
          return (
            <div key={index}>
              <h2 className='text-custom-accent-100 text-xl font-semibold italic'>{items.subtitle} </h2>
              {items.subdescription.map((i, idx) => {
                return (
                  <p key={idx} className='text-custom-text-300 text-justify  italic pl-3 mt-2 mx-3'>{i}</p>

                )
              })}
              <hr className='w-3/4 m-auto my-10' />
            </div>
          )
        })}
        {
          PageData?.pdf &&
          <div className='w-screen flex justify-center items-center'>
            <Link href={PageData?.pdf} target='_blank' className='m-auto  py-2 px-5 border-2 hover:bg-custom-accent-300 hover:text-custom-text-100 border-custom-accent-300 text-custom-accent-300 rounded-md'> Download Report</Link>
          </div>
        }


      </div>
      <div className="mb-10"></div>

    </>

  );
};

export default Project;
