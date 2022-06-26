import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { useState } from "react";

const Dopdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
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
    <div className="xs:visible hidden xs:block xl:invisible">
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <img className="ml-24" src="/whitemenuu.png"/>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          " text-base z-50 float-left py-2 list-none text-left rounded min-w-48"
        }
      >
       <div className=" text-blue-900 bg-white px-8 py-4 rounded-lg mt-2 relative xs:z-40">
        <Link href="/WhoWeAre">
            <h1 className="mx-2 cursor-pointer hover:bg-slate-100 rounded-sm ">Who we are </h1>
        </Link> 
        <Link href="/WhatWeDo">
            <h1 className="mx-2  mt-2 cursor-pointer hover:bg-slate-100 rounded-sm  ">What we do</h1>
        </Link>
        <Link href="/Products">
            <h1 className="mx-2  mt-2 cursor-pointer hover:bg-slate-100 rounded-sm ">Products</h1>
        </Link>
        <Link href="/WorkWithUs">
            <h1 className="mx-2  mt-2 cursor-pointer hover:bg-slate-100 rounded-sm ">Work with us</h1>
        </Link>
        <Link href="/Contact">
            <h1 className="mx-2  mt-2 cursor-pointer hover:bg-slate-100 rounded-sm ">Contact</h1>
        </Link>
       </div>
        </div>
    </div>
  );
};

export default Dopdown;
