import Image from 'next/image'

// import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa'
import { ChevronRight } from 'lucide-react'
// import { PiHandbag } from 'react-icons/pi'
import bgPic from '/public/images/menutop.png'
import Footer from '@/components/Footer'
import Link from 'next/link'

const page = () => {
    return (
        <main className='w-[1920px] h-[2126px]' >
            {/* Header */}
            <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
                <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
                    <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
                    <Link href="/pages">Pages</Link>
                    <Link href="/pages/chefs">Chefs</Link>
                    <Link href="/pages/check-out">Chekcout</Link>
                    <Link href="/pages/faq">FAQ</Link>
                    <Link href="/pages/error">Error</Link>

                </nav>
            </div>

            <div className="w-[1920px] h-[410px]">
                <Image
                    src={bgPic}
                    className="object-contain w-full aspect-[4.67] -z-10"
                    alt="Decorative banner image"
                />
                <div className='w-[225px] h-[104px] z-100'>
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Error Page</h1>

                    <div className='w-[163px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-5 h-5 text-white' />
                        <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Error</Link>
                    </div>

                </div>

            </div>


            {/* Mid Section */}

            <div
                className="w-[630px] h-[342px] absolute top-[530px] left-[645px] flex flex-col items-center text-lg font-bold rounded-md max-w-[630px]"

                aria-labelledby="error-title"
            >
                <div
                    id="error-title"
                    className="text-8xl leading-none text-amber-500 max-md:text-4xl"
                    aria-label="404 error"
                >
                    404
                </div>
                <div
                    className="self-stretch mt-8 w-full text-3xl leading-none text-zinc-800 max-md:max-w-full"
                >
                    Oops! Look likes something going wrong
                </div>
                <div
                    className="mt-6 leading-7 text-center text-neutral-600 max-md:max-w-full"
                    aria-live="polite"
                >
                    Page Cannot be found! we ll have it figured out in no time.
                    <br />
                    Menwhile, cheek out these fresh ideas:
                </div>
                <a
                    href="/"
                    className="gap-2.5 self-stretch px-12 py-4 mt-8 leading-none text-white bg-amber-500 rounded-md max-md:px-5 text-center hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"

                    aria-label="Return to homepage"
                >
                    Go to home
                </a>
            </div>


            {/* Footer */}
            <div className="footer absolute top-[1373px]">
                <Footer />
            </div>

        </main>
    )
}

export default page