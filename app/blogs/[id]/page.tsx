'use client'
import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react'

interface Blog {
  _id: number;
  blogImage: string;
  blogTitle: string;
  description: string;
}

async function getBlog(id: string): Promise<Blog | null> {
  const res = await fetch(`/api/get_blogs/${id}`);
  
  if(!res.ok) return null;
  return res.json();
}


const page = async ({ params }: {params: { id: string}}) => {
  const [ nav, setNav ] = useState(false);
  const [ blog, setBlog ] = useState<Blog | null>(null);

  
  useEffect(() => {
    getBlog(params.id).then((data) => setBlog(data));
  }, [params.id]);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);  

  if(!blog) {
    return <p>loading.....</p>;
  } 

  return (
    <div className='overflow-x-hidden'>
      <div className=''>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
      </div>
      <h1>{blog.blogTitle}</h1>
    </div>
  )
};

export default page