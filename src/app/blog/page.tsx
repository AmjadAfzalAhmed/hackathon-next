import { ArrowUpRight, ChevronRight, Search, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiHandbag } from "react-icons/pi"
import bgPic from '/public/images/menutop.png'
import blogPic1 from '/public/images/blogPic1.png'
import admin from '/public/images/Admin.png'
import calendar from '/public/images/Calendar.png'
import sect2 from '/public/images/sec2.png'
import sect3 from '/public/images/sec3.png'
import sect4 from '/public/images/sec4.png'
import prince from '/public/images/prince.png'
import review from '/public/images/review.png'
import Footer from '@/components/Footer'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import recent1 from '/public/images/recent1.png'
import recent2 from '/public/images/recent2.png'
import recent3 from '/public/images/recent3.png'
import recent4 from '/public/images/recent4.png'
import filter1 from '/public/images/filter1.png'
import filter2 from '/public/images/filter2.png'
import filter3 from '/public/images/filter3.png'
import filter4 from '/public/images/filter4.png'
import filter5 from '/public/images/filter5.png'
import photo1 from '/public/images/photo1.png'
import photo2 from '/public/images/photo2.png'
import photo3 from '/public/images/photo3.png'
import photo4 from '/public/images/photo4.png'
import photo5 from '/public/images/photo5.png'
import photo6 from '/public/images/photo6.png'
import { Input } from '@/components/ui/input'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

