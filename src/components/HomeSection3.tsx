import Image from 'next/image'
import featured from '/public/images/featured.png'
import two from '/public/images/two.png'
import pic5 from '/public/images/pic5.png'
import pic6 from '/public/images/pic6.png'
import pic7 from '/public/images/pic7.png'
import fastFood from '/public/images/fastFood.png'
import ham from '/public/images/Hamburger.png'
import cookie from '/public/images/Cookie.png'
import wine from '/public/images/Wine.png'


function HomeSection3() {
    return (
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
    )
}

export default HomeSection3
