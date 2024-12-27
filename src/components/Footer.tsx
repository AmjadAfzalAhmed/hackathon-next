import Link from "next/link";
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (

    <div className="w-[1920px] h-[774px] flex flex-col">
      <div className="flex flex-col items-center pt-32 w-full bg-stone-950 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1169px]">
          <div className="flex flex-col text-white max-md:max-w-full">
            <h2 className="text-3xl font-bold leading-none max-md:max-w-full">
              <span className="text-amber-500">St</span>ill You Need Our Support ?
            </h2>
            <p className="mt-7 text-base max-md:mr-2 max-md:max-w-full">
              Dont wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="flex flex-col self-start text-base max-md:max-w-full">
            <form className="flex gap-5 justify-between pl-5 bg-amber-500 rounded fill-amber-500 max-md:max-w-full">
              
              <input
                type="email"
                id="emailSubscribe"
                className="bg-transparent my-auto text-white opacity-[0.59] focus:outline-none"
                placeholder="Enter Your Email"
                required
                aria-label="Email subscription input"
              />
              <button
                type="submit"
                className="px-6 py-4 text-amber-500 bg-white rounded fill-white max-md:px-5 hover:bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                aria-label="Subscribe to newsletter"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="line mt-10 w-[1169px] aspect-[500] stroke-[1px] border-amber-500 border"></div>


        <div className="flex gap-5 justify-between items-start mt-14 w-full text-white max-w-full h-[331px] max-md:mt-10 max-md:max-w-full">

          <div className="w-[395px] h-[261px] flex flex-col items-start">
            <h3 className="text-xl font-bold leading-snug">About Us.</h3>
            <p className="self-stretch mt-11 text-justify text-lg leading-7 max-md:mt-10">
              Corporate clients and leisure travelers has been relying on Groundlink
              for dependable safe, and professional chauffeured car service in major
              cities across World.
            </p>
            <div className="flex gap-4 mt-9 text-sm leading-loose">
              <Image
                src={watch}
                alt="Opening hours icon"
                className="object-contain shrink-0 rounded-none aspect-[1.08] w-[77px]"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-lg leading-none max-md:mr-2.5">Opening Hours</h4>
                <p className="mt-3">Mon - Sat(8.00 - 6.00)</p>
                <p className="self-start mt-2.5">Sunday - Closed</p>
              </div>
            </div>
          </div>


          <nav className="flex flex-col items-start text-base text-white" aria-label="Useful links">
            <h3 className="self-stretch text-xl font-bold leading-snug text-white">Useful Links</h3>
            <a href="#about" className="mt-9 hover:text-amber-500 focus:text-amber-500 focus:outline-none">About</a>
            <a href="#news" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">News</a>
            <a href="#partners" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Partners</a>
            <a href="#team" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Team</a>
            <a href="#menu" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Menu</a>
            <a href="#contact" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Contact</a>
          </nav>

          <nav className="flex flex-col items-start text-base text-white" aria-label="Help section">
            <h3 className="text-xl font-bold leading-snug text-white">Help?</h3>
            <a href="#faq" className="mt-8 hover:text-amber-500 focus:text-amber-500 focus:outline-none">FAQ</a>
            <a href="#terms" className="self-stretch mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Term & Condition</a>
            <a href="#reporting" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Reporting</a>
            <a href="#documentation" className="mt-6 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Documentation</a>
            <a href="#support" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Support Policy</a>
            <a href="#privacy" className="mt-6 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Privacy</a>
          </nav>

          <div className="flex flex-col self-stretch">
            <h3 className="self-start text-xl font-bold leading-snug">Recent Post</h3>
            <article className="flex gap-4 self-start mt-11 max-md:mt-10">
              <Image
                src={fastFood}
                alt="Fast food article thumbnail"
                className="object-contain shrink-0 w-20 aspect-square"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-base leading-6">
                  Is fastfood good for
                  <br />
                  your body?
                </h4>
                <time className="self-start mt-3.5 text-sm leading-loose opacity-[0.49]">
                  February 28,2022
                </time>
              </div>
            </article>
            <article className="flex gap-4 px-px mt-4">
              <Image
                src={fastFood}
                alt="Organic food article thumbnail"
                className="object-contain shrink-0 w-20 aspect-[1.01]"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-base leading-6">
                  Change your food habit
                  <br />
                  With organic food
                </h4>
                <time className="self-start mt-3.5 text-sm leading-loose opacity-[0.49]">
                  February 28,2022
                </time>
              </div>
            </article>
            <article className="flex gap-4 px-px mt-4 max-md:mr-1">
              <Image
                src={fastFood}
                alt="Fast food lifestyle article thumbnail"
                className="object-contain shrink-0 w-20 aspect-square"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-base leading-6">
                  Do you like fastfood for
                  <br />
                  your life?
                </h4>
                <time className="self-start mt-3.5 text-sm leading-loose opacity-[0.49]">
                  February 28,2022
                </time>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center self-stretch px-16 py-8 mt-14 w-full text-base bg-neutral-600 fill-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1314px] max-md:max-w-full">
            <p className="self-start text-white">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>
            <div className="flex gap-3.5 whitespace-nowrap text-stone-900">
              <Link href="#facebook" className="px-3 py-2 text-center bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our Facebook page">
                <FaFacebook />
              </Link>
              <Link href="#twitter" className="px-2.5 py-2 text-center bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our Twitter page">
                <FaTwitter />
              </Link>
              <Link href="#instagram" className="px-3 py-2 bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our Instagram page">
                <FaInstagram />
              </Link>
              <Link href="#youtube" className="px-2.5 py-2 text-amber-500 bg-white rounded-sm fill-white hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our YouTube channel">
                <FaYoutube />
              </Link>
              <Link href="#linkedin" className="px-2.5 py-2 bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our LinkedIn page">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
