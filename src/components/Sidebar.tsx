import React from 'react'
import Image from 'next/image'
import prince from '/public/images/prince.png'
import review from '/public/images/review.png'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import recent from '@/data/recent.json'
import filter from '@/data/filter.json'
import tags from '@/data/popular.json'
import photos from '@/data/gallery.json'



const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search Your Keyword"
          className="w-full pr-16 rounded-none"
        />
        <div className="absolute right-0 top-0 h-full w-16 flex items-center justify-center bg-amber-500">
          <Search className="text-white" />
        </div>
      </div>

      {/* Author Profile */}
      <div className="bg-white p-6 border border-neutral-200 text-center">
        <Image
          src={prince}
          alt="Profile picture of Prince Miyako"
          width={115}
          height={115}
          className="mx-auto rounded-full"
        />
        <h2 className="mt-4 text-xl font-bold">Prince Miyako</h2>
        <p className="mt-2 text-neutral-600">Blogger/Photographer</p>
        <div className='flex items-center pl-[100px]'>
          <Image src={review} alt='stars' />
          <span>(review)</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat itaque
          sit delectus saepe eos totam alias dolorum enim cupiditate hic.</p>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
        {recent.map((post) => (
          <div key={post.id} className='flex gap-2 mb-4'>
            <Image src={post.image} alt='post1' width={92} height={92} className='hover:scale-105 transition-all cursor-pointer' />
            <div className='flex flex-col gap-2'>
              <p className='text-sm text-gray-500'>{post.date}</p>
              <p className='text-sm'>{post.excerpt}</p>
            </div>
            <hr className='h-1 bg-gray-500' />
          </div>
        ))}

      </div>

      {/* Filter By Menu */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Filter By Menu</h2>
        {/* Add filter menu items here */}
        {filter.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center justify-between gap-4 font-bold text-zinc-800 mb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={filter.image}
                alt="Chicken Fry"
                width={67}
                height={62}
                className="hover:scale-105 transition-all"
              />
              <span>{filter.title}</span>
            </div>
            <span className="text-center">{filter.quant}</span>
          </div>
        ))}
      </div>


      {/* Popular Tags */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Popular Tags</h2>

        <div className="grid grid-cols-3 gap-4 text-sm">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className="px-5 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {tag.tag}
            </button>
          ))}
        </div>
      </div>


      {/* Photo Gallery */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Photo Gallery</h2>

        <div className="grid grid-cols-3 gap-3 mt-3">
          {photos.map((photo) => (
            <Image
              key={photo.id}
              src={photo.image}
              alt="galleryImg"
              width={100}
              height={92}
              className="object-cover hover:scale-90 transition-all"
            />
          ))}
        </div>
      </div>


      {/* Follow Us */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
        <div className="flex gap-2 pl-4">
          <a href="#" className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors">
            <FaPinterest />
          </a>
          <a href="#" className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

