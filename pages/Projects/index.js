import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const Projects = () => {

  return (
    <>
     <Head>
        <title>Projects</title>
        <link rel='icon' href="/00100sPORTRAIT_00100_BURST20201229170349898_COVER~2.jpg" />
      </Head>

    <div className=' flex flex-col from-green-400 to-purple-500 bg-gradient-to-br p-40'>
      
<Link href='/Editor' target='_blank'>
      <ol className='relative box flex overflow-hidden flex-wrap w-max  bg-black hover:scale-110 bg-opacity-50 cursor-pointer  m-2
        duration-300 '>
        

        <Image src='/26.04.2023_00.20.36_REC.png' width={800} height={450}/>
  
        <h1 className='fon text-4xl bg-black bg-opacity-50 hover:bg-gray-800 hover:bg-opacity-50 duration-500 h-full absolute font-bold w-full drop-shadow-md '>Code Editor with  Reactjs NextJs </h1>
      </ol>
      </Link>
      <a href="https://controllex.vercel.app/Blog" target='_blank'>

      
      <ol className='relative box hover:scale-110 flex overflow-hidden flex-wrap w-max  bg-black bg-opacity-50  m-2
        duration-300  cursor-pointer '>
        

        <Image src='/26.04.2023_00.16.36_REC.png' width={800} height={450}/>
  
        <h1 className='fon text-4xl bg-black hover:bg-red-800 hover:bg-opacity-50 duration-500 bg-opacity-50 h-full absolute font-bold drop-shadow-md '>Full Stack Nextjs, Prisma, postgresql or Mongodb BlogPost web App </h1>
      </ol>
          
      </a>
    </div>
    </>
  )
}

export default Projects
