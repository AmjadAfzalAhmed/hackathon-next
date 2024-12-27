import Image from 'next/image'
import bgPic from '/public/images/menutop.png'
import chefs1 from '/public/images/chefs1.png'
import chefs2 from '/public/images/chefs2.png'
import chefs3 from '/public/images/chefs3.png'
import chefs4 from '/public/images/chefs4.png'
import chefs5 from '/public/images/chefs5.png'
import chefs6 from '/public/images/chefs6.png'
import chefs7 from '/public/images/chefs7.png'
import chefs8 from '/public/images/chefs8.png'
import chefs9 from '/public/images/chefs9.png'
import chefs10 from '/public/images/chefs10.png'
import chefs11 from '/public/images/chefs11.png'
import chefs12 from '/public/images/chefs12.png'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, Search, UserRound } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'

function OurChefs() {
    return (
        <div className='w-[1920px] h-[2811px]'>
            {/* Header */}
            <div className="w-[1920px] min-h-[90px]  flex items-center bg-stone-950 " >
                <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
                    <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

                        <span className="text-white">Food</span>

                        <span className="text-amber-500">tuck</span>
                    </div>
                    <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
                        <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
                        <Link href="/pages">Pages</Link>
                        <Link href="/pages/chefs">Chefs</Link>
                        <Link href="/pages/check-out">Chekcout</Link>
                        <Link href="/pages/faq">FAQ</Link>
                        <Link href="/pages/error">Error</Link>

                    </nav>
                    <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">
                        <Search className=" absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
                        <UserRound className=" absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
                        <PiHandbag className=" absolute left-[1296px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
                    </div>
                </div>
            </div>

            <div className="w-[1920px] h-[410px]">
                <Image
                    src={bgPic}
                    className="object-contain w-full aspect-[4.67] -z-10"
                    alt="Decorative banner image"
                />
                <div className='w-[225px] h-[104px] z-100'>
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Our Chefs</h1>

                    <div className='w-[173px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-5 h-5 text-white' />
                        <Link href='/blog/blog-details' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Chefs</Link>
                    </div>

                </div>

            </div>




            {/* Header ends here */}

            <div className="w-[1320px] h-[1386px] absolute top-[530px] left-[300px] flex flex-col">
                <div className="w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col" role="list">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs1}
                                    alt="Chef Tahmina Rumi"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Tahmina Rumi</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs2}
                                    alt="Chef Jorina Begum"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Jorina Begum</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center whitespace-nowrap text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs3}
                                    alt="Chef M.Mohammad"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">M.Mohammad</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs4}
                                    alt="Chef Munna Kathy"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Munna Kathy</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col" role="list">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs5}
                                    alt="Chef Tahmina Rumi"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Tahmina Rumi</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs6}
                                    alt="Chef Bisnu devgon"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Bisnu devgon</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs7}
                                    alt="Chef Motin Molladsf"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Motin Molladsf</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs8}
                                    alt="Chef William Rumi"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">William Rumi</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col" role="list">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs9}
                                    alt="Chef Kets william roy"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Kets william roy</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs10}
                                    alt="Chef Mahmud kholil"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Mahmud kholil</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs11}
                                    alt="Chef Ataur Rahman"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Ataur Rahman</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" role="listitem">
                            <div className="flex flex-col grow items-center text-zinc-800 max-md:mt-6">
                                <Image
                                    src={chefs12}
                                    alt="Chef Monalisa holly"
                                    layout='responsive'
                                    className="object-contain self-stretch w-full aspect-[0.82]"
                                />
                                <div className="mt-2.5 text-xl font-bold leading-snug">Monalisa holly</div>
                                <div className="mt-1 text-lg leading-none">Chef</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer absolute top-[2036px]">
                <Footer />
            </div>

        </div>
    )
}

export default OurChefs
