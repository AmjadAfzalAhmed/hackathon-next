

import { ChevronRight, Search, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'
import { PiHandbag } from 'react-icons/pi'
import card1 from '/public/images/imgs1.png'
import card2 from '/public/images/chocolate.png'
import card3 from '/public/images/imgs3.png'
import icon from '/public/images/muffIco.png'
import banner from '/public/images/Banner.png'
import product from '/public/images/vector.png'
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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Footer from '@/components/Footer'


function OurShop() {
    return (
        <div className='w-[1920px] h-[3347px]'>
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
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Our Shop</h1>

                    <div className='w-[190px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-6 h-6 text-white' />
                        <Link href='/shop/shopdetails' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Shopdetails</Link>
                    </div>

                </div>

            </div>
            {/* Header ends here */}

            {/* Mid Section */}

            <div className='w-[1320px] h-[1923px] flex flex-col gap-6 absolute top-[560px] left-[300px]'>

                {/* Cards Section */}
                <div className='flex gap-4'>
                    <div className="sort flex gap-7">
                        <div className="one w-[332px] h-[46px] flex items-center gap-4">
                            <p className='font-semibold text-xl'>Sort By:</p>
                            <Select>
                                <SelectTrigger className="w-[236px] h-[46px] rounded-none">
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
                        <div className="two w-[332px] h-[46px] flex items-center gap-4">
                            <p className='font-semibold text-xl'>Show:</p>
                            <Select>
                                <SelectTrigger className="w-[236px] h-[46px] rounded-none">
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

                </div>
                <div className="cards w-[984px]">

                    {/* Row 1 */}
                    <div className="row1 flex gap-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>
                            <Image src={icon} alt='icons' width={146} height={34} className='relative top-[-200px] left-20 ' />
                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="row2 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="row3 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="row4 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="row1 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-[450px] h-[61px] relative top-12 left-[300px]'>
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
                                <PaginationNext href="/shop/shopdetails" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>

            </div>

            {/* Side Section */}

            <div className="side w-[312px] h-[1489px] absolute top-[600px] left-[1318px] flex flex-col">
                <Input placeholder='Search product' className='w-[248px] h-[46px] rounded-none' />
                <div className="absolute top-0 left-[202px] flex items-center justify-center w-[46px] h-[46px] bg-amber-500">
                    <Search className="text-white" />
                </div>
                <div className="category flex flex-col">
                    <p className='font-bold mt-6'>Category</p>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Sandwiches</p>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Burger</p>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Chicken Soup</p>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Drink</p>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Pizza</p>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Non Veg</p>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input type='checkbox' className='w-4 h-4' />
                        <p>Uncategorized</p>
                    </div>

                </div>

                <Image src={banner} alt='banner' width={248} height={286} className='mt-6' />

                <div className='filter flex flex-col gap-2 mt-4 w-[248px] h-[87px]'>
                    <p className='font-bold text-xl'>Filter by Price</p>
                    <Progress value={20} className='w-64 text-amber-500' />
                    <div className='flex justify-between'>
                        <p className='text-gray-300 text-[14px]'>From $0 to $8000</p>
                        <p className='text-gray-300 text-[14px]'>Filter</p>
                    </div>
                </div>

                <div className="latest w-[252px] h-[368px] flex flex-col gap-3">
                    <p className='font-bold text-xl mb-4'>Latest Products</p>
                    <div className="prod1 w-[252px] h-[67px] flex">
                        <Image src={product} alt='product1' width={72} height={65} />
                        <div className='flex flex-col ml-2 gap-2'>
                            <p>Pizza</p>
                            <Image src={star2} alt="stars" />
                            <p>$35.00</p>
                        </div>
                    </div>
                    <div className="prod1 w-[252px] h-[67px] flex">
                        <Image src={product} alt='product1' width={72} height={65} />
                        <div className='flex flex-col ml-2 gap-2'>
                            <p>Cupcake</p>
                            <Image src={star2} alt="stars" />
                            <p>$35.00</p>
                        </div>
                    </div>
                    <div className="prod1 w-[252px] h-[67px] flex">
                        <Image src={product} alt='product1' width={72} height={65} />
                        <div className='flex flex-col ml-2 gap-2'>
                            <p>Cookies</p>
                            <Image src={star2} alt="stars" />
                            <p>$35.00</p>
                        </div>
                    </div>
                    <div className="prod1 w-[252px] h-[67px] flex">
                        <Image src={product} alt='product1' width={72} height={65} />
                        <div className='flex flex-col ml-2 gap-2'>
                            <p>Burger</p>
                            <Image src={star2} alt="stars" />
                            <p>$35.00</p>
                        </div>
                    </div>

                </div>

                <div className="prodTags w-[225px] h-[162px] mt-4">

                    <p className='font-bold text-xl'>Product Tags</p>
                    <div className="grid grid-cols-3 gap-3 text-left mt-4">
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Services</div>
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Our Menu</div>
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Pizza</div>
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Cupcake</div>
                        <div className="text-amber-500 text-[14px] font-bold cursor-pointer hover:underline">Burger</div>
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Cookies</div>
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Our Shop</div>
                        <div className="text-gray-700 text-[14px] cursor-pointer hover:underline">Tandoori Chicken</div>
                    </div>

                </div>
            </div>

            {/* Footer */}

            <div className='absolute top-[2573px]'>
                <Footer />
            </div>

        </div>
    )
}

export default OurShop
