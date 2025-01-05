import Image from 'next/image'
import Link from 'next/link'
import bg from '/public/images/aboutBg.png'
import { PiHandbag, } from "react-icons/pi";
import { ChevronRight, Search, } from 'lucide-react';
import { FiUser } from "react-icons/fi";
import Footer from '@/components/Footer';
import FoodMenu from '@/components/FoodMenu';
import WhyChoose from '@/components/WhyChoose';
import AboutUs from '@/components/AboutUs';
import TeamMember from '@/components/TeamMember';
import Testimony from '@/components/Testimony';

function About() {
  return (
    <main className='h-[5900px]'>
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bg} className="object-cover absolute inset-0 size-full" alt="About section background" />
          <nav className="flex relative flex-col justify-center items-center self-stretch px-16 py-7 w-full bg-stone-950 max-md:px-5 max-md:max-w-full" aria-label="Main navigation">
            <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1320px] max-md:max-w-full">
              <a href="/" className="self-stretch text-2xl font-bold leading-none text-amber-500" aria-label="Foodtuck home">
                F<span className="text-white">oo</span>d<span className="text-amber-500">tuck</span>
              </a>
              <div className="flex flex-wrap gap-8 self-stretch my-auto text-base text-white max-md:max-w-full" >
                <Link href="/" className="grow font-bold text-amber-500" >Home</Link>
                <Link href="/menu" className="hover:text-amber-500" >Menu</Link>
                <Link href="/blog" className="hover:text-amber-500" >Blog</Link>
                <Link href="/pages" className="hover:text-amber-500" >Pages</Link>
                <Link href="/about" className="hover:text-amber-500" >About</Link>
                <Link href="/shop" className="hover:text-amber-500" >Shop</Link>
                <Link href="/contact" className="hover:text-amber-500" >Contact</Link>
              </div>
              <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">

                <Search className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
                <FiUser className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
                <PiHandbag className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />

              </div>
            </div>
          </nav>
          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">About Us</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <a href="/" className="grow text-white hover:text-amber-500">Home</a>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <span className="text-amber-500" aria-current="page">About</span>
          </nav>
        </div>
      </div>

      {/* First Sec */}

      <AboutUs />
      {/* why choose us */}

      <WhyChoose />
      {/* Team Member */}

      <TeamMember />
      {/* What Clients Say  */}
       <Testimony />
      {/* Food Menu */}     
      <FoodMenu />

      {/* Footer */}
      <div className="footer absolute top-[5126px]">
        <Footer />
      </div>

    </main>
  )
}

export default About
