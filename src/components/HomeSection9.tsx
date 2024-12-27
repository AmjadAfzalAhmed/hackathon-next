import Image from 'next/image'
import img1 from '/public/images/img1.png'
import img2 from '/public/images/img2.png'
import img3 from '/public/images/img3.png'
import icon from '/public/images/Icon.png'

function HomeSection9() {
    return (
        <div>
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
        </div>
    )
}

export default HomeSection9
