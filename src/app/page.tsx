
import Footer from "@/components/Footer";
import Image from 'next/image'
import backG from '/public/images/heroBack.png'
import heroImg from '/public/images/hero.png'
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link';
import { PiHandbag } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import pic2 from '/public/images/pic2.png'
import pic3 from '/public/images/pic3.png'
import pic4 from '/public/images/pic4.png'
import one from '/public/images/one.png'
import two from '/public/images/two.png'
import three from '/public/images/three.png'
import four from '/public/images/four.png'
import featured from '/public/images/featured.png'
import pic5 from '/public/images/pic5.png'
import pic6 from '/public/images/pic6.png'
import pic7 from '/public/images/pic7.png'
import fastFood from '/public/images/fastFood.png'
import ham from '/public/images/Hamburger.png'
import cookie from '/public/images/Cookie.png'
import wine from '/public/images/Wine.png'
import bgPic from '/public/images/menutop.png'
import chef from '/public/images/chef.png'
import soft from '/public/images/soft.png'
import spoon from '/public/images/spoons.png'
import pizza from '/public/images/pizza.png'
import pic8 from '/public/images/bg.png'
import pic9 from '/public/images/front.png'
import lettuce from '/public/images/lettuce.png'
import fresh from '/public/images/fresh.png'
import mild from '/public/images/mild.png'
import bread from '/public/images/bread.png'
import glow from '/public/images/glow.png'
import italian from '/public/images/italian.png'
import slice from '/public/images/slice.png'
import mushroom from '/public/images/mushroom.png'
import card1 from '/public/images/card1.png'
import card2 from '/public/images/card2.png'
import card3 from '/public/images/card3.png'
import card4 from '/public/images/card4.png'
import round from '/public/images/homeSec7.png'
import numb from '/public/images/Quotes.png'
import stars from '/public/images/star.png'
import sideImg from '/public/images/sideImg.png'
import bgpicture from '/public/images/homeSec8.png'
import { CiPlay1 } from "react-icons/ci"
import img1 from '/public/images/img1.png'
import img2 from '/public/images/img2.png'
import img3 from '/public/images/img3.png'
import icon from '/public/images/Icon.png'


