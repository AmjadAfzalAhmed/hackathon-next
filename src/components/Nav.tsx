import { ClerkLoaded, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ShoppingBasket, User } from 'lucide-react';
import Link from 'next/link';
import CartIcon from './Cart/CartIcon';
import MobileNav from "./Homepage-Comps/MobileNav";

async function Nav() {
  const user = await currentUser();

  return (
    <div className='bg-black'>
      <nav className='flex justify-between items-center py-4 px-4 sm:px-8 md:px-[150px] drop-shadow-md'>

        {/* Logo */}
        <div className='flex items-center'>
          <a href="www.mysite.com" className='text-2xl text-white hover:scale-105 transition-all'>
            F<span className='text-amber-500'>oo</span>dtuck
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className='hidden lg:flex items-center gap-7 font-semibold text-white ml-10'>
          <li className='hover:text-amber-500 transition-all'><Link href='/'>Home</Link></li>
          <li className='hover:text-amber-500 transition-all'><Link href='/menu'>Menu</Link></li>
          <li className='hover:text-amber-500 transition-all'><Link href='/blog'>Blog</Link></li>
          <li className='hover:text-amber-500 transition-all'><Link href='/about'>About</Link></li>
          <li className='hover:text-amber-500 transition-all'><Link href='/shop'>Shop</Link></li>
          <li className='hover:text-amber-500 transition-all'><Link href='/contact-us'>Contact</Link></li>
        </ul>

        {/* Desktop User Actions */}
        <div className="hidden ml-16 lg:flex items-center gap-4">
          <Link href='/signin'>
            <ClerkLoaded>
              {user ? (
                <div className='flex items-center gap-2'>
                  <UserButton />
                  <div className='flex flex-col'>
                    <p className='text-xs text-gray-200'>Welcome Back</p>
                    <p className='font-semibold text-gray-200'>{user?.fullName}</p>
                  </div>
                </div>
              ) : (
                <SignInButton mode='modal'>
                  <div className='flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition-all'>
                    <User className='text-gray-200 w-5 h-5' />
                    <div className='flex flex-col'>
                      <p className='text-xs font-semibold text-gray-200'>Account</p>
                      <p className='font-semibold text-gray-200'>Login</p>
                    </div>
                  </div>
                </SignInButton>
              )}
            </ClerkLoaded>
          </Link>

          <CartIcon />

          <Link href='/shop/shoppingcart' className='flex items-center gap-2 px-3 py-2 rounded-md shadow-md hover:shadow-none transition-all'>
            <ShoppingBasket className='text-gray-200 w-5 h-5' />
            <div className='flex flex-col'>
              <p className='text-xs font-semibold text-gray-200'>
                <span className='font-bold'>0</span> items
              </p>
              <p className='font-medium text-gray-200'>Orders</p>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </div>
  );
}

export default Nav;