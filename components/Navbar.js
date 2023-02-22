"use client"
import React from 'react'

import Link from 'next/link'
import { useState } from 'react'
export default function Nav() {

  const [nav, setNav] = useState(
    "navbar")
  const [icon, setIcon] = useState("Boss"
  )

  function navbarflex() {
    if (nav == (" navbar ")) {

      let tailplus = " Mobile-navbar "
      setNav(
        tailplus)
      setIcon(" Usama ")
    }
    else {

      setNav(
        " navbar "
      )
      setIcon("Boss")
    }
  }

  return (
    <>


      <div className="flex-col right-0 z-40 lg:relative  bg-opacity-50 lg:h-auto h-10 ">
        <a className="right-0 text-yellow-400 bg-blue-500 rounded-xl
        md lg:invisible 
        text-center sm:text-2xl lg:text-3xl" onClick={navbarflex}>{icon}</a>
        </div>


        <ol className="menu lg:-mt-2 md:mt-0 mt-8">

          <div className={nav}>
            <Link href="/" onClick={navbarflex} >Home</Link>
          </div>
          <div className={nav}>
            <Link href="/Editor" onClick={navbarflex} >Editor</Link>
          </div>

{/* 
          {/* <div className={nav}>
            <Link href="/features" onClick={navbarflex} >Features</Link>
          </div> */}

          {/* <div className={nav}>
            <Link href="/posts" onClick={navbarflex} >Posts</Link>
          </div> */}



        </ol>

    </>
  )
}
