import { ChevronRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'
import banner from '/public/images/Banner.png'
import product from '/public/images/Vector.png'
import star2 from '/public/images/star2.png'

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
import Pagination from '@/components/Pagination'
import Nav from '@/components/Nav'
import { client, foodQuery} from '@/sanity/lib/client';
import Footer from '@/components/Footer'



const foodItems = await client.fetch(foodQuery)

type Foods = {
    _id:number,
    name:string,
    imageUrl:string,
    price:number
}

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
                            {foodItems.map((item:Foods) => (
                                <div key={item._id} className="card w-full">
                                    <Image src={item.imageUrl} alt='product' width={312} height={267} className="w-full h-auto hover:scale-105 duration-150 transition-all" />
                                    <p className='text-xl font-bold mt-3'>{item.name}</p>
                                    <div className='flex gap-2 mt-3'>
                                        <p className='text-amber-500'>${item.price}</p>
                                        
                                    </div>
                                    
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
               <Footer />
            </div>

        </div>
    )
}

export default OurShop
