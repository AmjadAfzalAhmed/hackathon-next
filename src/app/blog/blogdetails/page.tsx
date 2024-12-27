import Image from "next/image";
import bgPic from "/public/images/menutop.png";
import recent1 from "/public/images/recent1.png";
import recent2 from "/public/images/recent2.png";
import recent3 from "/public/images/recent3.png";
import recent4 from "/public/images/recent4.png";
import filter1 from "/public/images/filter1.png";
import filter2 from "/public/images/filter2.png";
import filter3 from "/public/images/filter3.png";
import filter4 from "/public/images/filter4.png";
import filter5 from "/public/images/filter5.png";
import photo1 from "/public/images/photo1.png";
import photo2 from "/public/images/photo2.png";
import photo3 from "/public/images/photo3.png";
import photo4 from "/public/images/photo4.png";
import photo5 from "/public/images/photo5.png";
import photo6 from "/public/images/photo6.png";
import prince from "/public/images/prince.png";
import review from "/public/images/review.png";
import blogPic1 from "/public/images/blogDetails.png";
import admin from "/public/images/Admin.png";
import calendar from "/public/images/Calendar.png";
import calendar1 from "/public/images/CalendarBlank.png";
import quotes from "/public/images/Quotes.png";
import blogPic2 from "/public/images/blogDetails2.png";
import coms1 from "/public/images/coms1.png";
import coms2 from "/public/images/coms2.png";
import coms3 from "/public/images/coms3.png";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronRight, Search, UserRound } from "lucide-react";
import { PiArrowBendDoubleUpLeft, PiHandbag } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function blogDetails() {
  return (
    <div className="w-[1920px] h-[2811px]">
      {/* Header */}
      <div className="w-[1920px] min-h-[90px]  flex items-center bg-stone-950 ">
        <div className="w-[1320px] h-8 absolute top-[29px] left-40 flex flex-wrap gap-10 items-center">
          <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 relative top-2 ">
            <span className="text-white">Food</span>

            <span className="text-amber-500">tuck</span>
          </div>
          <nav
            className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-72 gap-8 self-stretch text-base text-white max-md:max-w-full"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="grow font-bold text-amber-500"
              aria-current="page"
            >
              Home
            </Link>
            <Link href="/menu">Menu</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div
            className="flex gap-4 self-stretch my-auto"
            aria-label="Social media links"
          >
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
        <div className="w-[225px] h-[104px] z-100">
          <h1 className="text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14">
            Blog Details
          </h1>

          <div className="w-[133px] h-7 flex items-center absolute top-[274px] left-[897px]">
            <Link href="/" className="text-white text-[20px] leading-7">
              Home
            </Link>
            <ChevronRight className="w-5 h-5 text-white" />
            <Link
              href="/blog"
              className="text-[#ff9f0d] text-[20px] font-normal leading-7"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
      {/* Header ends here */}

      {/* Section 1 */}
      <div className="flex flex-col items-start text-base max-w-[872px] min-h-[830px] absolute top-[550px] left-[280px] max- items-centerlg:top-[400px] max-lg:left-[100px] max-md:relative max-md:top-auto max-md:left-auto max-md:min-h-auto max-md:max-w-full">
        <div className="flex relative flex-col items-start self-stretch px-6 pt-6 pb-96 w-full text-white whitespace-nowrap min-h-[520px] max-md:px-4 max-md:pb-24 max-md:min-h-auto">
          <Image
            src={blogPic1}
            className="object-cover absolute inset-0 w-full h-full"
            alt="Featured blog post background image"
          />
          <div
            className="relative px-4 pt-3 mb-0 bg-amber-500 rounded-md h-[60px] w-[60px] max-md:h-[50px] max-md:w-[50px] max-md:mb-2.5"
            aria-label="Post month"
          >
            <p className="text-sm max-md:text-xs">14</p>
            <p className="text-sm max-md:text-xs">Feb</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4 text-neutral-600 max-md:flex-col max-md:gap-1">
          <Image
            src={calendar}
            className="object-contain shrink-0 w-6 aspect-square max-md:w-5"
            alt="Calendar icon"
          />
          <Image src={admin} className="w-80 max-md:w-5" alt="Admin icon" />
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-none text-zinc-800 max-md:text-lg max-md:leading-tight">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="mt-6 leading-6 text-neutral-600 text-justify w-[870px] max-md:w-full">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>
        <p className="mt-6 leading-6 text-neutral-600 text-justify w-[870px] max-md:w-full">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>
      </div>

      {/* Section 2 */}
      <div className="w-[853px] h-[176px] bg-amber-500 text-white absolute top-[1431px] left-[280px] flex items-center">
        <Image
          src={quotes}
          alt="quotes"
          width={48}
          height={48}
          className="filter brightness-0 invert relative -top-10 left-2"
        />
        <p className="w-[741px] h-[128px] text-justify font-medium text-2xl relative left-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.{" "}
        </p>
      </div>

      <p className="w-[872px] h-[120px] absolute top-[1663px] left-[280px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum.
      </p>

      {/* Section 3 */}
      <div className="flex">
        <div className="text flex flex-col">
          <p className="w-[420px] h-[236px] absolute top-[1808px] left-[280px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
          <p className="w-[420px] h-[168px] absolute top-[2060px] left-[280px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing{" "}
          </p>
        </div>
        <Image
          src={blogPic2}
          alt="blogPic2"
          width={424}
          height={366}
          className="absolute top-[1808px] left-[708px]"
        />
      </div>
      <p className="w-[872px] h-[120px] absolute top-[2252px] left-[280px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum.
      </p>
      <p className="w-[872px] h-[120px] absolute top-[2388px] left-[280px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum.
      </p>

      <div className="w-[872px] h-[60px] flex items-center absolute top-[2540px] left-[280px] border border-slate-300">
        <div className=" flex w-[350px] h-6 text-[16px] gap-2 pl-2">
          <p className="font-bold">Tags:</p>
          <p className="text-slate-500">Restaurant, Dinner , Pizza , Yummy</p>
        </div>
        <div className="flex w-[350px] h-6 text-[16px] gap-2 relative left-[350px]">
          <p className="font-bold">Share:</p>
          <div className="socials flex items-center text-slate-500 gap-2">
            <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaPinterest />
          </div>
        </div>
      </div>

    {/* Comments */}
      <div className="comments w-[852px] h-[520px] flex flex-col gap-8 absolute top-[2656px] left-[280px]">
        <h1 className="font-bold text-2xl">Comments - 03</h1>
        <div className="flex gap-2 one w-[852px] h-[120px]">
          <Image src={coms1} alt="comsPic" className="w-[72px] h-[65px] pl-2" />
          <div className="flex flex-col gap-2 relative left-4">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-xl">Md Sojib Khan</p>
              <PiArrowBendDoubleUpLeft />
              <p>Reply</p>
            </div>
            <div className="flex">
              <Image src={calendar1} alt="calendar" width={26.63} height={24} />{" "}
              June 22, 2022
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
              hendrerit faucibus sollicitudin.
            </p>
          </div>
        </div>

        <div className="flex gap-2 two w-[791px] h-[120px] relative left-20">
          <Image src={coms2} alt="comsPic" className="w-[72px] h-[65px] pl-2" />
          <div className="flex flex-col gap-2 relative left-4">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-xl">Md Sojib Khan</p>
              <PiArrowBendDoubleUpLeft />
              <p>Reply</p>
            </div>
            <div className="flex">
              <Image src={calendar1} alt="calendar" width={26.63} height={24} />{" "}
              June 22, 2022
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
              hendrerit faucibus sollicitudin.
            </p>
          </div>
        </div>

        <div className="flex gap-2 three w-[852px] h-[120px]">
          <Image src={coms3} alt="comsPic" className="w-[72px] h-[65px] pl-2" />
          <div className="flex flex-col gap-2 relative left-4">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-xl">Md Moon Khan</p>
              <PiArrowBendDoubleUpLeft />
              <p>Reply</p>
            </div>
            <div className="flex">
              <Image src={calendar1} alt="calendar" width={26.63} height={24} />{" "}
              June 22, 2022
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
              hendrerit faucibus sollicitudin.
            </p>
          </div>
        </div>
      </div>

    {/* Post */}
    <div className="w-[852px] h-[484px] absolute top-[3184px] left-[280px]">
      <p className='text-2xl font-bold mb-6'>Post a Comment</p>
      <hr />
        <div className="flex gap-4">
          <Input placeholder="Name*" className='w-[418px] h-[54px] rounded-none mt-4'/>
          <Input placeholder="Email*" className='w-[418px] h-[54px] rounded-none mt-4'/>
        </div>
        <Textarea placeholder="Write a comment" className="w-[852px] h-[244px] rounded-none mt-4" />
        <button className='bg-amber-500 w-[212px] h-[56px] text-white font-semibold text-center mt-4'>Post a comment</button>

    </div>

      {/* Sidebar */}
      <div className="flex flex-col mx-auto w-full max-w-[424px] min-h-[2501px] absolute top-[560px] left-[1196px]">
        <div className="relative w-[421px] h-[70px] my-auto">
          <Input
            type="text"
            placeholder="Search Your Keyword"
            className="w-full h-full rounded-none border border-solid border-neutral-200 bg-transparent focus:outline-none pr-[76px]"
          />
          <div className="absolute right-0 top-0 flex items-center justify-center w-[76px] h-[70px] bg-amber-500">
            <Search className="text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center px-16 py-9 mt-6 w-full text-base border border-solid border-neutral-200 text-zinc-500">
          <Image
            src={prince}
            alt="Profile picture of Prince Miyako"
            className="object-contain max-w-full aspect-[0.98] w-[115px] rounded-full"
          />
          <h2 className="mt-6 text-xl font-bold leading-snug text-center text-zinc-800">
            Prince Miyako
          </h2>
          <p className="mt-3.5 text-center">Blogger/Photographer</p>
          <div className="flex gap-2.5 mt-5 max-w-full text-sm leading-loose w-[161px]">
            <Image
              src={review}
              alt="5 star rating"
              className="object-contain shrink-0 self-start mt-1 aspect-[7.25] w-[87px]"
            />
            <span>(1 Review)</span>
          </div>
          <p className="self-stretch mt-3.5 leading-6 text-center">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipisicing elit.Veritatis distinctio, odio
            <br />
            eligendi suscipit reprehenderit atque
          </p>
          <div
            className="flex gap-4 mt-9 max-w-full w-[102px]"
            aria-label="Social Media Links"
          >
            <a href="#" className="text-zinc-800" aria-label="Facebook">
              <div>
                <FaFacebookF />
              </div>
            </a>
            <a href="#" className="text-zinc-800" aria-label="Twitter">
              <div>
                <FaTwitter />{" "}
              </div>
            </a>
            <a href="#" className="text-zinc-800" aria-label="Instagram">
              <div>
                <FaInstagram />{" "}
              </div>
            </a>
            <a href="#" className="text-zinc-800" aria-label="LinkedIn">
              <div>
                <FaPinterest />{" "}
              </div>
            </a>
          </div>
        </div>

        <section className="flex flex-col items-start px-12 py-8 mt-6 w-full border border-solid border-neutral-200 stroke-neutral-200">
          <h2 className="text-xl font-bold leading-snug text-zinc-800">
            Recent Post
          </h2>
          <article className="flex gap-4 mt-6">
            <Image
              src={recent1}
              alt="Recent blog post thumbnail"
              className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
            />
            <div className="flex flex-col self-start">
              <time className="self-start text-sm leading-loose text-zinc-500">
                June 22, 2020
              </time>
              <h3 className="mt-5 text-base leading-6 text-neutral-600">
                Lorem ipsum dolor sit cing
                <br />
                elit, sed do.
              </h3>
            </div>
          </article>
          <hr className="object-contain self-stretch mt-3.5 w-full" />

          <article className="flex gap-4 mt-4">
            <Image
              src={recent2}
              alt="Recent blog post thumbnail"
              className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
            />
            <div className="flex flex-col self-start">
              <time className="self-start text-sm leading-loose text-zinc-500">
                June 22, 2020
              </time>
              <h3 className="mt-5 text-base leading-6 text-neutral-600">
                Lorem ipsum dolor sit cing
                <br />
                elit, sed do.
              </h3>
            </div>
          </article>
          <hr className="object-contain mt-3.5 w-full" />

          <article className="flex gap-4 mt-4">
            <Image
              src={recent3}
              alt="Recent blog post thumbnail"
              className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
            />
            <div className="flex flex-col self-start">
              <time className="self-start text-sm leading-loose text-zinc-500">
                June 22, 2020
              </time>
              <h3 className="mt-5 text-base leading-6 text-neutral-600">
                Lorem ipsum dolor sit cing
                <br />
                elit, sed do.
              </h3>
            </div>
          </article>
          <hr className="object-contain self-stretch mt-3.5 w-full" />

          <article className="flex gap-4 mt-4">
            <Image
              src={recent4}
              alt="Recent blog post thumbnail"
              className="object-contain shrink-0 rounded-md aspect-[1.08] w-[99px]"
            />
            <div className="flex flex-col self-start">
              <time className="self-start text-sm leading-loose text-zinc-500">
                June 22, 2020
              </time>
              <h3 className="mt-5 text-base leading-6 text-neutral-600">
                Lorem ipsum dolor sit cing
                <br />
                elit, sed do.
              </h3>
            </div>
          </article>
          <hr className="object-contain self-stretch mt-3.5 w-full" />
        </section>

        <section className="flex flex-col px-14 py-8 mt-6 w-full text-base border border-solid border-neutral-200 stroke-neutral-200">
          <h2 className="self-start text-xl font-bold leading-snug text-zinc-800">
            Filter By Menu
          </h2>
          <ul className="w-full list-none">
            <li className="flex gap-5 justify-between mt-6 w-full">
              <div className="flex gap-4 font-bold text-zinc-800">
                <Image
                  src={filter1}
                  alt="Chicken Fry"
                  className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                />
                <span className="my-auto">Chicken Fry</span>
              </div>
              <span className="my-auto text-center text-zinc-800">26</span>
            </li>

            <li className="flex gap-5 justify-between mt-4 w-full">
              <div className="flex gap-4 font-bold text-zinc-800">
                <Image
                  src={filter2}
                  alt="Burger Food"
                  className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                />
                <span className="my-auto">Burger Food</span>
              </div>
              <span className="my-auto text-center text-zinc-800">46</span>
            </li>

            <li className="flex gap-5 justify-between mt-4 w-full">
              <div className="flex gap-4 font-bold text-zinc-800">
                <Image
                  src={filter3}
                  alt="Pizza"
                  className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                />
                <span className="my-auto">Pizza</span>
              </div>
              <span className="my-auto text-center text-zinc-800">16</span>
            </li>

            <li className="flex gap-5 justify-between mt-4 w-full">
              <div className="flex gap-4 font-bold text-zinc-800">
                <Image
                  src={filter4}
                  alt="Fresh Fruits"
                  className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                />
                <span className="my-auto">Fresh Fruits</span>
              </div>
              <span className="my-auto text-center text-zinc-800">36</span>
            </li>

            <li className="flex gap-5 justify-between mt-4 w-full">
              <div className="flex gap-4 font-bold text-zinc-800">
                <Image
                  src={filter5}
                  alt="Vegetables"
                  className="object-contain shrink-0 rounded-md aspect-[1.08] w-[67px]"
                />
                <span className="my-auto">Vegetables</span>
              </div>
              <span className="my-auto text-center text-zinc-800">16</span>
            </li>
          </ul>
        </section>

        <section className=" max-w-[423px] min-h-[308px] flex flex-col px-10 py-8 mt-6 text-sm leading-loose border border-solid border-neutral-200 stroke-neutral-200">
          <h2 className="text-xl font-bold leading-snug text-zinc-800">
            Popular Tags
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Sandwich
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Tikka
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              BBQ
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Restaurant
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-white bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
              Chicken Sharma
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Health
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Fastfood
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Food
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Pizza
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Burger
            </button>
            <button className="px-7 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
              Chicken
            </button>
          </div>
        </section>

        <section className="flex flex-col px-10 py-8 mt-6 w-full border border-solid border-neutral-200 stroke-neutral-200">
          <h2 className="self-start text-xl font-bold leading-snug text-zinc-800">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-3 gap-3.5 mt-6">
            <Image
              src={photo1}
              alt="Gallery photo 1"
              className="object-contain aspect-[1.2] w-[110px]"
            />
            <Image
              src={photo2}
              alt="Gallery photo 2"
              className="object-contain aspect-[1.2] w-[110px]"
            />

            <Image
              src={photo3}
              alt="Gallery photo 3"
              className="object-contain aspect-[1.2] w-[110px]"
            />
            <Image
              src={photo4}
              alt="Gallery photo 4"
              className="object-contain aspect-[1.2] w-[110px]"
            />
            <Image
              src={photo5}
              alt="Gallery photo 5"
              className="object-contain aspect-[1.2] w-[110px]"
            />
            <Image
              src={photo6}
              alt="Gallery photo 6"
              className="object-contain aspect-[1.2] w-[110px]"
            />
          </div>
        </section>

        <section className="flex flex-col px-14 py-8 mt-6 w-full border border-solid border-neutral-200 stroke-neutral-200 text-zinc-800">
          <h2 className="self-start text-xl font-bold leading-snug">
            Follow Us
          </h2>
          <div className="flex gap-3 mt-5 text-lg">
            <a
              href="#"
              className="px-4 py-3.5 bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Facebook"
            >
              <span className="sr-only">Twitter</span> <FaTwitter />
            </a>
            <a
              href="#"
              className="px-4 py-3.5 bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Twitter"
            >
              <span className="sr-only">Youtube</span> <FaYoutube />
            </a>
            <a
              href="#"
              className="px-5 py-3.5 text-white bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span> <FaPinterest />
            </a>
            <a
              href="#"
              className="px-4 py-3.5 text-black bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Pinterest"
            >
              <span className="sr-only">Pinterest</span> <FaInstagram />
            </a>
            <a
              href="#"
              className="px-6 py-3.5 bg-stone-100 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="YouTube"
            >
              <span className="sr-only">facebook</span> <FaFacebookF />
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="footer absolute top-[3788px]">
        <Footer />
      </div>
    </div>
  );
}

export default blogDetails;
