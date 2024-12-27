

import { ChevronRight, Search, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'
import prod from '/public/images/Product.png'
import { PiHandbag } from 'react-icons/pi'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'


function Shoppingcart() {
    return (
        <div className='w-[1920px] h-[2646px]'>
            {/* Header */}
            <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
                <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
                    <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

                        <span className="text-white">Food</span>

                        <span className="text-amber-500">tuck</span>
                    </div>
                    <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
                        <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/pages">Pages</Link>
                        <Link href="/about">About</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/contact">Contact</Link>
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
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Shoppingcart</h1>

                    <div className='w-[190px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-6 h-6 text-white' />
                        <Link href='/shop' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Shop</Link>
                    </div>

                </div>

            </div>
            {/* Header ends here */}

            {/* Mid Section */}
            <Image src={prod} alt='products' className='absolute top-[560px] left-[300px]' />

            {/* Bill Section */}
            <div className='w-[1320px] h-[338px] gap-6 absolute top-[1414px] left-[300px] flex'>
                <div className="couponCode w-[648px] h-[252px]">
                    <p className='font-bold text-[24px]'>Coupon Code</p>
                    <div className='border border-slate-200 rounded w-[648px] h-[188px] p-6'>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                        <Input placeholder='Enter Code Here' className='w-[598px] h-[62px] rounded-md mt-10' />
                        <div className="absolute top-[150px] left-[534px] flex items-center justify-center w-[89px] h-[60px] bg-amber-500 rounded-md cursor-pointer">
                            <Search className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="totalBill w-[648px] h-[337px]">
                    <p className='font-bold text-[24px]'>Total Bill</p>
                    <div className='border border-slate-200 rounded w-[648px] h-[188px] p-6 flex flex-col'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Cart Subtotal</p>
                            <p className='font-bold'>$120.00</p>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <p className='font-normal text-slate-500'>Shipping Charge</p>
                            <p className='font-normal text-slate-500'>$00.00</p>
                        </div>
                        <hr className='w-[648px] mt-8 relative -left-6'/>
                        <div className='flex justify-between mt-3'>
                            <p className='font-bold'>Total Amount</p>
                            <p className='font-bold'>$205.00</p>
                        </div>

                    </div>
                    <button className='w-[648px] h-16 bg-amber-500 text-white mt-2'><Link href="/shop/shoppingcart/check-out">Proceed to checkout</Link></button>
                     
                </div>

            </div>

            {/* Footer */}

            <div className='absolute top-[1872px]'>
                <Footer />
            </div>

        </div>
    )
}

export default Shoppingcart
