import Image from 'next/image'
import {   ChevronRight  } from 'lucide-react'
import bgPic from '/public/images/menutop.png'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CheckOut from '@/components/CheckOut'


const CheckOutPage = () => {
  return (
    <>
    {/* Header */}
    <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Nav />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Check-Out</h1>
                    <div className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/shop/shoppingcart' className="text-amber-500" aria-current="page">Cart</Link>
                    </div>
                </div>
            </div>

            {/* Mid Section */}
            <CheckOut />

            {/* Footer */}
            <div className="footer">
              <Footer />
            </div>
    </>
  )
}

export default CheckOutPage