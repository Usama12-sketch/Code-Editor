import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className=" bg-gray-500 border-b-4 rounded-md shadow-lg p-3 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
         Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left text-green-500 py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        
        <Link href="/">
          <a
            href=""
            className={
              "text-sm py-2 px-4 font-normal ease-in-out hover:bg-slate-500 duration-500  block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Profile
          </a>
        </Link>
        <Link href="/products">
          <a
            href=""
            className={
              "text-sm py-2 hover:bg-slate-500 duration-500 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Products
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
