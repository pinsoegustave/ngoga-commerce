import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Blog = {
    _id: string;
    blogImage: string;
    blogTitle: string;
    description: string;
}


const Blog = () => {
    const [ blogs, setBlogs ] = useState([]);

    useEffect(() => {
        try {
            axios.get('/api/get_blogs')
            .then((res) => {
                console.log(res.data);
                setBlogs(res.data);
            });
        }
        catch (error) {
            console.error('Error fetching blogs: ', error);
        }
    }, []);

  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading'>
            MY <span className='text-yellow-400'>BLOG</span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
           { blogs.map((blog:Blog) => ( 
            <div key={blog._id}>
                <div className='w-[100%] relative h-[400px]'>
                    <Image 
                    src={blog.blogImage}
                    alt={blog.blogTitle}
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem bg-[#55a6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        June 02, 2024
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                            <p className='text-white'>Me</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55a6a5]' />
                            <p className='text-white'>Comments(4)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>{blog.blogTitle}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
};


export default Blog;