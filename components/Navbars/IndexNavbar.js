import React from "react";
import Link from "next/link";
// components
import Nav from "/components/Navbar.js";
import IndexDropdown from "/components/Dropdowns/IndexDropdown.js";



export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-slate-400 duration-500 hover:bg-slate-700 hover:text-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

             <div className="text-blueGray-  hover:text-white  text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ">

            <Link href="/">
                Usama Bin jamshaid
            </Link>
             </div>


              <Nav></Nav>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-blue-400  hover:text-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
            >
           


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
            
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
