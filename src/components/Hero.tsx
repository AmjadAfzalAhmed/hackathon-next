import Image from 'next/image'
import backG from '/public/images/heroBack.png'
import heroImg from '/public/images/hero.png'
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link';
import { PiHandbag } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import pic2 from '/public/images/pic2.png'
import pic3 from '/public/images/pic3.png'
import pic4 from '/public/images/pic4.png'


function Hero() {
  return (

    <div className="flex relative flex-col items-center pb-20 max-lg:w-[1920px] min-h-[950px] max-md:px-5 max-md:pt-24 max-md:w-full">
      <Image src={backG} alt="Background" className="object-cover absolute inset-0 size-full opacity-10" />
      {/* Navbar */}
      <div className="sm:w-[1320px] h-[78px] absolute top-6 flex flex-col">
        <div className="self-center text-2xl font-bold leading-none text-white">
          <span className="text-amber-500">Food</span>
          <span className="text-white">tuck</span>
        </div>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-5 justify-between w-full text-base text-white max-md:max-w-full">
          <div className="flex gap-5 my-auto max-md:max-w-full">
            <div className="flex gap-8 whitespace-nowrap">
              <Link href="/" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Home</Link>
              <Link href="/menu" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Menu</Link>
              <Link href="/blog" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Blog</Link>
              <Link href="/pages" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Pages</Link>
            </div>
            <div className="flex gap-px">
              <Link href="/about" className="grow hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">About</Link>
              <ChevronDown className="object-contain shrink-0 my-auto w-4 h-4 aspect-square" />
            </div>
            <div className="flex gap-8">
              <Link href="/shop" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Shop</Link>
              <Link href="/signup" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Contact</Link>
            </div>
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <form className="flex flex-auto gap-10 px-7 py-4 rounded-3xl border border-amber-500 border-solid max-md:px-5">
              <label className="sr-only">Search</label>
              <input type="search" id="search-input" placeholder="Search..." className="bg-transparent text-white placeholder-white focus:outline-none" />
              <button type="submit" aria-label="Search">
                <Search className="object-contain shrink-0 w-6 aspect-square" />
              </button>
            </form>
            <button aria-label="Shopping cart" className="focus:outline-none focus:ring-2 focus:ring-amber-500">
              <PiHandbag className="object-contain shrink-0 my-auto w-6 h-6 aspect-square" />
            </button>
          </div>
        </nav>
      </div>



      {/* Mid Section */}
      <div className="midSec flex  ">

        {/* Left Section: Social Icons */}
        <div className="heroCont1 w-[25.28px] min-h-[492px] flex flex-col items-center justify-between absolute top-[291px] left-[242px]">

          {/* Line 1 */}
          <div className="line1 w-[158px] h-[2px] -rotate-90 bg-[#ffffff]"></div>

          {/* Social Icons */}
          <div className="socials flex flex-col gap-4">
            <div className="icon1 w-[25.28px] h-[25.21px] flex items-center justify-center text-white">
              <FaFacebookF />
            </div>
            <div className="icon1 w-[25.28px] h-[25.21px] flex items-center justify-center text-[#ff9f0d]">
              <FaTwitter />
            </div>
            <div className="icon1 w-[25.28px] h-[25.21px] flex items-center justify-center text-white">
              <FaPinterestP />
            </div>
          </div>

          {/* Line 2 */}
          <div className="line2 w-[147px] h-[2px] -rotate-90 bg-[#ffffff]"></div>

        </div>


        {/* Center Section: Heading and Content */}

        <div
          className="absolute top-[293px] left-[300px] flex flex-col items-start text-base text-white max-w-[472px] rounded-[30px]"
          aria-label="Quick and Amusing Section"
        >
          <div
            className="text-3xl leading-none text-amber-500"

          >
            Its Quick & Amusing!
          </div>
          <div
            className="self-stretch mt-2 w-full text-6xl font-bold leading-[68px]">

            <span className="text-amber-500">Th</span>
            e Art of speed
            <br />
            food Quality
          </div>
          <div
            className="mt-8 leading-6"

          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Varius sed pharetra dictum neque massa congue
          </div>
          <a
            href="#menu"
            className="px-14 py-5 mt-8 bg-amber-500 rounded-[30px] text-neutral-200 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"

          >
            See Menu
          </a>
        </div>


        {/* Right Section: Featured Dish Image */}
        <div className="absolute flex w-[877.8px] h-[670px] top-[198px] left-[939px]">
          <Image
            src={heroImg}
            alt="Featured dish presentation"
            className="object-cover w-full h-auto"
          />
        </div>

      </div>



      <div className="about w-[1320px] h-[562px] absolute top-[1070px] left-[300px] flex">
        <div className="left w-[562px] h-[562px] flex flex-col text-white">
          <p className='text-[#ff9f0d] font-normal text-[32px]'>about us</p>
          <div className="w-[446px] h-[110px] font-bold text-[48px] leading-14 text-[#ff9f0d]">
            We <span className='text-white'>create the best foody product</span>
          </div>
          <p className='w-[526px] h-[130px] font-normal text-white text-[16px] mt-14 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

          <div className="div flex items-center">
            <TiTick className='w-[17px] h-[12.24px]' /><p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
          <div className="div flex items-center">
            <TiTick className='w-[17px] h-[12.24px]' /><p> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
          </div>
          <div className="div flex items-center">
            <TiTick className='w-[17px] h-[12.24px]' /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <button className='w-[190px] h-[60px] bg-[#ff9f0d] text-white text-[16px] leading-6 rounded-[30px] mt-8'>Read More</button>
        </div>
        <div className="right images flex flex-col gap-3">
          <Image src={pic2} alt='about-pic1' width={660} height={330} className='rounded-[6px]' />
          <div className="lower flex gap-3">
            <Image src={pic3} alt='about-pic2' width={322} height={194} className='rounded-[6px]' />
            <Image src={pic4} alt='about-pic3' width={322} height={194} className='rounded-[6px]' />
          </div>
        </div>
      </div>



    </div>

  )
}

export default Hero
