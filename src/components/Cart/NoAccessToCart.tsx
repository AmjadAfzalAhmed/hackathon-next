import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import logo from '/public/images/Foodtuck.png'
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from "../ui/button";
import Link from "next/link";


const NoAccessToCart = () => {
    return (
        <div className="flex justify-center items-center py-12 md:py-32">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className='flex justify-center'>
                        <Image src={logo} alt="Foodtuck logo" width={100} height={100} />
                    </div>
                    <CardTitle className="text-center text-2xl font-bold">Welcome Back</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <p className=''>Login to view your cart items and checkout. Don&apos;t miss your favorite food</p>
                
                <SignInButton mode="modal">
                    <Button className="w-full" size='lg'>Sign In</Button>
                </SignInButton>
                </CardContent>
                <CardFooter>
                    <div className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
                    </div>
                    <SignUpButton mode="modal">
                        <Button variant='outline' size='lg' className="w-full">
                            Create an account
                        </Button>
                    </SignUpButton>
                </CardFooter>

            </Card>
        </div>
    )
}

export default NoAccessToCart