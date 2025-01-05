'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { Input } from './ui/input'
import { FiMenu } from 'react-icons/fi'
import { PiHandbag } from 'react-icons/pi'


function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className='bg-blue-400'>
      <nav className='flex justify-between items-center py-6 px-8 md:px-32 drop-shadow-md'>

        <ul className='hidden xl:flex items-center gap-12 font-semibold text-white'>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/'>Home</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/about'>Menu</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/menu'>Blog</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/pages'>Pages</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/about'>About</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/shop'>Shop</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/signup'>Contact</Link></li>
        </ul>

        <div className='relative mb-12 sm:mb-0 -top-6'>
          <a href="www.mysite.com" className='w-52 hover:scale-105 transition-all text-xl text-white'>Food <span className='text-amber-500'>tuck</span></a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
            <form className="relative">
              <input type="search" placeholder="Search..." className="bg-transparent border border-amber-500 rounded-full py-2 px-4 pr-10 focus:outline-none" />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5" />
              </button>
            </form>
            <Link href="/shop/shoppingcart">
              <PiHandbag className="w-6 h-6" />
            </Link>
          </div>
        <FiMenu className='xl:hidden block text-5xl cursor-pointer text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} >
          <ul>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/'>Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/about'>About</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/menu'>Menu</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/pages'>Pages</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/contact'>Contact</Link></li>

          </ul>

        </div>

      </nav>
    </div>
  )
}

export default Nav
