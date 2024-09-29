import Image from 'next/image'
import React from 'react'

const BlogForm = () => {
  return (
    <form className='flex flex-col gap-4'>
        <Image 
        className='max-h-[200px] w-auto object-contain rounded-md opacity-40'
        src={'/book2.jpg'}
        width={1000}
        height={300}
        alt='blog_Image'
        />
        <div>
          <label className='block ml-1'>Blog Title</label>
          <input 
          className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
          type="text" 
          // value={}
          required
          />
        </div>
        <div>
          <label className='block ml-1'>Blog Description</label>
          <input type="text"
          className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
          required
          />
        </div>
        <div className='flex justify-end'>
          <button className='bg-pink text-white px-8 py-2 rounded-md'>Add</button>
        </div>
    </form>
  )
}

export default BlogForm