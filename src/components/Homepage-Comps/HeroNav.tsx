
import { Input } from '@/components/ui/input'
import CartIcon from '../Cart/CartIcon'
import { Search, ShoppingBasket, User } from 'lucide-react'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, UserButton } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs';


export default async function HeroNav() {
  const user = await currentUser();
  console.log(user)

  return (
    <nav className='flex justify-between items-center py-6 px-6 sm:px-4 drop-shadow-md'>

      <ul className='hidden relative -left-[60px] xl:flex items-center gap-10 font-semibold text-white'>
        <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/'>Home</Link></li>
        <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/menu'>Menu</Link></li>
        <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/blog'>Blog</Link></li>
        <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/about'>About</Link></li>
        <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/shop'>Shop</Link></li>
        <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/contact-us'>Contact</Link></li>
      </ul>

      <div className='relative mb-12 sm:mb-0 -top-6'>
        <a href="www.mysite.com" className='w-52 hover:scale-105 transition-all text-2xl text-white'>Food<span className='text-amber-500'>tuck</span></a>
      </div>

      <div className="hidden relative left-20 md:flex items-center justify-center gap-5 font-semibold text-white">

        {/* Search Input with Icon */}
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="bg-transparent border border-amber-500 rounded-full py-2 pl-4 pr-8 focus:outline-none"
          />
          <Search className="w-5 h-5 absolute left-[200px] top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <ClerkLoaded>
          {user ? (<div className='text-sm'><UserButton/>
          <div className='flex flex-col'>
            <p className='text-xs'>Welcome Back</p>
            <p className='font-semibold'>{user?.fullName}</p>

          </div>
          </div>) :
            (<SignInButton mode='modal'>
              <div className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect'>
                <User className='text-gray-200 w-7 h-7'/>
              </div>
              <div className='flex flex-col justify-between'>
                <p className='text-xs font-semibold text-gray-200'>
                  Account
                </p>
                <p className='font-semibold text-gray-200'>Login</p>
              </div>

            </SignInButton>)}
        </ClerkLoaded>

        {/* Cart Icon */}
        <CartIcon />

        {/* Shopping Cart Section */}
        <div className='flex items-center text-sm gap-2 px-3 py-2 rounded-md shadow-md hover:shadow-none hoverEffect'>
          <Link href='shop/shoppingcart' className='flex items-center gap-3'>
            <div>
              <ShoppingBasket className='text-gray-200 w-7 h-7' />
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-xs font-semibold text-gray-200'>
                <span className='font-bold'>0</span> items
              </p>
              <p className='font-semibold text-gray-200'>Orders</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNav />

    </nav>
  )
}