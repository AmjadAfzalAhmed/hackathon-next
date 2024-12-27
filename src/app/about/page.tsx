import Image from 'next/image'
import Link from 'next/link'
import bg from '/public/images/aboutBg.png'
import { PiHandbag, } from "react-icons/pi";
import { ChevronRight, Search, } from 'lucide-react';
import { FiUser } from "react-icons/fi";
import two from '/public/images/fastFood.png'
import one from '/public/images/featured.png'
import three from '/public/images/third.png'
import { CiPlay1 } from "react-icons/ci";
import bg1 from '/public/images/chooseBg.png'
import { BsCupHot } from "react-icons/bs"
import person from '/public/images/Person.png'
import stud from '/public/images/Student.png'
import trans from '/public/images/yellowTrans.png'
import mark from '/public/images/mark.png'
import round from '/public/images/homeSec7.png'
import numb from '/public/images/Quotes.png'
import stars from '/public/images/star.png'
import sideImg from '/public/images/sideImg.png'
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import Footer from '@/components/Footer';

function About() {
  return (
    <main className='w-[1920px] h-[5900px]'>
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bg} className="object-cover absolute inset-0 size-full" alt="About section background" />
          <nav className="flex relative flex-col justify-center items-center self-stretch px-16 py-7 w-full bg-stone-950 max-md:px-5 max-md:max-w-full" aria-label="Main navigation">
            <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1320px] max-md:max-w-full">
              <a href="/" className="self-stretch text-2xl font-bold leading-none text-amber-500" aria-label="Foodtuck home">
                F<span className="text-white">oo</span>d<span className="text-amber-500">tuck</span>
              </a>
              <div className="flex flex-wrap gap-8 self-stretch my-auto text-base text-white max-md:max-w-full" >
                <Link href="/" className="grow font-bold text-amber-500" >Home</Link>
                <Link href="/menu" className="hover:text-amber-500" >Menu</Link>
                <Link href="/blog" className="hover:text-amber-500" >Blog</Link>
                <Link href="/pages" className="hover:text-amber-500" >Pages</Link>
                <Link href="/about" className="hover:text-amber-500" >About</Link>
                <Link href="/shop" className="hover:text-amber-500" >Shop</Link>
                <Link href="/contact" className="hover:text-amber-500" >Contact</Link>
              </div>
              <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">

                <Search className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
                <FiUser className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
                <PiHandbag className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />

              </div>
            </div>
          </nav>
          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">About Us</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <a href="/" className="grow text-white hover:text-amber-500">Home</a>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <span className="text-amber-500" aria-current="page">About</span>
          </nav>
        </div>
      </div>

      {/* First Sec */}

      <div className="rounded-none w-[1320px] h-[734px] absolute top-[530px] left-[300px]" >
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Image
                    src={one}
                    alt="Featured food presentation"
                    className="object-contain w-full rounded-md aspect-[0.63] max-md:mt-6"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-14 max-md:mt-10">
                    <Image
                      src={two}
                      alt="Culinary preparation showcase"
                      className="object-contain w-full rounded-md aspect-[1.14]"
                    />
                    <Image
                      src={three}
                      alt="Dining experience highlight"
                      className="object-contain mt-7 w-full rounded-md aspect-[0.81]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2.5 self-start text-lg leading-none text-amber-500">
                <div className="grow">About us</div>
                <div className="shrink-0 my-auto h-px bg-amber-500 border border-amber-500 border-solid w-[34px]"></div>
              </div>
              <h2 className="mt-2 text-5xl font-bold leading-[56px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Food is an important
                <br />
                part Of a balanced Diet
              </h2>
              <p className="mt-11 mr-7 text-base leading-6 text-neutral-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
              <div className="flex gap-4 mt-10 max-w-full font-bold w-[379px] max-md:mt-10">
                <button className="gap-2.5 self-stretch px-12 py-4 text-lg leading-none text-white bg-amber-500 rounded-md max-md:px-5 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                  Show more
                </button>
                <button className="flex gap-2.5 text-base text-zinc-800 items-center hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2">
                  <div className="ico flex items-center justify-center w-[60px] h-[60px] rounded-full bg-amber-500">
                    <CiPlay1 className=" w-10 h-6 shrink-0 aspect-square text-white" />
                  </div>

                  <span className="my-auto">Watch video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}

      <div className="w-[1320px] h-[865px] absolute top-[1384px] left-[300px] flex flex-col items-center pb-2">
        <h2 id="why-choose-title" className="text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl">
          Why Choose us
        </h2>
        <p className="mt-2 text-base leading-6 text-center text-neutral-600 w-[579px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <Image
          src={bg1}
          alt="Restaurant interior showcasing our dining environment"
          className="object-contain self-stretch mt-14 w-full aspect-[3.42] max-md:mt-10 max-md:max-w-full"
        />
        <div className="mt-14 w-full max-w-[1258px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex overflow-hidden flex-col grow items-center pb-1.5 mt-3.5 max-md:mt-10"

              >
                <Image src={stud} alt='graduateIcon' className="object-contain w-20 h-20 aspect-square"
                />

                <h3 className="mt-6 text-2xl font-bold leading-none text-zinc-800">
                  Best Chef
                </h3>
                <p className="self-stretch mt-7 text-base leading-6 text-center text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex overflow-hidden flex-col grow items-center pb-1.5 mt-3 max-md:mt-10"

              >
                <BsCupHot className="object-contain w-20 h-20 aspect-square" />

                <h3 className="mt-6 text-2xl font-bold leading-none text-zinc-800">
                  120 Item food
                </h3>
                <p className="self-stretch mt-4 text-base leading-6 text-center text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center pb-1.5 max-md:mt-10">


                <Image src={person} alt="manIco" className="object-contain w-20 h-20 aspect-[1.03]"
                />

                <h3 className="mt-6 text-2xl font-bold leading-none text-zinc-800">
                  Clean Environment
                </h3>
                <p className="self-stretch mt-4 text-base leading-6 text-center text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member */}

      <div className='w-[1920px] h-[686px]'>
        <div className='w-[1920px] h-[460px] bg-amber-500 opacity-70 absolute top-[2369px] -z-10'>
        </div>
        <Image src={trans} alt='team member' className='w-[1920px] h-[460px] object-cover -z-50 absolute top-[2369px]' />
        <div className="text flex flex-col items-center justify-center max-w-[418px] min-h-[176px] absolute top-[2457px] left-[742px] text-white text-center">

          <h1 className='w-[324px] h-[56px] text-5xl font-bold z-10 '>Team Member</h1>

          <p className='w-[418px] h-[48px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue
          </p>

        </div>

        <div className="cards flex absolute top-[2667px] left-[300px] z-30 gap-5">
          <div className="card-one w-[312px] h-[398px] flex flex-col text-center bg-white shadow">
            <Image src={mark} alt='card one' className='w-[312px] h-[320px]' />
            <h2 className='font-semibold text-xl mt-4'>Mark Henry</h2>
            <p>Owner</p>
          </div>
          <div className="card-two w-[312px] h-[398px] flex flex-col text-center bg-white shadow">
            <Image src={mark} alt='card two' className='w-[312px] h-[320px]' />
            <h2 className='font-semibold text-xl mt-4'>Lucky Helen</h2>
            <p>Chef</p>
          </div>
          <div className="card-three w-[312px] h-[398px] flex flex-col text-center bg-white shadow">
            <Image src={mark} alt='card three' className='w-[312px] h-[320px]' />
            <h2 className='font-semibold text-xl mt-4'>Moon Henry</h2>
            <p>Founder</p>
          </div>
          <div className="card-four w-[312px] h-[398px] flex flex-col text-center bg-white shadow">
            <Image src={mark} alt='card four' className='w-[312px] h-[320px]' />
            <h2 className='font-semibold text-xl mt-4'>Tom Morrow</h2>
            <p>Specialist</p>
          </div>
        </div>
        <div className="socials w-[37px] h-[176px] flex flex-col gap-3 justify-center items-center absolute top-[2681px] left-[887px] z-50 inset-0">
              <div className='w-[36px] h-[35px] bg-white hover:bg-amber-500 hover:text-white flex items-center justify-center'><FaFacebookF /></div>
              <div className='w-[36px] h-[35px] bg-white hover:bg-amber-500 hover:text-white flex items-center justify-center'><FaTwitter /> </div>
              <div className='w-[36px] h-[35px] bg-amber-500 text-white hover:bg-white hover:text-black flex items-center justify-center'><FaYoutube /></div>
              <div className='w-[36px] h-[35px] bg-white hover:bg-amber-500 hover:text-white flex items-center justify-center'><FaPinterest /></div>  
        </div>
      </div>

      {/* What Clients Say  */}
      <div className="w-[1273px] h-[770px] absolute top-[3175px] left-[300px] flex overflow-hidden flex-col items-start pr-20 pb-5 max-md:pr-5" aria-label="Testimonials Section">
        <h2 className="text-3xl leading-none text-amber-500 max-md:ml-1 font-greatVibes">
          Testimonials
        </h2>
        <h3 className="mt-2 text-5xl font-bold leading-none text-black max-md:max-w-full max-md:text-4xl">
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

      {/* Food Menu */}

      <div className="flex flex-col pt-6 w-[1320px] h-[941px] absolute top-[4065px] left-[300px]">
        <h2 className="self-center text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl">
          Our Food Menu
        </h2>
        <p className="self-center mt-2 text-base leading-6 text-center text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <nav aria-label="Menu Categories" className="flex flex-wrap gap-10 self-center mt-14 max-w-full text-xl leading-snug whitespace-nowrap text-neutral-600 w-[622px] max-md:mt-10">
          <button className="grow text-amber-500" aria-current="true">Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Dessert</button>
          <button>Drink</button>
          <button>Snack</button>
        </nav>
        <div className="mt-6 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[2px] max-md:max-w-full" ></div>
        <div className="z-10 shrink-0 ml-96 h-0.5 bg-amber-500 border-2 border-amber-500 border-solid w-[91px] max-md:ml-2.5" aria-hidden="true"></div>
        <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-7 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none text-amber-500 max-md:max-w-full">
                  <h3>Alder Grilled Chinook Salmon</h3>
                  <span aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-6 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-7 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-6 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
          </div>
        </div>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-7 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-6 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-7 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col w-full text-base max-md:mt-6 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-2xl font-bold leading-none max-md:max-w-full">
                  <h3 className="text-zinc-800">Alder Grilled Chinook Salmon</h3>
                  <span className="text-amber-500" aria-label="Price">32$</span>
                </div>
                <p className="self-start mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="self-start mt-2 text-zinc-500" aria-label="Calories">560 CAL</span>
                <div className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full" ></div>
              </article>
            </div>
          </div>
        </div>
        <button className="gap-2.5 self-center px-8 py-3.5 mt-14 text-base text-amber-500 border border-amber-500 border-solid max-md:px-5 max-md:mt-10">
          View menu
        </button>
      </div>

      {/* Footer */}
      <div className="footer absolute top-[5126px]">
        <Footer />
      </div>

    </main>
  )
}

export default About
