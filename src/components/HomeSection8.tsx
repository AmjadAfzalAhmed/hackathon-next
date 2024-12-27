import Image from "next/image"
import bgpicture from '/public/images/homeSec8.png'
import { CiPlay1 } from "react-icons/ci"


function HomeSection8() {
    return (
        <div>
            <div className="w-[1918px] absolute top-[6229px] flex flex-col text-white rounded-none" aria-label="Restaurant Process Section">
                <div
                    className="flex relative flex-col justify-center items-end px-20 py-28 w-full min-h-[558px] max-md:px-5 max-md:py-24 max-md:max-w-full"
                >
                    <Image
                        src={bgpicture }
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

        </div>
    )
}

export default HomeSection8
