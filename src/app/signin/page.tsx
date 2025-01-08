import Image from 'next/image'

import { ChevronRight, Lock } from 'lucide-react'
import bgPic from '/public/images/menutop.png'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { BsEnvelope } from 'react-icons/bs'
import Google from '/public/images/Google.png'
import Apple from '/public/images/Apple.png'
import Nav from '@/components/Nav'
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const SignIn = () => {
    return (
        <main className='w-full h-[1800px]' >
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Nav />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Signup</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <a href="/" className="grow text-white hover:text-amber-500">Home</a>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/signup' className="text-amber-500" aria-current="page">Signup</Link>
                    </nav>
                </div>
            </div>
            {/* Mid Section */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
                    <h2 className='text-2xl font-semibold mb-6'>Sign In</h2>

                    <div className="space-y-4">                        

                        <div className="relative">
                            <Input placeholder='Email' className='w-full pl-10 border border-solid border-slate-400 rounded' />
                            <BsEnvelope className='w-5 h-5 absolute top-2 left-3 text-gray-400' />
                        </div>

                        <div className="relative">
                            <Input placeholder='Password' type="password" className='w-full pl-10 border border-solid border-slate-400 rounded' />
                            <Lock className='w-5 h-5 absolute top-2 left-3 text-gray-400' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Input type='checkbox' className='w-4 h-4' id="remember" />
                        <label htmlFor="remember">Remember Me?</label>
                    </div>

                    <button className='w-full py-2 bg-amber-500 text-white font-semibold text-center rounded hover:bg-amber-600 transition-colors'>
                        Sign In
                    </button>

                    <p className='text-right'><a href="#" className="text-blue-500 hover:underline">Forgot Password?</a></p>

                    <div className="relative py-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">OR</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className='w-full py-2 px-4 border border-solid border-slate-400 flex items-center justify-center space-x-2 rounded hover:bg-gray-50 transition-colors'>
                            <Image src={Google} alt='Google Logo' width={24} height={24} />
                            <span>Sign in with Google</span>
                        </button>

                        <button className='w-full py-2 px-4 border border-solid border-slate-400 flex items-center justify-center space-x-2 rounded hover:bg-gray-50 transition-colors'>
                            <Image src={Apple} alt='Apple Logo' width={24} height={24} />
                            <span>Sign in with Apple</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='sm:w-full sm:absolute sm:top-[1050px]'>
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

        </main>
    )
}

export default SignIn