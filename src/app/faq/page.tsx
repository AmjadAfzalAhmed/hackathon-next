import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { ChevronRight } from 'lucide-react'
import bgPic from '/public/images/menutop.png'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const FAQ = () => {
  return (
    <main className='w-full h-[2126px]' >
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

          <Nav />

          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">FAQ</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <Link href='/about' className="text-amber-500" aria-current="page">About</Link>
          </nav>
        </div>
      </div>
      {/* Mid Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-zinc-800 mb-4">
            Questions Look Here
          </h2>
          <p className="text-base text-center text-neutral-600 mb-10 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
          <div className="w-full space-y-6">
            {[
              { question: "How we serve food?", icon: FaPlus },
              { question: "How can we get in touch with you?", icon: FaMinus },
              { question: "How is our food quality?", icon: FaPlus },
              { question: "What will be delivered? And When?", icon: FaPlus },
              { question: "How do we give home delivery?", icon: FaPlus },
              { question: "Is this restaurant 24 hours open?", icon: FaPlus },
            ].map((item, index) => (
              <div key={index} className="bg-stone-100 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-zinc-800 pr-4">{item.question}</h3>
                  <item.icon className="w-5 h-5 flex-shrink-0 text-zinc-800" />
                </div>
                <p className="mt-4 text-base text-neutral-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='sm:w-full sm:absolute sm:top-[1672px]'>
        <Footer />
      </div>

    </main>
  )
}

export default FAQ