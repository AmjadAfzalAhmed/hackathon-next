'use client'

import Link from 'next/link';
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
         
         <FiMenu className='absolute -left-[70px] xl:hidden block text-5xl cursor-pointer text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <div className={`absolute xl:hidden top-[90px] -left-[70px] w-[500px] bg-stone-900 text-white rounded flex flex-col items-start gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} >
          <ul>
            <li className='list-none w-full text-lg text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/'>Home</Link></li>
            <li className='list-none w-full text-lg text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/menu'>Menu</Link></li>
            <li className='list-none w-full text-lg text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/blog'>Blog</Link></li>
            <li className='list-none w-full text-lg text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/about'>About</Link></li>
            <li className='list-none w-full text-lg text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/shop'>Shop</Link></li>
            <li className='list-none w-full text-lg text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/contact'>Contact</Link></li>

          </ul>

        </div>

    </div>
  )
}

export default MobileNav