import Image from 'next/image'
import one from '/public/images/one.png'
import two from '/public/images/two.png'
import three from '/public/images/three.png'
import four from '/public/images/four.png'

function HomeSection2() {
    return (
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
                                    className="object-cover absolute inset-0 size-full rounded-md "
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
    )
}

export default HomeSection2
