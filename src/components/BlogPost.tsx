import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoCommentDiscussion } from 'react-icons/go';
import { PiUserCirclePlusLight } from 'react-icons/pi';
import blogPosts from '@/data/blogposts.json'


const BlogPost: React.FC = () => {
  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className='hover:grayscale transition-all duration-200' />
            <div className="absolute top-4 left-4 bg-amber-500 text-white p-2 rounded-md">
              <p className="text-sm">{post.date}</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 text-neutral-600 mb-2">              
              <IoCalendarNumberOutline className="w-4 h-4 mr-2 text-amber-500" />
              <span className='text-sm'>{post.date}</span>
              <GoCommentDiscussion className="w-4 h-4 mr-2 text-amber-500" />
              <PiUserCirclePlusLight className="w-4 h-4 mr-2 text-amber-500" />
              <span className='text-gray-500 text-sm'>Admin</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-neutral-600 mb-4">{post.excerpt}</p>
            <Link href="/blog/blog-details" className="inline-flex items-center text-amber-500 border border-amber-500 rounded-md px-4 py-2 hover:bg-amber-500 hover:text-white transition-colors">
              Read More
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogPost

