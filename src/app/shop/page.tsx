import { ChevronRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'
import card1 from '/public/images/imgs1.png'
import card2 from '/public/images/chocolate.png'
import card3 from '/public/images/imgs3.png'
import icon from '/public/images/muffIco.png'
import banner from '/public/images/Banner.png'
import product from '/public/images/Vector.png'
import star2 from '/public/images/star2.png'
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { FaFacebook, FaTwitter,FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import Pagination from '@/components/Pagination'
import Nav from '@/components/Nav'


function OurShop() {
    return (
        <div className='w-full h-[3347px]'>
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Nav />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Shop</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/shop/shopdetails' className="text-amber-500" aria-current="page">Shopdetails</Link>
                    </nav>
                </div>
            </div>
            {/* Header ends here */}

            {/* Mid Section */}
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Main Content */}
                    <div className='flex-1'>
                        {/* Sort Section */}
                        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
                            <div className="flex items-center gap-4">
                                <p className='font-semibold text-xl'>Sort By:</p>
                                <Select>
                                    <SelectTrigger className="w-full sm:w-[236px] h-[46px]">
                                        <SelectValue placeholder="Newest" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="Fresh Lime">Fresh Lime</SelectItem>
                                            <SelectItem value="Country Burger">Country Burger</SelectItem>
                                            <SelectItem value="Chocolate Muffin">Chocolate Muffin</SelectItem>
                                            <SelectItem value="Drinks">Drinks</SelectItem>
                                            <SelectItem value="Pizza">Pizza</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className='font-semibold text-xl'>Show:</p>
                                <Select>
                                    <SelectTrigger className="w-full sm:w-[236px] h-[46px]">
                                        <SelectValue placeholder="Default" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="Fresh Lime">Fresh Lime</SelectItem>
                                            <SelectItem value="Country Burger">Country Burger</SelectItem>
                                            <SelectItem value="Chocolate Muffin">Chocolate Muffin</SelectItem>
                                            <SelectItem value="Drinks">Drinks</SelectItem>
                                            <SelectItem value="Pizza">Pizza</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Product Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(15)].map((_, index) => (
                                <div key={index} className="card w-full">
                                    <Image src={index % 3 === 0 ? card1 : index % 3 === 1 ? card2 : card3} alt='product' width={312} height={267} className="w-full h-auto hover:scale-105 duration-150 transition-all" />
                                    <p className='text-xl font-bold mt-3'>{index % 3 === 0 ? 'Fresh Lime' : index % 3 === 1 ? 'Chocolate Muffin' : 'Burger'}</p>
                                    <div className='flex gap-2 mt-3'>
                                        <p className='text-amber-500'>${index % 3 === 0 ? '38.00' : index % 3 === 1 ? '38.00' : '21.00'}</p>
                                        {index % 3 === 0 && <p className='text-slate-400 line-through'>$45.00</p>}
                                    </div>
                                    {index === 0 && <Image src={icon} alt='icons' width={146} height={34} className='relative -top-[200px] left-1/2 transform -translate-x-1/2' />}
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>

                    {/* Side Section */}
                    <div className="side w-full lg:w-[312px] flex flex-col gap-6">
                        <div className="relative">
                            <Input placeholder='Search product' className='w-full h-[46px]' />
                            <div className="absolute top-0 right-0 flex items-center justify-center w-[46px] h-[46px] bg-amber-500">
                                <Search className="text-white" />
                            </div>
                        </div>

                        <div className="category">
                            <p className='font-bold mb-2'>Category</p>
                            {['Sandwiches', 'Burger', 'Chicken Soup', 'Drink', 'Pizza', 'Non Veg', 'Uncategorized'].map((item, index) => (
                                <div key={index} className='flex items-center gap-4 mt-2'>
                                    <Input type='checkbox' className='w-4 h-4' />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                        <Image src={banner} alt='banner' width={248} height={286} className='w-full h-auto' />

                        <div className='filter'>
                            <p className='font-bold text-xl mb-2'>Filter by Price</p>
                            <Progress value={20} className='w-full text-amber-500' />
                            <div className='flex justify-between mt-2'>
                                <p className='text-gray-300 text-sm'>From $0 to $8000</p>
                                <p className='text-gray-300 text-sm'>Filter</p>
                            </div>
                        </div>

                        <div className="latest">
                            <p className='font-bold text-xl mb-4'>Latest Products</p>
                            {['Pizza', 'Cupcake', 'Cookies', 'Burger'].map((item, index) => (
                                <div key={index} className="prod w-full flex items-center gap-4 mb-4">
                                    <Image src={product} alt={item} width={72} height={65} />
                                    <div className='flex flex-col gap-1'>
                                        <p>{item}</p>
                                        <Image src={star2} alt="stars" />
                                        <p>$35.00</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="prodTags">
                            <p className='font-bold text-xl mb-4'>Product Tags</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                                {['Services', 'Our Menu', 'Pizza', 'Cupcake', 'Burger', 'Cookies', 'Our Shop', 'Tandoori Chicken'].map((tag, index) => (
                                    <div key={index} className={`text-sm cursor-pointer hover:underline ${tag === 'Burger' ? 'text-amber-500 font-bold' : 'text-gray-700'}`}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='sm:w-full sm:absolute sm:top-[2573px]'>
                <footer className="bg-stone-950 text-white">
                    <div className="container mx-auto px-4 py-16 lg:py-32">
                        {/* Newsletter Section */}
                        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:mb-16">
                            <div className="mb-8 lg:mb-0 text-center lg:text-left">
                                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                    <span className="text-amber-500">St</span>ill You Need Our Support ?
                                </h2>
                                <p className="text-base">
                                    Dont wait make a smart & logical quote here. Its pretty easy.
                                </p>
                            </div>
                            <form className="w-full lg:w-auto">
                                <div className="flex flex-col sm:flex-row gap-4 bg-amber-500 p-2 rounded-md">
                                    <input
                                        type="email"
                                        id="emailSubscribe"
                                        className="bg-transparent text-white placeholder-white placeholder-opacity-60 flex-grow px-4 py-2 focus:outline-none"
                                        placeholder="Enter Your Email"
                                        required
                                        aria-label="Email subscription input"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 text-amber-500 bg-white rounded-md hover:bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none transition duration-300"
                                        aria-label="Subscribe to newsletter"
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="border-t border-amber-500 my-10"></div>

                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
                            {/* About Us Section */}
                            <div>
                                <h3 className="text-xl font-bold mb-6">About Us.</h3>
                                <p className="text-base mb-6">
                                    Corporate clients and leisure travelers have been relying on Groundlink
                                    for dependable safe, and professional chauffeured car service in major
                                    cities across World.
                                </p>
                                <div className="flex items-start space-x-4">
                                    <Image
                                        src={watch}
                                        alt="Opening hours icon"
                                        width={77}
                                        height={71}
                                        className="object-contain"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold">Opening Hours</h4>
                                        <p className="text-sm mt-2">Mon - Sat(8.00 - 6.00)</p>
                                        <p className="text-sm">Sunday - Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Useful Links Section */}
                            <nav aria-label="Useful links">
                                <h3 className="text-xl font-bold mb-6">Useful Links</h3>
                                <ul className="space-y-4">
                                    {['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item.toLowerCase()}`} className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition duration-300">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Help Section */}
                            <nav aria-label="Help section">
                                <h3 className="text-xl font-bold mb-6">Help?</h3>
                                <ul className="space-y-4">
                                    {['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition duration-300">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Recent Post Section */}
                            <div>
                                <h3 className="text-xl font-bold mb-6">Recent Post</h3>
                                {[
                                    { title: "Is fastfood good for your body?", date: "February 28, 2022" },
                                    { title: "Change your food habit with organic food", date: "February 28, 2022" },
                                    { title: "Do you like fastfood for your life?", date: "February 28, 2022" }
                                ].map((post, index) => (
                                    <article key={index} className="flex space-x-4 mb-4">
                                        <Image
                                            src={fastFood}
                                            alt={`${post.title} thumbnail`}
                                            width={80}
                                            height={80}
                                            className="object-cover rounded-md"
                                        />
                                        <div>
                                            <h4 className="text-base leading-tight mb-2">{post.title}</h4>
                                            <time className="text-sm opacity-50">{post.date}</time>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="bg-neutral-600 py-6">
                        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                            <p className="text-sm mb-4 sm:mb-0">
                                Copyright © 2022 by Ayeman. All Rights Reserved.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { icon: FaFacebook, label: "Facebook" },
                                    { icon: FaTwitter, label: "Twitter" },
                                    { icon: FaInstagram, label: "Instagram" },
                                    { icon: FaYoutube, label: "YouTube" },
                                    { icon: FaLinkedin, label: "LinkedIn" }
                                ].map((social, index) => (
                                    <Link
                                        key={index}
                                        href={`#${social.label.toLowerCase()}`}
                                        className="bg-white text-stone-900 p-2 rounded-sm hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300"
                                        aria-label={`Visit our ${social.label} page`}
                                    >
                                        <social.icon />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default OurShop
