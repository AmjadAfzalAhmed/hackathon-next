import Image from 'next/image'
import card1 from '/public/images/card1.png'
import card2 from '/public/images/card2.png'
import card3 from '/public/images/card3.png'
import card4 from '/public/images/card4.png'


function HomeSection6() {
    return (
        <div>
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

        </div>
    )
}

export default HomeSection6
