import Image from 'next/image'
import tikka from '/public/images/tikka.png'
import { FaArrowRight } from 'react-icons/fa'
import { ChevronDown, ChevronLeft, ChevronRight, Search, UserRound } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'
import bgPic from '/public/images/menutop.png'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'
import {
  Select,
  // SelectContent,
  // SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'





const page = () => {
  return (
    <main className='w-[1920px] h-[2147px]' >
      {/* Header */}
      <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
        <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
          <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

            <span className="text-white">Food</span>

            <span className="text-amber-500">tuck</span>
          </div>
          <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
            <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/pages/chefs">Chefs</Link>
            <Link href="/pages/check-out">Chekcout</Link>
            <Link href="/pages/faq">FAQ</Link>
            <Link href="/pages/error">Error</Link>

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
          <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Checkout Page</h1>

          <div className='w-[173px] h-7 flex items-center absolute top-[274px] left-[897px]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-5 h-5 text-white' />
            <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Checkout</Link>
          </div>

        </div>

      </div>


      {/* Mid Section */}

      <div className="w-[1320px] h-[723px] absolute top-[550px] left-[300px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[872px] h-[723px] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col w-full text-base max-md:mt-6 max-md:max-w-full">
              <h2 className="self-start text-xl font-bold leading-snug text-zinc-800">
                Shipping Address
              </h2>
              <div className="flex flex-wrap gap-6 mt-6 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>First name</p>
                  <Input type="text" id="firstName" name="firstName" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>Last name</p>
                  <Input type="text" id="lastName" name="lastName" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>Email address</p>
                  <Input type="email" id="email" name="email" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>Phone number</p>
                  <Input type="tel" id="phone" name="phone" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 text-zinc-800 w-fit max-md:max-w-full">
                  <p>Company</p>
                  <Input type="text" id="company" name="company" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>Country</p>
                  <Select>
                    <SelectTrigger value="choose country" className="flex gap-5 justify-between px-4 py-4 mt-2 border border-solid border-neutral-200 text-zinc-500 max-md:max-w-full">
                      <SelectValue placeholder="choose country" />
                      <ChevronDown />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>City</p>
                  <Select>
                    <SelectTrigger value="choose country" className="flex gap-5 justify-between px-4 py-4 mt-2 border border-solid border-neutral-200 text-zinc-500 max-md:max-w-full">
                      <SelectValue placeholder="choose city" />
                      <ChevronDown />
                    </SelectTrigger>
                  </Select>
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 text-zinc-800 w-fit max-md:max-w-full">
                  <p>Zip code</p>
                  <Input type="text" id="zipCode" name="zipCode" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>Address 1</p>
                  <Input type="text" id="address1" name="address1" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <p>Address 2</p>
                  <Input type="text" id="address2" name="address2" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" />
                </div>
              </div>
              <h2 className="self-start mt-8 text-xl font-bold leading-snug text-zinc-800">
                Billing Address
              </h2>
              <div className="flex gap-2 self-start mt-1.5 text-sm leading-loose text-neutral-600">
                <Input type="checkbox" id="sameAsShipping" name="sameAsShipping" className="w-5 h-5 border border-solid border-stone-300" />
                <p>Same as shipping address</p>
              </div>
              <div className="flex flex-wrap gap-6 mt-6">
                <button type="button" className="flex flex-col flex-1 grow shrink-0 basis-0 text-neutral-600 w-fit max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-16 py-4 w-full border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2 max-w-full w-[117px]">
                      <ChevronLeft className="object-contain shrink-0 w-6 aspect-square" />
                      <span>Back to cart</span>
                    </div>
                  </div>
                </button>
                <button type="submit" className="flex flex-col flex-1 grow shrink-0 text-white bg-amber-500 basis-0 w-fit max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-16 py-4 w-full bg-amber-500 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2 max-w-full w-[174px]">
                      <span className="grow">Proceed to shipping</span>
                      <ChevronRight className="object-contain shrink-0 w-6 aspect-square" />
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col ml-5 w-[424px] h-[600px] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start p-6 mx-auto w-full text-sm border border-solid border-neutral-200 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-4 text-neutral-600">
                <Image
                  src={tikka}
                  alt="Chicken Tikka Kabab" className="object-contain shrink-0 aspect-[0.94] w-[83px]" />
                <div className="flex flex-col items-start self-start">
                  <div className="self-stretch text-base font-bold text-zinc-800">Chicken Tikka Kabab</div>
                  <div className="mt-2 leading-loose">150 gm net</div>
                  <div className="mt-1 leading-loose">50$</div>
                </div>
              </div>
              <hr className="w-full mt-4 border-t border-neutral-200" />
              <div className="flex gap-4 mt-4 text-neutral-600">
                <Image
                  src={tikka}
                  alt="Chicken Tikka Kabab" className="object-contain shrink-0 aspect-[0.94] w-[83px]" />
                <div className="flex flex-col items-start self-start">
                  <div className="self-stretch text-base font-bold text-zinc-800">Chicken Tikka Kabab</div>
                  <div className="mt-2 leading-loose">150 gm net</div>
                  <div className="mt-1 leading-loose">50$</div>
                </div>
              </div>
              <hr className="w-full mt-4 border-t border-neutral-200" />
              <div className="flex gap-4 mt-4 text-neutral-600">
                <Image
                  src={tikka}
                  alt="Chicken Tikka Kabab"
                  className="object-contain shrink-0 aspect-[0.94] w-[83px]" />
                <div className="flex flex-col items-start self-start">
                  <div className="self-stretch text-base font-bold text-zinc-800">Chicken Tikka Kabab</div>
                  <div className="mt-2 leading-loose">150 gm net</div>
                  <div className="mt-1 leading-loose">50$</div>
                </div>
              </div>
              <hr className="w-full mt-4 border-t border-neutral-200" />
              <div className="flex gap-8 self-stretch mt-4 text-base whitespace-nowrap">
                <dl className="flex flex-col flex-1 text-neutral-600">
                  <dt>Sub-total</dt>
                  <dd className="mt-4 max-md:mr-0.5">130$</dd>
                  <dt className="mt-4">Shipping</dt>
                  <dd className="mt-4">Free</dd>
                  <dt className="mt-4">Discount</dt>
                  <dd className="mt-4">25%</dd>
                  <dt className="mt-4">Tax</dt>
                  <dd className="mt-4">54.76$</dd>
                </dl>
              </div>
              <hr className="w-full mt-4 border-t border-neutral-200" />
              <div className="flex gap-5 justify-between self-stretch mt-4 text-lg leading-none whitespace-nowrap text-zinc-800">
                <div>Total</div>
                <div className="font-bold">432.65$</div>
              </div>
              <button type="button" className="flex gap-2.5 justify-center items-center self-stretch px-12 py-4 mt-6 text-lg leading-none text-white bg-amber-500 rounded-md max-md:px-5">
                <span className="self-stretch my-auto">Place an order</span>
                <FaArrowRight className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer absolute top-[1473px]">
        <Footer />
      </div>

    </main>
  )
}

export default page