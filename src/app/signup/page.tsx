import Image from 'next/image'

// import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa'
import { ChevronRight, User } from 'lucide-react'
// import { PiHandbag } from 'react-icons/pi'
import bgPic from '/public/images/menutop.png'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { BsEnvelope } from 'react-icons/bs'
import { CiLock } from 'react-icons/ci'
import Google from '/public/images/Google.png'
import Apple from '/public/images/Apple.png'



const SignUp = () => {
    return (
        <main className='w-[1920px] h-[2126px]' >
            {/* Header */}
            <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
                <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
                    <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
                    <Link href="/signup">SignUp</Link>
                    <Link href="/pages/check-out">Chekcout</Link>
                    <Link href="/pages/faq">FAQ</Link>
                    <Link href="/pages/error">Error</Link>

                </nav>
            </div>

            <div className="w-[1920px] h-[410px]">
                <Image
                    src={bgPic}
                    className="object-contain w-full aspect-[4.67] -z-10"
                    alt="Decorative banner image"
                />
                <div className='w-[225px] h-[104px] z-100'>
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>FAQ Page</h1>

                    <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-4 h-4 text-white' />
                        <Link href='signup' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Signup</Link>
                    </div>

                </div>

            </div>


            {/* Mid Section */}

            <div className="w-[424px] h-[624px] absolute top-[530px] left-[743px] shadow-lg flex flex-col items-center gap-3">
                <h2 className='w-[76px] h-7 relative left-[-140px] font-semibold'>Sign Up</h2>
                <div className="field1">
                <Input placeholder='Name' className='w-[360px] h-11 pl-10 border border-solid border-slate-400 rounded-none' />
                <User className='w-5 h-5 relative top-[-30px] left-[10px]'/>
                </div>
                <div className="field2">
                <Input placeholder='Email' className='w-[360px] h-11 pl-10 border border-solid border-slate-400 rounded-none' />
                <BsEnvelope className='w-5 h-5 relative top-[-30px] left-[10px]' />
                </div>
                <div className="field3">
                <Input placeholder='Password' className='w-[360px] h-11 pl-10 border border-solid border-slate-400 rounded-none' />
                <CiLock className='w-6 h-6 relative top-[-30px] left-[10px]'/>
                </div>
                <div className='relative left-[-110px] flex items-center gap-2'>
                                  
                <Input type='checkbox' className='w-4 h-4' /> Remember Me?
                </div>
                <button className='w-[360px] h-[44px] bg-amber-500 text-white font-semibold text-center'>Sign Up</button>
                <p className='relative left-28'>Forgot Password?</p>
                <div className="options w-[360px] h-[152px] relative top-12">
                    <hr />
                    <p className='w-8 h-8 border-2 border-slate-200 flex items-center relative top-[-18px] left-[170px] font-medium'>OR</p>
                    <div className='w-[360px] h-11 border border-solid border-slate-400 flex items-center pl-5'>
                    <Image src={Google} alt='googleLogo' className='w-6 h-6'/>
                        <p className='relative left-[60px] font-medium'>Sign up with Google</p>
                        
                    </div>
                    <div className='w-[360px] h-11 border border-solid border-slate-400 flex items-center pl-5 mt-5'>
                        <Image src={Apple} alt='appleLogo' className='w-6 h-6'/>
                        <p className='relative left-[60px] font-medium'>Sign up with Apple</p>
                    </div>
                </div>
                

            </div>


            {/* Footer */}
            <div className="footer absolute top-[1373px]">
                <Footer />
            </div>

        </main>
    )
}

export default SignUp