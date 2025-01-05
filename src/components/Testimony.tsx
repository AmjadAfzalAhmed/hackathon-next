import Image from 'next/image'
import round from '/public/images/homeSec7.png'
import numb from '/public/images/Quotes.png'
import stars from '/public/images/star.png'
import sideImg from '/public/images/sideImg.png'

export default function Testimony() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl text-amber-500 font-greatVibes mb-2">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-black">
            What our client are saying
          </h3>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white shadow-2xl rounded-lg p-8 md:p-12">
            <Image
              src={round}
              alt="Profile picture of testimonial author"
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white"
            />
            <div className="pt-16 text-center">
              <Image
                src={numb}
                alt="Quotation mark icon"
                className="w-12 h-12 mx-auto mb-6"
              />
              <blockquote className="text-lg text-neutral-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                consequat.
              </blockquote>
              <Image
                src={stars}
                alt="Rating stars"
                className="w-36 mx-auto mb-4"
              />
              <div className="text-2xl font-bold text-zinc-800 mb-1">
                Alamin Hasan
              </div>
              <div className="text-base text-zinc-500">Food Specialist</div>
            </div>
          </div>
          <Image
            src={sideImg}
            alt="Decorative dots"
            className="mt-8 mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

