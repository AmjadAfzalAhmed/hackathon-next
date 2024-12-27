import { ChevronRight, Search, UserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PiHandbag } from "react-icons/pi"
import bgPic from '/public/images/menutop.png'
import starterMenu from '/public/images/starterMenu.png'
import { BsCupHot } from "react-icons/bs"
import courseMenu from '/public/images/courseMenu.png'
import chef from '/public/images/chef.png'
import soft from '/public/images/soft.png'
import spoon from '/public/images/spoons.png'
import pizza from '/public/images/pizza.png'
import dessert from '/public/images/desert.png'
import drinks from '/public/images/drinks.png'
import bakery from '/public/images/bakery.png'
import wolf from '/public/images/wolf.png'
import bistro from '/public/images/bistro.png'
import fork from '/public/images/fork.png'
import baker from '/public/images/baker.png'
import restaurant from '/public/images/restaurant.png'
import Footer from "@/components/Footer"


const page = () => {
  return (
    <main className="w-[1920px] h-[5282px]">

      {/* Header */}
      <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
        <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
          <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

            <span className="text-white">Food</span>

            <span className="text-amber-500">tuck</span>
          </div>
          <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
            <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
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
          <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Our Menu</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[897px]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-5 h-5 text-white' />
            <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Menu</Link>
          </div>

        </div>

      </div>
      {/* Header ends here */}


      {/* Starter Menu */}


      <div className="w-[1320px] h-[628px] absolute top-[541px] left-[300px] flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <Image
            src={starterMenu}
            alt="Featured menu dish presentation"
            className="object-contain grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div
            className="flex flex-col items-start w-full text-base max-md:mt-10 max-md:max-w-full"
          >
            <BsCupHot className="object-contain w-6 aspect-square text-[#ff9f0d]" />

            <h2
              className="mt-2 text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl"
            >
              Starter Menu
            </h2>
            <div
              className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full"

            >
              <div className="text-zinc-800">Alder Grilled Chinook Salmon</div>
              <div className="text-amber-500" aria-label="Price">32$</div>
            </div>
            <div className="mt-2 text-neutral-600">
              Toasted French bread topped with romano, cheddar
            </div>
            <div className="mt-2 text-zinc-500" aria-label="Calories">560 CAL</div>
            <div
              className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
            <div
              className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none text-amber-500 max-md:max-w-full"

            >
              <div >Berries and creme tart</div>
              <div aria-label="Price">43$</div>
            </div>
            <div className="mt-2 text-neutral-600">
              Gorgonzola, ricotta, mozzarella, taleggio
            </div>
            <div className="mt-2 text-zinc-500" aria-label="Calories">700 CAL</div>
            <div
              className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
            <div
              className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full"

            >
              <div className="text-zinc-800">Tormentoso Bush Pizza Pintoage</div>
              <div className="text-amber-500" aria-label="Price">14$</div>
            </div>
            <div className="mt-2 text-neutral-600">
              Ground cumin, avocados, peeled and cubed
            </div>
            <div className="mt-2 text-zinc-500" aria-label="Calories">1000 CAL</div>
            <div
              className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
            <div className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full"

            >
              <div className="text-zinc-800">Spicy Vegan Potato Curry</div>
              <div className="text-amber-500" aria-label="Price">35$</div>
            </div>
            <div className="mt-2 text-neutral-600">
              Spreadable cream cheese, crumbled blue cheese
            </div>
            <div className="mt-2 text-zinc-500" aria-label="Calories">560 CAL</div>
            <div
              className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
          </div>
        </div>

      </div>

      {/* Main Course */}


      <div className="w-[1320px] h-[628px] absolute top-[1289px] left-[300px] flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-base max-md:mt-10 max-md:max-w-full">
            <BsCupHot className="object-contain w-6 aspect-square text-[#ff9f0d]" />
            <h2 className="mt-2 text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl">Main Course</h2>
            <div className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full">
              <div className="text-zinc-800" >Optic Big Breakfast Combo Menu</div>
              <div className="text-amber-500" aria-label="Price: 32 dollars">32$</div>
            </div>
            <div className="mt-2 text-neutral-600">Toasted French bread topped with romano, cheddar</div>
            <div className="mt-2 text-zinc-500" aria-label="560 calories">560 CAL</div>
            <div className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full" ></div>
            <div className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full">
              <div className="text-zinc-800" >Cashew Chicken With Stir-Fry</div>
              <div className="text-amber-500" aria-label="Price: 43 dollars">43$</div>
            </div>
            <div className="mt-2 text-neutral-600">Gorgonzola, ricotta, mozzarella, taleggio</div>
            <div className="mt-2 text-zinc-500" aria-label="700 calories">700 CAL</div>
            <div className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
            <div className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full">
              <div className="text-zinc-800" >Vegetables & Green Salad</div>
              <div className="text-amber-500" aria-label="Price: 14 dollars">14$</div>
            </div>
            <div className="mt-2 text-neutral-600">Ground cumin, avocados, peeled and cubed</div>
            <div className="mt-2 text-zinc-500" aria-label="1000 calories">1000 CAL</div>
            <div className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
            <div className="flex flex-wrap gap-5 justify-between self-stretch mt-6 text-2xl font-bold leading-none max-md:max-w-full">
              <div className="text-zinc-800" >Spicy Vegan Potato Curry</div>
              <div className="text-amber-500" aria-label="Price: 35 dollars">35$</div>
            </div>
            <div className="mt-2 text-neutral-600">Spreadable cream cheese, crumbled blue cheese</div>
            <div className="mt-2 text-zinc-500" aria-label="560 calories">560 CAL</div>
            <div className="shrink-0 self-stretch mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"></div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <Image src={courseMenu} className="object-contain grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full" alt="Featured main course dish" />
        </div>
      </div>

      {/* CourseMenu Ends Here */}

      {/* Clients & Customers */}

      <div className="w-[1920px] h-[468px] absolute top-[2037px] flex flex-col">
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

      {/* Dessert */}


      <div className="w-[1320px] h-[628px] absolute top-[2625px] left-[300px] flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <Image
            src={dessert}
            alt="Dessert menu featured item"
            className="object-contain grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <BsCupHot className="object-contain w-6 aspect-square text-[#ff9f0d]" />
            <h2
              className="self-start mt-2 text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl"
            >
              Dessert
            </h2>
            <div
              className="flex flex-wrap gap-5 justify-between mt-6 max-md:max-w-full"

            >
              <div className="flex flex-col items-start text-base">
                <h3 className="text-2xl font-bold leading-none text-zinc-800">
                  Fig and lemon cake
                </h3>
                <p className="self-stretch mt-2 text-neutral-600">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="mt-2 text-zinc-500">560 CAL</span>
              </div>
              <div
                className="self-start text-2xl font-bold leading-none text-amber-500"
                aria-label="Price"
              >
                32$
              </div>
            </div>
            <div
              className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
            <div
              className="flex flex-wrap gap-5 justify-between mt-6 text-2xl font-bold leading-none max-md:max-w-full"

            >
              <h3 className="text-zinc-800">Creamy mascarpone cake</h3>
              <div className="text-amber-500" aria-label="Price">43$</div>
            </div>
            <p className="self-start mt-2 text-base text-neutral-600">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <span className="self-start mt-2 text-base text-zinc-500">700 CAL</span>
            <div
              className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"
            ></div>
            <div
              className="flex flex-wrap gap-5 justify-between mt-6 text-2xl font-bold leading-none max-md:max-w-full"

            >
              <h3 className="text-zinc-800">Pastry, blueberries, lemon juice</h3>
              <div className="text-amber-500" aria-label="Price">14$</div>
            </div>
            <p className="self-start mt-2 text-base text-neutral-600">
              Ground cumin, avocados, peeled and cubed
            </p>
            <span className="self-start mt-2 text-base text-zinc-500">1000 CAL</span>
            <div
              className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
            <div
              className="flex flex-wrap gap-5 justify-between mt-6 max-md:max-w-full"

            >
              <div className="flex flex-col">
                <h3
                  className="self-start text-2xl font-bold leading-none text-zinc-800"
                >
                  Pain au chocolat
                </h3>
                <p className="mt-2 text-base text-neutral-600">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
              </div>
              <div
                className="self-start text-2xl font-bold leading-none text-amber-500"
                aria-label="Price"
              >
                35$
              </div>
            </div>
            <span className="self-start mt-2 text-base text-zinc-500">560 CAL</span>
            <div
              className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"

            ></div>
          </div>
        </div>
      </div>

      {/* Drinks */}
      
  <div className="w-[1320px] h-[628px] absolute top-[3363px] left-[300px] flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        
          
          <BsCupHot className="object-contain w-6 aspect-square text-[#ff9f0d]" />
        <h2 className="self-start mt-2 text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl"
        >
          Drinks
        </h2>
        <div className="flex flex-wrap gap-5 justify-between mt-6 max-md:max-w-full" >
          <div className="flex flex-col items-start text-base" >
            <h3 className="text-2xl font-bold leading-none text-zinc-800" >
              Caffè macchiato
            </h3>
            <p className="self-stretch mt-2 text-neutral-600">
              Toasted French bread topped with romano, cheddar
            </p>
            <span className="mt-2 text-zinc-500" aria-label="Calorie information">560 CAL</span>
          </div>
          <div
            className="self-start text-2xl font-bold leading-none text-amber-500"
            aria-label="Price"
          >
            32$
          </div>
        </div>
        <div
          className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"
          
        ></div>
        <div
          className="flex flex-wrap gap-5 justify-between mt-6 text-2xl font-bold leading-none max-md:max-w-full"
          
        >
          <h3 className="text-zinc-800" >Aperol Spritz Capacianno</h3>
          <div className="text-amber-500" aria-label="Price">43$</div>
        </div>
        <p className="self-start mt-2 text-base text-neutral-600">
          Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <span className="self-start mt-2 text-base text-zinc-500" aria-label="Calorie information">700 CAL</span>
        <div
          className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"
          
        ></div>
        <div
          className="flex flex-wrap gap-5 justify-between mt-6 text-2xl font-bold leading-none max-md:max-w-full"
          
        >
          <h3 className="text-zinc-800" >Caffe Latte Campuri</h3>
          <div className="text-amber-500" aria-label="Price">14$</div>
        </div>
        <p className="self-start mt-2 text-base text-neutral-600">
          Ground cumin, avocados, peeled and cubed
        </p>
        <span className="self-start mt-2 text-base text-zinc-500" aria-label="Calorie information">1000 CAL</span>
        <div
          className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"
          
        ></div>
        <div
          className="flex flex-wrap gap-5 justify-between mt-6 text-2xl font-bold leading-none max-md:max-w-full"
          
        >
          <h3 className="text-zinc-800">Tormentoso BushTea Pintoage</h3>
          <div className="text-amber-500" aria-label="Price">35$</div>
        </div>
        <p className="self-start mt-2 text-base text-neutral-600">
          Spreadable cream cheese, crumbled blue cheese
        </p>
        <span className="self-start mt-2 text-base text-zinc-500" aria-label="Calorie information">560 CAL</span>
        <div
          className="shrink-0 mt-4 h-px border border-dashed bg-neutral-200 border-neutral-200 max-md:max-w-full"
          
        ></div>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
      <Image
        src={drinks}
        className="object-contain grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
        alt="Featured drink presentation"
      />
    </div>
  </div>

  {/* Partners */}
  <div className="w-[1322px] h-[275px] absolute top-[4111px] left-[295px] flex flex-col items-center">
  <div className="z-10 mt-0 text-lg leading-none text-zinc-800" >
    Partners & Clients
  </div>
  <div
    className="mt-5 text-5xl font-bold leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl"
    
  >
    We work with the best pepole
  </div>
  <div
    className="flex flex-wrap gap-5 justify-between self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full"
    
    aria-label="Partner logos"
  >
    <Image
      src={restaurant}
      className="object-contain shrink-0 max-w-full aspect-[1.87] w-[241px]"
      alt="Partner logo 1"
      
    />
    <Image
      src={baker}
      className="object-contain shrink-0 max-w-full aspect-[1.3] w-[166px]"
      alt="Partner logo 2"
      
    />
    <Image
      src={fork}
      className="object-contain shrink-0 w-36 max-w-full aspect-[1.13]"
      alt="Partner logo 3"
    
    />
    <Image
      src={wolf}
      className="object-contain shrink-0 max-w-full aspect-[1.02] w-[131px]"
      alt="Partner logo 4"
    
    />
    <Image
      src={bistro}
      className="object-contain shrink-0 max-w-full aspect-[1.32] w-[170px]"
      alt="Partner logo 5"
      
    />
    <Image
      src={bakery}
      className="object-contain shrink-0 max-w-full aspect-[0.88] w-[114px]"
      alt="Partner logo 6"
      
    />
  </div>
</div>

{/* Footer */}

<div className="footer absolute top-[4506px]">
<Footer />
</div>





    </main>
  )
}

export default page