import Image from 'next/image'
import round from '/public/images/homeSec7.png'
import numb from '/public/images/Quotes.png'
import stars from '/public/images/star.png'
import sideImg from '/public/images/sideImg.png'

function HomeSection7() {
    return (
        <div>
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
        </div>
    )
}

export default HomeSection7