export default function Home() {
  return (
    <main className="w-[1920px] h-[8479px] bg-[#0d0d0d]">
   
      {/* Hero */}
      <div className="flex relative flex-col items-center pb-20 w-[1920px] min-h-[950px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <Image src={backG} alt="Background" className="object-cover absolute inset-0 size-full opacity-10" />
        {/* Navbar */}
        <div className="w-[1320px] h-[78px] absolute top-6 flex flex-col">
          <div className="self-center text-2xl font-bold leading-none text-white">
            <span className="text-amber-500">Food</span>
            <span className="text-white">tuck</span>
          </div>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-5 justify-between w-full text-base text-white max-md:max-w-full">
            <div className="flex gap-5 my-auto max-md:max-w-full">
              <div className="flex gap-8 whitespace-nowrap">
                <Link href="/" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Home</Link>
                <Link href="/menu" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Menu</Link>
                <Link href="/blog" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Blog</Link>
                <Link href="/pages" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Pages</Link>
              </div>
              <div className="flex gap-px">
                <Link href="/about" className="grow hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">About</Link>
                <ChevronDown className="object-contain shrink-0 my-auto w-4 h-4 aspect-square" />
              </div>
              <div className="flex gap-8">
                <Link href="/shop" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Shop</Link>
                <Link href="/signup" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Contact</Link>
              </div>
            </div>
            <div className="flex gap-2 whitespace-nowrap">
              <form role="search" className="flex flex-auto gap-10 px-7 py-4 rounded-3xl border border-amber-500 border-solid max-md:px-5">
                <label className="sr-only">Search</label>
                <input type="search" id="search-input" placeholder="Search..." className="bg-transparent text-white placeholder-white focus:outline-none" />
                <button type="submit" aria-label="Search">
                  <Search className="object-contain shrink-0 w-6 aspect-square" />
                </button>
              </form>
              <button aria-label="Shopping cart" className="focus:outline-none focus:ring-2 focus:ring-amber-500">
                <PiHandbag className="object-contain shrink-0 my-auto w-6 h-6 aspect-square" />
              </button>
            </div>
          </nav>
        </div>


        {/* Mid Section */}
        <div className="midSec flex  ">

          {/* Left Section: Social Icons */}
          <div className="heroCont1 w-[25.28px] min-h-[492px] flex flex-col items-center justify-between absolute top-[291px] left-[242px]">

            {/* Line 1 */}
            <div className="line1 w-[158px] h-[2px] -rotate-90 bg-[#ffffff]"></div>

            {/* Social Icons */}
            <div className="socials flex flex-col gap-4">
              <div className="icon1 w-[25.28px] h-[25.21px] flex items-center justify-center text-white">
                <FaFacebookF />
              </div>
              <div className="icon1 w-[25.28px] h-[25.21px] flex items-center justify-center text-[#ff9f0d]">
                <FaTwitter />
              </div>
              <div className="icon1 w-[25.28px] h-[25.21px] flex items-center justify-center text-white">
                <FaPinterestP />
              </div>
            </div>

            {/* Line 2 */}
            <div className="line2 w-[147px] h-[2px] -rotate-90 bg-[#ffffff]"></div>

          </div>


          {/* Center Section: Heading and Content */}

          <div
            className="absolute top-[293px] left-[300px] flex flex-col items-start text-base text-white max-w-[472px] rounded-[30px]"
            aria-label="Quick and Amusing Section"
          >
            <div
              className="text-3xl leading-none text-amber-500"

            >
              Its Quick & Amusing!
            </div>
            <div
              className="self-stretch mt-2 w-full text-6xl font-bold leading-[68px]">

              <span className="text-amber-500">Th</span>
              e Art of speed
              <br />
              food Quality
            </div>
            <div
              className="mt-8 leading-6"

            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Varius sed pharetra dictum neque massa congue
            </div>
            <a
              href="#menu"
              className="px-14 py-5 mt-8 bg-amber-500 rounded-[30px] text-neutral-200 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"

            >
              See Menu
            </a>
          </div>

          {/* Right Section: Featured Dish Image */}
          <div className="absolute flex w-[877.8px] h-[670px] top-[198px] left-[939px]">
            <Image
              src={heroImg}
              alt="Featured dish presentation"
              className="object-cover w-full h-auto"
            />
          </div>

        </div>

        <div className="about w-[1320px] h-[562px] absolute top-[1070px] left-[300px] flex">
          <div className="left w-[562px] h-[562px] flex flex-col text-white">
            <p className='text-[#ff9f0d] font-normal text-[32px]'>about us</p>
            <div className="w-[446px] h-[110px] font-bold text-[48px] leading-14 text-[#ff9f0d]">
              We <span className='text-white'>create the best foody product</span>
            </div>
            <p className='w-[526px] h-[130px] font-normal text-white text-[16px] mt-14 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
              fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
              mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

            <div className="div flex items-center">
              <TiTick className='w-[17px] h-[12.24px]' /><p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div className="div flex items-center">
              <TiTick className='w-[17px] h-[12.24px]' /><p> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
            </div>
            <div className="div flex items-center">
              <TiTick className='w-[17px] h-[12.24px]' /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className='w-[190px] h-[60px] bg-[#ff9f0d] text-white text-[16px] leading-6 rounded-[30px] mt-8'>Read More</button>
          </div>
          <div className="right images flex flex-col gap-3">
            <Image src={pic2} alt='about-pic1' width={660} height={330} className='rounded-[6px]' />
            <div className="lower flex gap-3">
              <Image src={pic3} alt='about-pic2' width={322} height={194} className='rounded-[6px]' />
              <Image src={pic4} alt='about-pic3' width={322} height={194} className='rounded-[6px]' />
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}

      <div className="w-[1320px] h-[489px] absolute top-[1713px] left-[300px]">
        <div
          className="flex flex-col items-center pr-20 pb-80 rounded-none max-md:pr-5 max-md:pb-24"
          aria-label="Food Category Selection"
        >
          <div className="text-3xl leading-none text-amber-500 text-center" >Food Category</div>
          <div className="mt-2 text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
            <span className="text-amber-500">Ch</span>oose Food Item
          </div>
          <div
            className="self-start mt-14 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full"
          >
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div
                  className="flex relative flex-col grow py-28 pr-16 font-bold rounded-md aspect-[0.93] max-md:py-24 max-md:mt-8"

                  aria-label="Fast Food Dish with 30% discount"
                >
                  <Image
                    src={one}
                    className="object-cover absolute inset-0 size-full rounded-md"
                    alt="Fast Food Dish Special Offer"
                  />
                  <div
                    className="relative self-center px-5 py-2 max-w-full text-lg leading-none text-amber-500 bg-white rounded-md w-[125px]"
                  >
                    Save 30%
                  </div>
                  <div
                    className="relative self-start px-8 py-2.5 mt-3 text-xl leading-snug text-red-50 bg-amber-500 rounded-md max-md:px-5"
                  >
                    Fast Food Dish
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <Image
                  src={two}
                  className="object-contain grow shrink-0 max-w-full rounded-md aspect-[0.93] w-[306px] max-md:mt-8"
                  alt="Featured Food Item 2"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <Image
                  src={three}
                  className="object-contain grow shrink-0 max-w-full rounded-md aspect-[0.93] w-[306px] max-md:mt-8"
                  alt="Featured Food Item 3"

                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <Image
                  src={four}
                  className="object-contain grow shrink-0 max-w-full rounded-md aspect-[0.93] w-[306px] max-md:mt-8"
                  alt="Featured Food Item 4"

                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Section3 */}
      <div className='w-[1320px] h-[1316px] absolute top-[2361px] left-[300px]'>
        <div className="rounded-none">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                      <Image
                        src={featured}
                        alt="Restaurant ambiance showcasing interior design"
                        className="object-contain grow w-full rounded-md aspect-[1.02] max-md:mt-4"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                      <Image
                        src={two}
                        alt="Featured dish presentation"
                        className="object-contain mt-32 w-full rounded-md aspect-[1.22] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                      <Image
                        src={fastFood}
                        alt="Culinary preparation process"
                        className="object-contain mt-1.5 w-full rounded-md aspect-[0.8] max-md:mt-6"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                      <Image
                        src={pic6}
                        alt="Chef's special dish"
                        className="object-contain mt-1.5 w-full rounded-md aspect-[0.98] max-md:mt-6"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-4">
                        <Image
                          src={pic7}
                          alt="Signature appetizer"
                          className="object-contain rounded-md aspect-[0.96] w-[161px]"
                        />
                        <Image
                          src={pic5}
                          alt="Dessert specialty"
                          className="object-contain mt-4 rounded-md aspect-[0.97] w-[161px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div
                className="flex z-10 flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full"
              >
                <h2 className="text-3xl leading-none text-amber-500">Why Choose us</h2>
                <div
                  className="mt-2 text-5xl font-bold text-white leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]"

                >
                  <span className="text-amber-500">Ex</span>
                  ta ordinary taste
                  <br />
                  And Experienced
                </div>
                <p
                  className="self-stretch mt-8 text-base leading-6 text-white max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                  pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                  augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                  sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                  consequat.
                </p>
                <div className="flex gap-9 mt-8 text-lg leading-none text-white">
                  <div className="flex flex-col bg-amber-500 rounded-[6px]">
                    <Image
                      src={ham}
                      alt="Fast Food menu icon"
                      className="object-contain rounded-md aspect-[1.02] w-[102px]"
                    />
                    <div className="self-start mt-2.5 text-center">Fast Food</div>
                  </div>
                  <div className="flex flex-col whitespace-nowrap bg-amber-500 rounded-[6px]">
                    <Image
                      src={cookie}
                      alt="Lunch menu icon"
                      className="object-contain rounded-md aspect-[1.02] w-[102px]"
                    />
                    <div className="self-center mt-2">Lunch</div>
                  </div>
                  <div className="flex flex-col whitespace-nowrap bg-amber-500 rounded-[6px]">
                    <Image
                      src={wine}
                      alt="Dinner menu icon"
                      className="object-contain rounded-md aspect-[1.02] w-[102px]"
                    />
                    <div className="self-center mt-2.5">Dinner</div>
                  </div>
                </div>

                <div
                  className="flex gap-10 w-[374px] h-[93px] items-start mt-9 font-bold whitespace-nowrap bg-white rounded-md"
                  aria-label="Experience statistics"
                >
                  <div
                    className="flex shrink-0 self-start w-2.5 bg-amber-500 rounded-md h-[93px]"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="my-auto text-5xl leading-none text-amber-500 max-md:text-4xl"
                  >
                    30+
                  </div>
                  <div
                    className="self-end mt-11 text-2xl leading-none basis-auto text-stone-900 max-md:mt-10"
                  >
                    Experienced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Section4 */}
      <div className="w-[1923px] h-[469px] absolute top-[3197px] flex flex-col">
        <div className=" min-h-[255px] flex relative flex-col  max-md:max-w-full">
          <Image
            src={bgPic}
            alt="Restaurant interior background"
            className="object-cover absolute inset-0 size-full -z-10 opacity-35"
          />
          <div
            className="flex relative flex-col justify-center items-center px-16 py-28 w-full bg-stone-950 bg-opacity-80 max-md:px-5 max-md:py-24 max-md:max-w-full"
            aria-label="Restaurant Statistics"
          >
            <div className="mb-0 w-full max-w-[1311px] max-md:mb-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div
                    className="flex flex-col items-center font-bold text-white max-md:mt-10"
                  >
                    <Image
                      src={chef}
                      alt="Professional Chefs Icon"
                      className="object-contain max-w-full aspect-[1.01] w-[120px]"
                    />
                    <div className="mt-10 text-4xl leading-tight" aria-label="420 Professional Chefs">420</div>
                    <div className="self-stretch mt-9 text-2xl leading-none">
                      Professional Chefs
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div
                    className="flex flex-col items-center font-bold text-white max-md:mt-10"
                  >
                    <Image
                      src={soft}
                      alt="Food Items Icon"
                      className="object-contain max-w-full aspect-[1.01] w-[120px]"
                    />
                    <div className="mt-10 text-4xl leading-tight" aria-label="320 Items of Food">320</div>
                    <div className="self-stretch mt-9 text-2xl leading-none">
                      Items Of Food
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div
                    className="flex flex-col grow items-center font-bold text-white max-md:mt-10"
                  >
                    <Image
                      src={spoon}
                      alt="Years of Experience Icon"
                      className="object-contain max-w-full aspect-[1.01] w-[120px]"
                    />
                    <div className="mt-10 text-4xl leading-tight" aria-label="Over 30 Years of Experience">30+</div>
                    <div className="self-stretch mt-9 text-2xl leading-none">
                      Years Of Experienced
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div
                    className="flex flex-col grow items-center font-bold text-white max-md:mt-10"
                  >
                    <Image
                      src={pizza}
                      alt="Years of Experience Icon"
                      className="object-contain max-w-full aspect-[1.01] w-[120px]"
                    />
                    <div className="mt-10 text-4xl leading-tight" aria-label="220 Happy Customers">220+</div>
                    <div className="self-stretch mt-9 text-2xl leading-none">
                      Happy Customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section5 */}
      <div className="w-[1320px] h-[656px] absolute top-[3786px] left-[300px] flex flex-col">
        <nav className="flex gap-5 justify-between items-end w-full text-white max-w-[1056px] max-md:max-w-full" aria-label="Menu Categories">
          <button className="mt-40 text-xl font-bold leading-snug text-amber-500 max-md:mt-10" >Breakfast</button>
          <button className="mt-40 text-xl leading-snug max-md:mt-10" >Lunch</button>
          <div className="flex gap-5 self-stretch">
            <button className="grow self-end mt-40 text-xl leading-snug max-md:mt-10" >Dinner</button>
            <div className="flex flex-col grow shrink-0 items-center basis-0 w-fit">
              <h2 className="text-3xl leading-none text-amber-500">Choose & pick</h2>
              <h1 className="w-[358px] h-[56px] self-stretch mt-2 text-5xl font-bold leading-none max-md:text-4xl">
                <span className="text-amber-500">Fr</span>om Our Menu
              </h1>
              <div className="flex gap-5 justify-between mt-14 ml-3.5 w-56 max-w-full text-xl leading-snug whitespace-nowrap max-md:mt-10">
                <button >Dessert</button>
                <button >Drink</button>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-40 text-xl leading-snug whitespace-nowrap max-md:mt-10">
            <button >Snack</button>
            <button >Soups</button>
          </div>
        </nav>
        <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col px-20 pb-11 min-h-[406px] max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <Image src={pic8} className="object-cover absolute inset-0 size-full opacity-35" alt="Background food image" />
                <Image src={pic9} className="object-contain w-full aspect-[1.01] " alt="Featured menu item" />
              </div>
            </div>

            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex w-full font-bold text-white max-md:mt-5 max-md:max-w-full">

                <div className="right flex flex-col w-[376px] h-[400px]">
                  <div className="flex flex-wrap gap-8">
                    <div className="flex  flex-auto gap-2.5">
                      <Image src={lettuce} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Lettuce Leaf dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Lettuce Leaf</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">12.5$</p>
                      </div>
                    </div>

                    <div className="flex  flex-auto gap-2.5">
                      <Image src={glow} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Glow Cheese dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Glow Cheese</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">12.5$</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-8 mt-8">
                    <div className="flex  flex-auto gap-2.5">
                      <Image src={fresh} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Fresh Breakfast dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Fresh Breakfast</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">14.5$</p>
                      </div>
                    </div>

                    <div className="flex  flex-auto gap-2.5">
                      <Image src={italian} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Italian Pizza dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Italian Pizza</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">14.5$</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="left relative top-[-20px] flex flex-col w-[376px] h-[400px]">
                  <div className="flex flex-wrap gap-8 mt-8">
                    <div className="flex  flex-auto gap-2.5">
                      <Image src={mild} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Mild Butter dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Mild Butter</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">12.5$</p>
                      </div>
                    </div>
                    <div className="flex  flex-auto gap-2.5">
                      <Image src={slice} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Slice Beef dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Slice Beef</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">12.5$</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-8 mt-8">
                    <div className="flex  flex-auto gap-2.5">
                      <Image src={bread} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Fresh Bread dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Fresh Bread</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">12.5$</p>
                      </div>
                    </div>

                    <div className="flex  flex-auto gap-2.5">
                      <Image src={mushroom} className="object-contain shrink-0 w-20 rounded-md aspect-[1.01]" alt="Mushroom Pizza dish" />
                      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
                        <h3 className="text-xl leading-snug">Mushroom Pizza</h3>
                        <p className="self-stretch mt-1 text-sm leading-loose">Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className="mt-1 text-lg leading-none text-amber-500">12.5$</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section6 */}
      <div className="w-[1764px] h-[657px] absolute top-[4662px] left-[-144px] flex flex-col items-center pl-20 rounded-none max-md:pl-5" aria-label="Meet Our Chefs Section">
        <div className="ml-40 text-3xl leading-none text-amber-500">Chefs</div>
        <div
          className="mt-2 ml-40 text-5xl font-bold leading-none text-white max-md:text-4xl"
        >
          <span className="text-amber-500">Me</span>
          et Our Chef
        </div>
        <div
          className="self-end mt-14 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <Image
                src={card1}
                alt="Head Chef Portrait"
                className="object-contain grow shrink-0 max-w-full aspect-[0.8] w-[312px] max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-zinc-800 max-md:mt-6">
                <div
                  className="flex relative flex-col items-start pt-80 w-full rounded-md aspect-[0.798] max-md:pt-24 max-md:pr-5"
                >
                  <Image
                    src={card2}
                    alt="D.Scoriesh - Assistant Chef"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div
                    className="flex relative flex-col items-start px-5 py-2 max-w-full bg-white rounded-none w-[181px]"
                  >
                    <div className="text-lg font-bold leading-none">D.Scoriesh</div>
                    <div className="mt-1 text-sm leading-loose">Assistant Chef</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <Image
                src={card3}
                alt="Sous Chef Portrait"
                className="object-contain grow shrink-0 max-w-full aspect-[0.8] w-[312px] max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <Image
                src={card4}
                alt="Pastry Chef Portrait"
                className="object-contain grow shrink-0 max-w-full aspect-[0.8] w-[312px] max-md:mt-6"
              />
            </div>
          </div>
        </div>
        <button
          className="px-10 py-3.5 mt-14 ml-40 max-w-full text-base text-white rounded-3xl border border-amber-500 border-solid w-[155px] max-md:px-5 max-md:mt-10 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          aria-label="See more chefs"
        >
          See More
        </button>
      </div>

      {/* Section7 */}
      <div className="w-[1273px] h-[770px] absolute top-[5369px] left-[300px] flex overflow-hidden flex-col items-start pr-20 pb-5 max-md:pr-5" aria-label="Testimonials Section">
        <h2 className="text-3xl leading-none text-amber-500 max-md:ml-1">
          Testimonials
        </h2>
        <h3 className="mt-2 text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
          What our client are saying
        </h3>
        <div className="flex flex-col items-center self-center mt-14 ml-6 w-full max-w-[868px] max-md:mt-10 max-md:max-w-full">
          <Image
            src={round}
            alt="Profile picture of testimonial author"
            className="object-contain z-10 max-w-full rounded-full aspect-[0.99] w-[133px]"
          />
          <div className="flex flex-col self-stretch px-20 pt-24 pb-8 bg-white shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center max-md:max-w-full">
              <Image
                src={numb}
                alt="Quotation mark icon"
                className="object-contain w-12 aspect-square"
              />
              <blockquote className="self-stretch mt-8 text-lg leading-7 text-center text-neutral-600 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                consequat.
              </blockquote>
              <Image
                src={stars}
                alt="Rating stars"
                className="object-contain mt-10 max-w-full aspect-[6.33] w-[152px] max-md:mt-10"
              />
              <div className="mt-4 text-2xl font-bold leading-none text-zinc-800">
                Alamin Hasan
              </div>
              <div className="mt-2 text-base text-zinc-500">Food Specialist</div>
            </div>
          </div>
          <Image
            src={sideImg}
            alt="Decorative dots"
            className="object-contain mt-14 aspect-[5.38] w-[86px] max-md:mt-10"
          />
        </div>
      </div>

      {/* Section8 */}
      <div className="w-[1918px] absolute top-[6229px] flex flex-col text-white rounded-none" aria-label="Restaurant Process Section">
        <div
          className="flex relative flex-col justify-center items-end px-20 py-28 w-full min-h-[558px] max-md:px-5 max-md:py-24 max-md:max-w-full"
        >
          <Image
            src={bgpicture}
            alt="Restaurant food preparation background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mb-0 max-w-full w-[705px] max-md:mb-2.5">
            <div className="self-end text-3xl leading-none text-amber-500">
              Restaurant Active Process
            </div>
            <div
              className="mt-2 text-5xl font-bold text-right leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]"
            >
              <span className="text-amber-500">We</span>
              Document Every Food
              <br />
              Bean Process untile it is saved
            </div>
            <div
              className="flex flex-col pl-14 mt-8 w-full text-base max-md:pl-5 max-md:max-w-full"
            >
              <div className="leading-6 text-right max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                augue urna,
              </div>
              <div
                className="flex gap-5 justify-between self-end mt-8 max-w-full font-bold w-[369px]"
              >
                <button
                  className="px-12 py-5 border border-amber-500 border-solid rounded-[30px] max-md:px-5 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
                  aria-label="Read more about our food process"
                >
                  Read More
                </button>
                <button
                  className="flex gap-3 items-center hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
                  aria-label="Play video about our food process"
                >
                  <div className="ico flex items-center justify-center w-[60px] h-[60px] rounded-full bg-amber-500">
                    <CiPlay1 className=" w-10 h-6 shrink-0 aspect-square text-white" />
                  </div>
                  <span className="my-auto">Play Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section9 */}
      <div className="w-[1320px] h-[735px] absolute top-[6907px] left-[300px] flex flex-col items-center">
        <h2 className="text-3xl leading-none text-amber-500">Blog Post</h2>
        <div
          className="mt-2 text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl"

        >
          <span className="text-amber-500">La</span>
          test News & Blog
        </div>
        <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex flex-col grow text-base text-white max-md:mt-6 max-md:max-w-full"
              >
                <div
                  className="flex flex-col pb-8 border border-white border-solid max-md:max-w-full"
                >
                  <Image
                    src={img1}
                    alt="Blog post featured image"
                    className="object-contain w-full aspect-[1.21] max-md:max-w-full"
                  />
                  <div
                    className="flex flex-col px-11 mt-8 w-full max-md:px-5 max-md:max-w-full"
                  >
                    <p className="self-start text-amber-500">10 February 2022</p>
                    <h3 className="mt-4 text-2xl font-bold leading-8">
                      Pellentesque Non Efficitur Mi Aliquam Convallis Mi
                    </h3>
                    <div className="flex gap-5 justify-between mt-8">
                      <a href="#" className="hover:text-amber-500 focus:text-amber-500 focus:outline-none" >Learn More</a>
                      <Image
                        src={icon}
                        alt=""
                        className="object-contain shrink-0 self-start mt-1 aspect-[3.8] w-[76px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex flex-col grow text-base text-white max-md:mt-7 max-md:max-w-full"
              >
                <div
                  className="flex flex-col pb-8 border border-white border-solid max-md:max-w-full"
                >
                  <Image
                    src={img2}
                    alt="Blog post featured image"
                    className="object-contain w-full aspect-[1.21] max-md:max-w-full"
                  />
                  <div
                    className="flex flex-col px-11 mt-8 w-full max-md:px-5 max-md:max-w-full"
                  >
                    <p className="self-start text-amber-500">10 February 2022</p>
                    <h3 className="mt-4 text-2xl font-bold leading-8">
                      Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                    </h3>
                    <div className="flex gap-5 justify-between mt-8">
                      <a href="#" className="hover:text-amber-500 focus:text-amber-500 focus:outline-none" >Learn More</a>
                      <Image
                        src={icon}
                        alt=""
                        className="object-contain shrink-0 self-start mt-1 aspect-[3.8] w-[76px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex flex-col grow text-base text-white max-md:mt-6 max-md:max-w-full"
              >
                <div
                  className="flex flex-col pb-8 border border-white border-solid max-md:max-w-full"
                >
                  <Image
                    src={img3}
                    alt="Blog post featured image"
                    className="object-contain w-full aspect-[1.21] max-md:max-w-full"
                  />
                  <div
                    className="flex flex-col items-start px-11 mt-8 w-full max-md:px-5 max-md:max-w-full"
                  >
                    <p className="self-start text-amber-500">10 February 2022</p>
                    <h3 className="mt-4 text-2xl font-bold leading-8">
                      Curabitur rutrum velit ac congue malesuada
                    </h3>
                    <div className="flex gap-5 justify-between self-stretch mt-8">
                      <a href="#" className="hover:text-amber-500 focus:text-amber-500 focus:outline-none" >Learn More</a>
                      <Image
                        src={icon}
                        alt=""
                        className="object-contain shrink-0 self-start mt-1 aspect-[3.8] w-[76px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className='absolute top-[7759px]'>
        <Footer />

      </div>
    </main>
  );
}
