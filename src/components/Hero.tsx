'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { PiHandbag } from "react-icons/pi"
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import backG from '/public/images/heroBack.png'
import heroImg from '/public/images/hero.png'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import { Input } from './ui/input'

export default function Hero() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center pb-20 px-4 md:px-0">
      <Image src={backG} alt="Background" className="object-cover absolute inset-0 w-full h-full opacity-10" />

      {/* Navbar */}
      <nav className='flex justify-between items-center py-6 px-8 sm:px-4 drop-shadow-md'>

        <ul className='hidden relative -left-44 xl:flex items-center gap-10 font-semibold text-white'>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/'>Home</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/menu'>Menu</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/blog'>Blog</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/pages'>Pages</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/about'>About</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/shop'>Shop</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/signup'>Contact</Link></li>
        </ul>

        <div className='relative mb-12 sm:mb-0 -top-6'>
          <a href="www.mysite.com" className='w-52 hover:scale-105 transition-all text-2xl text-white'>Food<span className='text-amber-500'>tuck</span></a>
        </div>

        <div className="hidden relative left-48 md:flex items-center">
          
            <Input type="search" placeholder="Search..." className="bg-transparent border border-amber-500 rounded-full py-2 px-4 pr-10 focus:outline-none" />
               <Search className="w-5 h-5 relative -left-10" />          
          
          <Link href="/shop/shoppingcart">
            <PiHandbag className="w-6 h-6" />
          </Link>
        </div>

        {/* Menu */}
        <FiMenu className='absolute -left-[100px] xl:hidden block text-5xl cursor-pointer text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <div className={`absolute xl:hidden top-[90px] -left-[120px] w-[500px] bg-stone-900 text-white rounded flex flex-col items-start gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} >
          <ul>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/'>Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/menu'>Menu</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/blog'>Blog</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/pages'>Pages</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/about'>About</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/shop'>Shop</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/contact'>Contact</Link></li>

          </ul>

        </div>

      </nav>

      {/* Hero Content */}
      <div className="container mx-auto mt-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 pl-6">
          <h2 className="text-2xl md:text-3xl text-amber-500 mb-2">Its Quick & Amusing!</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-amber-500">Th</span>e Art of speed
            <br />
            food Quality
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-amber-500 rounded-full text-neutral-200 hover:bg-amber-600 transition-color z-10"
          >
            See Menu
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={heroImg}
            alt="Featured dish presentation"
            width={877}
            height={670}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-6">
        <div className="w-[2px] h-[158px] bg-white"></div>
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-amber-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="text-amber-500 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-amber-500 transition-colors">
            <FaPinterestP />
          </a>
        </div>
        <div className="w-[2px] h-[147px] bg-white"></div>
      </div>
    </div>
  )
}

