import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/aboutBg.png'
import Nav from '@/components/Nav';
import { ChevronRight } from 'lucide-react';
import FoodMenu from '@/components/FoodMenu';
import WhyChoose from '@/components/WhyChoose';
import AboutUs from '@/components/AboutUs';
import TeamMember from '@/components/TeamMember';
import Testimony from '@/components/Testimony';
import Footer from '@/components/Footer';


function About() {
  return (
    <main className='h-[5000px]'>
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

          <Nav />

          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">About</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <Link href='/about' className="text-amber-500" aria-current="page">About</Link>
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
      <div className='sm:w-full sm:absolute sm:top-[4800px]'>
        <Footer />
      </div>

    </main>
  )
}

export default About
