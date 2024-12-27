import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'

function page() {
  return (
    <div>
      <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
        <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
        <Link href="/pages">Pages</Link>
        <Link href="/pages/chefs">Chefs</Link>
        <Link href="/pages/check-out">Chekcout</Link>
        <Link href="/pages/faq">FAQ</Link>
        <Link href="/pages/error">Error</Link>

      </nav>

      <div className="w-[1920px] h-[410px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px] z-100'>
          <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Pages Main</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[897px]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-5 h-5 text-white' />
            <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Pages</Link>
          </div>

        </div>


      </div>
    </div>
  )
}

export default page