function Blog() {
    return (
        <div className='w-[1920px] h-[5019px]'>
            {/* Header */}
            <div className="w-[1920px] min-h-[90px]  flex items-center bg-stone-950 " >
                <div className="w-[1320px] h-8 absolute top-[29px] left-40 flex flex-wrap gap-10 items-center">
                    <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

                        <span className="text-white">Food</span>

                        <span className="text-amber-500">tuck</span>
                    </div>
                    <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-72 gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
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
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Blog List</h1>

                    <div className='w-[173px] h-7 flex items-center absolute top-[274px] left-[870px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-5 h-5 text-white'/>                        
                        <Link href='/blog/blogdetails' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>BlogDetails</Link>
                    </div>

                </div>

            </div>
            {/* Header ends here */}

            {/* Sect.1 */}
            <div className="flex flex-col items-start text-base max-w-[872px] min-h-[830px] absolute top-[550px] left-[300px] max-lg:top-[400px] max-lg:left-[100px] max-md:relative max-md:top-auto max-md:left-auto max-md:min-h-auto max-md:max-w-full">
                <div
                    className="flex relative flex-col items-start self-stretch px-6 pt-6 pb-96 w-full text-white whitespace-nowrap min-h-[520px] max-md:px-4 max-md:pb-24 max-md:min-h-auto"
                >
                    <Image
                        src={blogPic1}
                        className="object-cover absolute inset-0 w-full h-full"
                        alt="Featured blog post background image"
                    />
                    <div
                        className="relative px-4 pt-3 mb-0 bg-amber-500 rounded-md h-[60px] w-[60px] max-md:h-[50px] max-md:w-[50px] max-md:mb-2.5"
                        aria-label="Post month"
                    >
                        <p className="text-sm max-md:text-xs">14</p>
                        <p className="text-sm max-md:text-xs">Feb</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-4 text-neutral-600 max-md:flex-col max-md:gap-1">
                    <Image
                        src={calendar}
                        className="object-contain shrink-0 w-6 aspect-square max-md:w-5"
                        alt="Calendar icon"
                    />
                    <Image
                        src={admin}
                        className="w-80 max-md:w-5"
                        alt="Admin icon"
                    />
                </div>
                <h2
                    className="mt-4 text-2xl font-bold leading-none text-zinc-800 max-md:text-lg max-md:leading-tight"
                >
                    10 Reasons To Do A Digital Detox Challenge
                </h2>
                <p className="mt-6 leading-6 text-neutral-600 w-[648px] max-md:w-full">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat
                </p>
                <Link
                    href="/blog/blog-details"
                    className="flex gap-2.5 justify-center items-center px-8 py-3.5 mt-6 text-amber-500 rounded-md border border-amber-500 border-solid max-md:px-4 max-md:py-2"
                    aria-label="Read more about Digital Detox Challenge"
                >
                    <span className="self-stretch my-auto text-sm">Read More</span>
                    <ArrowUpRight className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px] max-md:w-4" />
                </Link>
            </div>


            {/* Sect.2 */}
            <div className="flex flex-col items-start text-base max-w-[872px] min-h-[830px] absolute top-[1416px] left-[300px] ">
                <div
                    className="flex relative flex-col items-start self-stretch px-6 pt-6 pb-96 w-full text-white whitespace-nowrap min-h-[520px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
                >
                    <Image
                        src={sect2}
                        className="object-cover absolute inset-0 size-full"
                        alt="Featured blog post background image"
                    />
                    <div
                        className="relative px-4 pt-3 pb-2 mb-0 bg-amber-500 rounded-md h-[60px] w-[60px] max-md:mb-2.5"
                        aria-label="Publication month"
                    >
                        <p>14</p>
                        <p>Feb</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-4 text-neutral-600" >
                    <Image
                        src={calendar}
                        className="object-contain shrink-0 w-6 aspect-square"
                        alt="Calendar icon"
                    />
                    <Image
                        src={admin}
                        alt='admin'
                    />

                </div>
                <h2
                    className="mt-4 text-2xl font-bold leading-none text-zinc-800 max-md:max-w-full"
                >
                    Traditional Soft Pretzels with Sweet Beer Cheese
                </h2>

                <p className="mt-6 leading-6 text-neutral-600 w-[648px] max-md:max-w-full">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat
                </p>
                <button
                    className="flex gap-2.5 justify-center items-center px-8 py-3.5 mt-6 text-amber-500 rounded-md border border-amber-500 border-solid max-md:px-5"
                    aria-label="Read more about Digital Detox Challenge"
                >
                    <span className="self-stretch my-auto">Read More</span>
                    <ArrowUpRight
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"

                    />
                </button>
            </div>

            {/* Sect.3 */}
            <div className="flex flex-col items-start text-base max-w-[872px] min-h-[830px] absolute top-[2302px] left-[300px]" >
                <div
                    className="flex relative flex-col items-start self-stretch px-6 pt-6 pb-96 w-full text-white whitespace-nowrap min-h-[520px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
                >
                    <Image
                        src={sect3}
                        className="object-cover absolute inset-0 size-full"
                        alt="Blog post featured background image"
                    />
                    <div
                        className="relative px-4 pt-3 pb-2 mb-0 bg-amber-500 rounded-md h-[60px] w-[60px] max-md:mb-2.5"
                        aria-label="Publication month"
                    >
                        <p>14</p>
                        <p>Feb</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-4 text-neutral-600" >
                    <Image
                        src={calendar}
                        className="object-contain shrink-0 w-6 aspect-square"
                        alt="Calendar icon"
                    />
                    <Image
                        src={admin}
                        alt='admin'
                    />

                </div>
                <h1
                    className="mt-4 text-2xl font-bold leading-none text-zinc-800 max-md:max-w-full"
                >
                    The Ultimate Hangover Burger: Egg in a Hole Burger
                </h1>

                <p className="mt-6 leading-6 text-neutral-600 w-[648px] max-md:max-w-full">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat
                </p>
                <button
                    className="flex gap-2.5 justify-center items-center px-8 py-3.5 mt-6 text-amber-500 rounded-md border border-amber-500 border-solid max-md:px-5"
                    aria-label="Read more about Digital Detox Challenge"
                >
                    <span className="self-stretch my-auto">Read More</span>
                    <ArrowUpRight
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"

                    />
                </button>
            </div>

            {/* Sect.4 */}
            <div className="flex flex-col items-start text-base max-w-[872px] min-h-[830px] absolute top-[3188px] left-[300px]">
                <div
                    className="flex relative flex-col items-start self-stretch px-6 pt-6 pb-96 w-full text-white whitespace-nowrap min-h-[520px] max-md:px-5 max-md:pb-24 max-md:max-w-full"

                >
                    <Image
                        src={sect4}
                        className="object-cover absolute inset-0 size-full"
                        alt="Featured blog post background image"
                    />
                    <div
                        className="relative px-4 pt-3 pb-2 mb-0 bg-amber-500 rounded-md h-[60px] w-[60px] max-md:mb-2.5"
                        aria-label="Publication month"
                    >
                        <p>14</p>
                        <p>Feb</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-4 text-neutral-600" >
                    <Image
                        src={calendar}
                        className="object-contain shrink-0 w-6 aspect-square"
                        alt="Calendar icon"
                    />
                    <Image
                        src={admin}
                        alt='admin'
                    />

                </div>
                <h2
                    className="mt-4 text-2xl font-bold leading-none text-zinc-800 max-md:max-w-full"
                >
                    My Favorite Easy Black Pizza Toast Recipe
                </h2>

                <p className="mt-6 leading-6 text-neutral-600 w-[648px] max-md:max-w-full">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat
                </p>
                <button
                    className="flex gap-2.5 justify-center items-center px-8 py-3.5 mt-6 text-amber-500 rounded-md border border-amber-500 border-solid max-md:px-5"
                    aria-label="Read more about Digital Detox Challenge"
                >
                    <span className="self-stretch my-auto">Read More</span>
                    <ArrowUpRight
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"

                    />
                </button>
            </div>

            {/* Navigator */}
            <div className='w-[450px] h-[61px] absolute top-[4074px] left-[583px]'>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className='w-10 h-10 mr-2 text-amber-500 text-xl border'>1</PaginationLink>
                                <PaginationLink href="#" className='bg-amber-500 text-white w-10 h-10 relative -top-1'>2</PaginationLink>
                                <PaginationLink href="#" className='w-10 h-10 ml-2 text-amber-500 text-xl border'>3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="/blog/blogdetails" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>

            {/* Sidebar */}
            <div className="flex flex-col mx-auto w-full max-w-[424px] min-h-[2501px] absolute top-[530px] left-[1196px]">

                <div className="relative w-[421px] h-[70px] my-auto">
                    <Input
                        type="text"
                        placeholder="Search Your Keyword"
                        className="w-full h-full border border-solid rounded-none border-neutral-200 bg-transparent focus:outline-none pr-[76px]"
                    />
                    <div className="absolute right-0 top-0 flex items-center justify-center w-[76px] h-[70px] bg-amber-500">
                        <Search className="text-white" />
                    </div>
                </div>

                <div className="flex flex-col items-center px-16 py-9 mt-6 w-full text-base border border-solid border-neutral-200 text-zinc-500">
                    <Image
                        src={prince}
                        alt="Profile picture of Prince Miyako"
                        className="object-contain max-w-full aspect-[0.98] w-[115px] rounded-full"
                    />
                    <h2 className="mt-6 text-xl font-bold leading-snug text-center text-zinc-800">
                        Prince Miyako
                    </h2>
                    <p className="mt-3.5 text-center">Blogger/Photographer</p>
                    <div className="flex gap-2.5 mt-5 max-w-full text-sm leading-loose w-[161px]">
                        <Image
                            src={review}
                            alt="5 star rating"
                            className="object-contain shrink-0 self-start mt-1 aspect-[7.25] w-[87px]"
                        />
                        <span>(1 Review)</span>
                    </div>
                    <p className="self-stretch mt-3.5 leading-6 text-center">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit.Veritatis distinctio, odio
                        <br />
                        eligendi suscipit reprehenderit atque
                    </p>
                    <div className="flex gap-4 mt-9 max-w-full w-[102px]" aria-label="Social Media Links">
                        <a href="#" className="text-zinc-800" aria-label="Facebook"><div><FaFacebookF /></div></a>
                        <a href="#" className="text-zinc-800" aria-label="Twitter"><div><FaTwitter /> </div></a>
                        <a href="#" className="text-zinc-800" aria-label="Instagram"><div><FaInstagram /> </div></a>
                        <a href="#" className="text-zinc-800" aria-label="LinkedIn"><div><FaPinterest /> </div></a>
                    </div>
                </div>

                <section className="flex flex-col items-start px-12 py-8 mt-6 w-full border border-solid border-neutral-200 stroke-neutral-200">
                    <h2 className="text-xl font-bold leading-snug text-zinc-800">Recent Post</h2>
                    <article className="flex gap-4 mt-6">
                        <Image
                            src={recent1}
                            alt="Recent blog post thumbnail"
                            className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
                        />
                        <div className="flex flex-col self-start">
                            <time className="self-start text-sm leading-loose text-zinc-500">June 22, 2020</time>
                            <h3 className="mt-5 text-base leading-6 text-neutral-600">
                                Lorem ipsum dolor sit cing
                                <br />
                                elit, sed do.
                            </h3>
                        </div>
                    </article>
                    <hr className="object-contain self-stretch mt-3.5 w-full" />

                    <article className="flex gap-4 mt-4">
                        <Image
                            src={recent2}
                            alt="Recent blog post thumbnail"
                            className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
                        />
                        <div className="flex flex-col self-start">
                            <time className="self-start text-sm leading-loose text-zinc-500">June 22, 2020</time>
                            <h3 className="mt-5 text-base leading-6 text-neutral-600">
                                Lorem ipsum dolor sit cing
                                <br />
                                elit, sed do.
                            </h3>
                        </div>
                    </article>
                    <hr className="object-contain mt-3.5 w-full" />

                    <article className="flex gap-4 mt-4">
                        <Image
                            src={recent3}
                            alt="Recent blog post thumbnail"
                            className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
                        />
                        <div className="flex flex-col self-start">
                            <time className="self-start text-sm leading-loose text-zinc-500">June 22, 2020</time>
                            <h3 className="mt-5 text-base leading-6 text-neutral-600">
                                Lorem ipsum dolor sit cing
                                <br />
                                elit, sed do.
                            </h3>
                        </div>
                    </article>
                    <hr className="object-contain self-stretch mt-3.5 w-full" />

                    <article className="flex gap-4 mt-4">
                        <Image
                            src={recent4}
                            alt="Recent blog post thumbnail"
                            className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
                        />
                        <div className="flex flex-col self-start">
                            <time className="self-start text-sm leading-loose text-zinc-500">June 22, 2020</time>
                            <h3 className="mt-5 text-base leading-6 text-neutral-600">
                                Lorem ipsum dolor sit cing
                                <br />
                                elit, sed do.
                            </h3>
                        </div>
                    </article>
                    <hr className="object-contain self-stretch mt-3.5 w-full" />
                </section>

                <section className="flex flex-col px-14 py-8 mt-6 w-full text-base border border-solid border-neutral-200 stroke-neutral-200">
                    <h2 className="self-start text-xl font-bold leading-snug text-zinc-800">Filter By Menu</h2>
                    <ul className="w-full list-none">
                        <li className="flex gap-5 justify-between mt-6 w-full">
                            <div className="flex gap-4 font-bold text-zinc-800">
                                <Image
                                    src={filter1}
                                    alt="Chicken Fry"
                                    className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                                />
                                <span className="my-auto">Chicken Fry</span>
                            </div>
                            <span className="my-auto text-center text-zinc-800">26</span>
                        </li>

                        <li className="flex gap-5 justify-between mt-4 w-full">
                            <div className="flex gap-4 font-bold text-zinc-800">
                                <Image
                                    src={filter2}
                                    alt="Burger Food"
                                    className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                                />
                                <span className="my-auto">Burger Food</span>
                            </div>
                            <span className="my-auto text-center text-zinc-800">46</span>
                        </li>

                        <li className="flex gap-5 justify-between mt-4 w-full">
                            <div className="flex gap-4 font-bold text-zinc-800">
                                <Image
                                    src={filter3}
                                    alt="Pizza"
                                    className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                                />
                                <span className="my-auto">Pizza</span>
                            </div>
                            <span className="my-auto text-center text-zinc-800">16</span>
                        </li>

                        <li className="flex gap-5 justify-between mt-4 w-full">
                            <div className="flex gap-4 font-bold text-zinc-800">
                                <Image
                                    src={filter4}
                                    alt="Fresh Fruits"
                                    className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                                />
                                <span className="my-auto">Fresh Fruits</span>
                            </div>
                            <span className="my-auto text-center text-zinc-800">36</span>
                        </li>

                        <li className="flex gap-5 justify-between mt-4 w-full">
                            <div className="flex gap-4 font-bold text-zinc-800">
                                <Image
                                    src={filter5}
                                    alt="Vegetables"
                                    className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                                />
                                <span className="my-auto">Vegetables</span>
                            </div>
                            <span className="my-auto text-center text-zinc-800">16</span>
                        </li>
                    </ul>
                </section>

                <section className=" max-w-[423px] min-h-[308px] flex flex-col px-10 py-8 mt-6 text-sm leading-loose border border-solid border-neutral-200 stroke-neutral-200">
                    <h2 className="text-xl font-bold leading-snug text-zinc-800">Popular Tags</h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Sandwich
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Tikka
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            BBQ
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Restaurant
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-white bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Chicken Sharma
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Health
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Fastfood
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Food
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Pizza
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Burger
                        </button>
                        <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                            Chicken
                        </button>
                    </div>
                </section>

                <section className="flex flex-col px-10 py-8 mt-6 w-full border border-solid border-neutral-200 stroke-neutral-200">
                    <h2 className="self-start text-xl font-bold leading-snug text-zinc-800">Photo Gallery</h2>
                    <div className="grid grid-cols-3 gap-3.5 mt-6">
                        <Image
                            src={photo1}
                            alt="Gallery photo 1"
                            className="object-contain aspect-[1.2] w-[110px]"
                        />
                        <Image
                            src={photo2}
                            alt="Gallery photo 2"
                            className="object-contain aspect-[1.2] w-[110px]"
                        />

                        <Image
                            src={photo3}
                            alt="Gallery photo 3"
                            className="object-contain aspect-[1.2] w-[110px]"
                        />
                        <Image
                            src={photo4}
                            alt="Gallery photo 4"
                            className="object-contain aspect-[1.2] w-[110px]"
                        />
                        <Image
                            src={photo5}
                            alt="Gallery photo 5"
                            className="object-contain aspect-[1.2] w-[110px]"
                        />
                        <Image
                            src={photo6}
                            alt="Gallery photo 6"
                            className="object-contain aspect-[1.2] w-[110px]"
                        />
                    </div>
                </section>

                <section className="flex flex-col px-14 py-8 mt-6 w-full border border-solid border-neutral-200 stroke-neutral-200 text-zinc-800">
                    <h2 className="self-start text-xl font-bold leading-snug">Follow Us</h2>
                    <div className="flex gap-3 mt-5 text-lg">
                        <a href="#" className="px-4 py-3.5 bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Facebook">
                            <span className="sr-only">Twitter</span> <FaTwitter />
                        </a>
                        <a href="#" className="px-4 py-3.5 bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Twitter">
                            <span className="sr-only">Youtube</span> <FaYoutube />
                        </a>
                        <a href="#" className="px-5 py-3.5 text-white bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Instagram">
                            <span className="sr-only">Instagram</span> <FaPinterest />
                        </a>
                        <a href="#" className="px-4 py-3.5 text-black bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Pinterest">
                            <span className="sr-only">Pinterest</span> <FaInstagram />
                        </a>
                        <a href="#" className="px-6 py-3.5 bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="YouTube">
                            <span className="sr-only">facebook</span> <FaFacebookF />
                        </a>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <div className='absolute top-[4245px]'>
                <Footer />
            </div>

        </div>
    )
}

export default Blog
