import Image from 'next/image'
import { ChevronRight, Lock } from 'lucide-react'
import bgPic from '/public/images/menutop.png'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { BsEnvelope } from 'react-icons/bs'
import Google from '/public/images/Google.png'
import Apple from '/public/images/Apple.png'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


const SignIn = () => {
    return (
        <main className='w-full h-[1800px]' >
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Nav />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Sign-in</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/signup' className="text-amber-500" aria-current="page">Sign-in</Link>
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
               <Footer />
            </div>

        </main>
    )
}

export default SignIn