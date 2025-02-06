
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import backG from '/public/images/heroBack.png'
import heroImg from '/public/images/hero.png'
import HeroNav from './HeroNav'


export default function Hero() {
  
  return (
    <div className="relative min-h-screen flex flex-col items-center pb-20 px-4 md:px-0">
      <Image src={backG} alt="Background" className="object-cover absolute inset-0 w-full h-full opacity-10" />

      {/* Navbar */}
      <HeroNav />

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
          <a href="https://www.twitter.com" className="text-white hover:text-amber-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" className="text-amber-500 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.pinterest.com" className="text-white hover:text-amber-500 transition-colors">
            <FaPinterestP />
          </a>
        </div>
        <div className="w-[2px] h-[147px] bg-white"></div>
      </div>
    </div>
  )
}

