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

import Image from 'next/image'

function HomeSection5() {
  return (
    <div>
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
    </div>
  )
}

export default HomeSection5
