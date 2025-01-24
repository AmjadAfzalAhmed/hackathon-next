import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import bgPic from '/public/images/menutop.png'
import Nav from '@/components/Nav'
import Link from 'next/link'

function page() {
  return (
    <div className='w-full'>
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

          <Nav />

          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Pages</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <Link href='/pages' className="text-amber-500" aria-current="page">Pages</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default page
