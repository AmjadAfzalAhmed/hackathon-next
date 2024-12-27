'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '/public/images/Foodtuck.png'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'
import { Input } from './ui/input'
import { GiHamburgerMenu } from "react-icons/gi";



function Header() {
    const [showMenu,setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
  return (
    <header className='bg-black'>
        
        <nav className='flex justify-between items-center mx-auto w-[1320px] h-[87px]'>
            <div>
                <Image src={logo} alt='logo' className='relative top-[-30px] left-[650px]' />
            </div>
            <div className='text-white absolute bg-black sm:bg-black sm:min-h-[87px] md:min-h-fit md:w-auto md:gap-4 min-h-[60vh] left-0 top-[9%] w-full items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center gap-8'>
                    <li>
                        <Link href='/' className='hover:text-amber-500'>Home </Link>
                    </li>
                    <li>
                        <Link href='/menu' className='hover:text-amber-500'>Menu </Link>
                    </li>
                    <li>
                        <Link href='/blog' className='hover:text-amber-500'>Blog </Link>
                    </li>
                    <li>
                        <Link href='/about' className='hover:text-amber-500'>About </Link>
                    </li>
                    <li>
                        <Link href='/signup' className='hover:text-amber-500'>Signup </Link>
                    </li>
                </ul>
            </div>
            <div className='text-white relative top-4 left-[140px]'>
                <Input placeholder='Search...' className='w-[310px] h-[54px] border border-slate-200 rounded-3xl' />
                <Search className='text-white relative top-[-40px] left-64'/>
            </div>
            <PiHandbag className='text-white w-6 h-6'/>
            <button onClick={toggleMenu}>
                {showMenu ? "Hide Menu" : "Show Menu"}
            <GiHamburgerMenu className='text-white cursor-pointer md:hidden' />
            </button>
        </nav>      
    </header>
  )
}

export default Header
