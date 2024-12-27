import Image from 'next/image'
import bgPic from '/public/images/menutop.png'
import chef from '/public/images/chef.png'
import soft from '/public/images/soft.png'
import spoon from '/public/images/spoons.png'
import pizza from '/public/images/pizza.png'

function HomeSection4() {
  return (
    <div>
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
    </div>
  )
}

export default HomeSection4
