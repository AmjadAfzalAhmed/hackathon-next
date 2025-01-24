'use client'

import Image from 'next/image'
import { ChevronRight, Lock, User } from 'lucide-react'
import bgPic from '/public/images/menutop.png'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { BsEnvelope } from 'react-icons/bs'
import Google from '/public/images/Google.png'
import Apple from '/public/images/Apple.png'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'


const SignUp = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    if (!isLoaded) {
        return null;
    }

    async function submit(e: React.FormEvent) {
        e.preventDefault()
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code"
            });

            setPendingVerification(true);

        } catch (error: any) {

            setError(error.errors[0]?.message || "An error occured");
        }
    }

    async function onPressVerify(e: React.FormEvent) {
        e.preventDefault()
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignup = await signUp.attemptEmailAddressVerification({
                code,
            });

            if (completeSignup.status !== "complete") {

            }
            if (completeSignup.status === "complete") {
                await setActive({ session: completeSignup.createdSessionId });
                router.push("/signin")
            }

        } catch (error: any) {
            setError(error.errors[0]?.message || "verification failed")
        }
        return
    }

    return (
        <main className='w-full h-[1800px]' >
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Nav />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Signup</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/signup' className="text-amber-500" aria-current="page">Signup</Link>
                    </nav>
                </div>
            </div>
            {/* Mid Section */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

                    {!pendVerification ? (
                        <form onSubmit={submit} className="space-y-4">
                            {/* Email Input */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-12 pl-10 border border-solid border-slate-400 rounded"
                                    value={emailAddress}
                                    onChange={(e) => setEmailAddress(e.target.value)}
                                />
                                <BsEnvelope className="w-5 h-5 absolute top-[14px] left-3 text-gray-400" />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full h-12 pl-10 border border-solid border-slate-400 rounded"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Lock className="w-5 h-5 absolute top-[14px] left-3 text-gray-400" />
                            </div>

                            {/* Toggle Show Password */}
                            <div className="flex items-center">
                                <Input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    id="showPassword"
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                                <Label htmlFor="showPassword" className="ml-2">
                                    Show Password
                                </Label>
                            </div>



                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <button
                                type="submit"
                                className="w-full py-2 bg-amber-500 text-white font-semibold text-center rounded hover:bg-amber-600 transition-colors"
                            >
                                Sign Up
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={onPressVerify} className="space-y-4">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Enter Verification Code"
                                    className="w-full pl-10 border border-solid border-slate-400 rounded"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                                <BsEnvelope className="w-5 h-5 absolute top-2 left-3 text-gray-400" />
                            </div>

                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                             

                            <Button
                                type="submit"
                                className="w-full py-2 bg-green-500 text-white font-semibold text-center rounded hover:bg-green-600 transition-colors"
                            >
                                Verify Email
                            </Button>
                        </form>
                    )}

                    <div className="relative py-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">OR</span>
                        </div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="space-y-4">
                        <button className="w-full py-2 px-4 border border-solid border-slate-400 flex items-center justify-center space-x-2 rounded hover:bg-gray-50 transition-colors">
                            <Image src={Google} alt='Google Logo' width={20} height={20} />
                            <span>Sign up with Google</span>
                        </button>

                        <button className="w-full py-2 px-4 border border-solid border-slate-400 flex items-center justify-center space-x-2 rounded hover:bg-gray-50 transition-colors">
                            <Image src={Apple} alt='Apple Logo' width={20} height={20} />
                            <span>Sign up with Apple</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='sm:w-full sm:absolute sm:top-[1080px]'>
                <Footer />
            </div>

        </main>
    )
}

export default SignUp