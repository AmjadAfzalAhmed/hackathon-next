import Image from 'next/image'
import bgPic from '/public/images/menutop.png'
import image20 from '/public/images/img20.png'
import image21 from '/public/images/img21.png'
import image22 from '/public/images/img22.png'
import image23 from '/public/images/img23.png'
import image24 from '/public/images/img24.png'
import stars from '/public/images/Stars.png'
import card1 from '/public/images/imgs1.png'
import card2 from '/public/images/chocolate.png'
import card3 from '/public/images/imgs3.png'
import card4 from '/public/images/imgs1.png'
import icon from '/public/images/muffIco.png'
import arrows from '/public/images/arrowIco.png'
import { GoBriefcase } from "react-icons/go";
import { BiGitCompare } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaMinus, FaPlus, FaTwitter, FaVimeo, FaYoutubeSquare } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link'
import { ChevronRight, Search, UserRound } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'
import Footer from '@/components/Footer'

function ShopDetails() {
    return (
        <div className='w-[1920px] h-[3177px]'>
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
                        <Link href="/shopdetails">Shop</Link>
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
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Shop Details</h1>

                    <div className='w-[190px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-6 h-6 text-white' />
                        <Link href='/shop' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Shop</Link>
                    </div>

                </div>

            </div>
            {/* Header ends here */}

            {/* Section 1 */}
            <div className="rounded-none w-[1320px] h-[718px] absolute top-[560px] left-[300px]">
                <div className="flex gap-5 max-md:flex-col">
                    <div className=" flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-6">
                                        <Image
                                            src={image20}
                                            alt="Thumbnail view of chicken chup dish"
                                            className="object-contain aspect-[1.02] w-[132px]"
                                        />
                                        <Image
                                            src={image21}
                                            alt="Second thumbnail view of chicken chup dish"
                                            className="object-contain mt-6 rounded-md aspect-[1.02] w-[132px]"
                                        />
                                        <Image
                                            src={image22}
                                            alt="Third thumbnail view of chicken chup dish"
                                            className="object-contain mt-6 rounded-md aspect-[1.02] w-[132px]"
                                        />
                                        <Image
                                            src={image23}
                                            alt="Fourth thumbnail view of chicken chup dish"
                                            className="object-contain mt-6 rounded-md aspect-[1.02] w-[132px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                                    <Image
                                        src={image24}
                                        alt="Main large view of Yummy Chicken Chup dish"
                                        className="object-contain grow w-full rounded-md aspect-[0.82] max-md:mt-6 max-md:max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-wrap gap-5 justify-between items-start self-stretch w-full max-md:max-w-full">
                                <div className="px-4 py-1 mt-1 text-sm leading-loose text-white bg-amber-500 rounded-md" role="status">
                                    In stock
                                </div>
                                <div className="flex gap-4 text-lg leading-none whitespace-nowrap text-zinc-500">
                                    <button className="flex gap-1" aria-label="Previous product">
                                        <FaArrowLeft className="object-contain shrink-0 self-start w-6 aspect-square" />
                                        <span>Prev</span>
                                    </button>
                                    <button className="flex gap-1" aria-label="Next product">
                                        <FaArrowRight className="object-contain shrink-0 self-start w-6 aspect-square" />
                                        <span>Next</span>
                                    </button>
                                </div>
                            </div>
                            <h1 className="mt-2 text-5xl font-bold leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl">
                                Yummy Chicken Chup
                            </h1>
                            <p className="self-stretch mt-6 text-lg leading-7 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
                                vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                                mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </p>
                            <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid bg-neutral-200 border-neutral-200 max-md:mr-2" />
                            <div className="flex gap-4 items-end mt-8">
                                <div className="flex flex-col self-start">
                                    <div className="self-start text-3xl font-bold leading-none text-zinc-800" aria-label="Price: 54 dollars">
                                        54.00$
                                    </div>
                                    <div className="flex gap-3.5 mt-5">
                                        <Image
                                            src={stars}
                                            alt="Product rating stars"
                                            className="object-contain shrink-0 max-w-full aspect-[5.81] w-[116px]"
                                        />
                                        <div className="shrink-0 my-auto w-px h-4 border border-solid border-neutral-400"></div>
                                    </div>
                                </div>
                                <div className="mt-14 text-base text-zinc-500 max-md:mt-10" aria-label="Rating: 5.0 out of 5">
                                    5.0 Rating
                                </div>
                                <div className="shrink-0 mt-16 w-px h-5 border border-solid border-neutral-400 max-md:mt-10"></div>
                                <div className="mt-14 text-base text-zinc-500 max-md:mt-10" aria-label="22 customer reviews">
                                    22 Review
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-none text-zinc-800">
                                Dictum/cursus/Risus
                            </div>
                            <form className="flex gap-4 mt-6">
                                <div className="flex gap-6 items-center px-5 text-xl font-bold leading-snug whitespace-nowrap border border-solid border-zinc-500 text-zinc-800">
                                    <button type="button" aria-label="Decrease quantity">
                                        <FaMinus className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                                    </button>
                                    <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-500 border-zinc-500 h-[50px]"></div>
                                    <label className="sr-only">Quantity</label>
                                    <input type="number" id="quantity" value="1" min="1" className="self-stretch my-auto w-8 text-center" aria-label="Product quantity" />
                                    <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-500 border-zinc-500 h-[50px]"></div>
                                    <button type="button" aria-label="Increase quantity">
                                        <FaPlus className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                                    </button>
                                </div>
                                <button type="submit" className="flex gap-2 px-5 py-3 text-lg leading-none text-white bg-amber-500">
                                    <GoBriefcase className="object-contain shrink-0 my-auto w-5 aspect-square" />
                                    <span>Add to cart</span>
                                </button>
                            </form>
                            <hr className="shrink-0 self-stretch mt-8 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
                            <div className="flex gap-4 mt-6 text-lg leading-none text-neutral-600">
                                <button className="flex gap-2">
                                    <CiHeart className="object-contain shrink-0 my-auto w-5 aspect-square" />
                                    <span>Add to Wishlist</span>
                                </button>
                                <button className="flex gap-2 whitespace-nowrap">
                                    <BiGitCompare className="object-contain shrink-0 my-auto w-5 aspect-square" />
                                    <span>Compare</span>
                                </button>
                            </div>
                            <div className="flex gap-2 mt-2 text-lg leading-none whitespace-nowrap">
                                <span className="grow text-zinc-800">Category:</span>
                                <span className="text-neutral-600">Pizza</span>
                            </div>
                            <div className="flex gap-2 mt-2 text-lg leading-none">
                                <span className="text-zinc-800">Tag:</span>
                                <span className="text-neutral-600">Our Shop</span>
                            </div>
                            <div className="flex gap-1.5 mt-6 text-lg leading-none text-zinc-800">
                                <span className="grow">Share :</span>
                                <FaYoutubeSquare className="object-contain shrink-0 self-start max-w-full aspect-[7.69] w-[184px]" />
                                <FaFacebook />
                                <FaTwitter />
                                <FaVimeo />
                                <AiFillInstagram />
                            </div>
                            <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid bg-neutral-200 border-neutral-200 max-md:mr-2.5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2     */}

            <div className='w-[1320px] h-[458px] absolute top-[1304px] left-[300px]'>
                <div className='flex items-center gap-6'>
                    <button className='w-[165px] h-[50px] bg-amber-500 text-white font-medium text-2xl'>Description</button> <p>Reviews (24)</p>
                </div>
                <div className='flex flex-col gap-10 mt-8'>
                    <p className='w-[1372px] h-[72px]'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi
                        sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor
                        malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae.
                        Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>

                    <p className='w-[1372px] h-[72px]'>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec.
                        Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam
                        accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu
                        vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
                </div>
                <div className='flex flex-col mt-8 w-[476px] h-184px self-start'>
                    <p className='font-medium mb-3'>Key Benefits</p>
                    <ul className='list-disc'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id nisl.</li>
                        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                        <li>Mauris eget diam magna, in blandit turpis.</li>
                    </ul>
                </div>

            </div>

            {/* Section 3 */}

            <div className='w-[1320px] h-[401px] absolute top-[1882px] left-[300px]'>
                <div className='flex justify-between mb-8'>
                    <p className='text-3xl font-bold'>Similar Products</p>
                    <Image src={arrows} alt='arrows' width={88} height={39} />
                </div>
                <div className="cards flex gap-6">
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
                        <Image src={icon} alt='icons' width={146} height={34} className='relative top-[-200px] left-20 ' />
                    </div>
                    <div className="card3 w-[312px] h-[330px]">
                        <Image src={card3} alt='fresh lime' width={312} height={267} />
                        <p className='text-xl font-bold mt-3'>Burger</p>
                        <div className='flex gap-2 mt-3'>
                            <p className='text-amber-500'>$21.00</p>
                        </div>
                    </div>
                    <div className="card4 w-[312px] h-[330px]">
                        <Image src={card4} alt='fresh lime' width={312} height={267} />
                        <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                        <div className='flex gap-2 mt-3'>
                            <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='absolute top-[2403px]'>
                <Footer />
            </div>

        </div>
    )
}

export default ShopDetails
