import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link';
import { PiHandbag } from "react-icons/pi";


const Navbar = () => {
    return (
        <div>
            <nav className="w-[1320px] h-[87px] relative left-[300px] top-[45px] flex flex-col" >
                <div className="self-center text-2xl font-bold leading-none text-white">
                    <span className="text-amber-500">Food</span>
                    <span className="text-white">tuck</span>
                </div>
                <div className="flex flex-wrap gap-5 justify-between w-full text-base text-white max-md:max-w-full">
                    <div className="flex gap-5 my-auto max-md:max-w-full">
                        <div className="flex gap-8 whitespace-nowrap">
                            <Link href="/" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Home</Link>
                            <Link href="/menu" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Menu</Link>
                            <Link href="/blog" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Blog</Link>
                            <Link href="/pages" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Pages</Link>
                        </div>
                        <div className="flex gap-px">
                            <Link href="/about" className="grow hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">About</Link>
                            <ChevronDown className="object-contain shrink-0 my-auto w-3 aspect-square" />
                        </div>
                        <div className="flex gap-8">
                            <Link href="/shop" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Shop</Link>
                            <Link href="/contact" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Contact</Link>
                        </div>
                    </div>
                    <div className="flex gap-2 whitespace-nowrap">
                        <form className="flex flex-auto gap-10 px-7 py-4 rounded-3xl border border-amber-500 border-solid max-md:px-5" role="search">
                            
                            <input type="search" id="search-input" placeholder="Search..." className="bg-transparent text-white placeholder-white focus:outline-none" />
                            <button type="submit" aria-label="Search">
                                <Search className="object-contain shrink-0 w-6 aspect-square" />
                            </button>
                        </form>
                        <button aria-label="handbag" className="focus:outline-none focus:ring-2 focus:ring-amber-500">
                            <PiHandbag className="object-contain shrink-0 my-auto w-6 aspect-square" />
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar