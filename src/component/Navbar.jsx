import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { IoMdMenu } from "react-icons/io";
import {IoMdClose} from "react-icons/io";


export default function Navbar() {
    const [open,Setopen]=useState(false)

    const showmenu=()=>{
        Setopen(!open)
    }
    
  return (
    <div className='flex z-50  h-24 sticky top-0 justify-center items-center border-b-[1px] border-b-gray-400 bg-backgroundcolor text-white '>
      <ul className='hidden items-center mdl:flex gap-6 cursor-pointer '> 
        <li className='nav-list'>
            <Link to='Home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='nav-list'>
            <Link to='About' smooth={true} duration={500}>About</Link>
        </li>
        <li className='nav-list'>
            <Link to='Recipes' smooth={true} duration={500}>Recipes</Link>
        </li >
        <li className='nav-list'>
            <Link to='Testymonials' smooth={true} duration={500}>testymonials</Link>
        </li>
        <li className='nav-list'>
            <Link to='Contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <sapn onClick={showmenu} className="mdl:hidden cursor-pointer w-10 h-10 text-white flex absolute  top-10 right-4 text-3xl">
      <IoMdMenu />
      </sapn>
      {open&&(
        <div className='w-[80%] h-screen absolute top-0 left-0 bg-backgroundcolor text-white'>
            <ul className='flex flex-col gap-6 p-5 items-start justify-center h-full cursor-pointer '>
                <li>
                    <Link to='Home' smooth={true} duration={500} onClick={showmenu}>Home</Link>
                </li>
                <li>
                    <Link to='About' smooth={true} duration={500} onClick={showmenu}>About</Link>
                </li>
                <li>
                    <Link to='Recipes' smooth={true} duration={500} onClick={showmenu}>Recipes</Link>
                </li>
                <li>
                    <Link to='Testymonials' smooth={true} duration={500} onClick={showmenu}>Testymonials</Link>
                </li>
                <li>
                    <Link to='Contact' smooth={true} duration={500} onClick={showmenu}>Contact</Link>
                </li>
                </ul>
                <sapn onClick={showmenu}>
              <IoMdClose className='text-3xl absolute top-8 right-4 cursor-pointer'/>
            </sapn>
        </div>
      )}
    </div>
  )
}
