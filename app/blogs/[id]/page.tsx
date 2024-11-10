'use client'
import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Blog {
  _id: number;
  blogImage: string;
  blogTitle: string;
  description: string;
}
 function getBlog(id: string): Promise<Blog | null> {

    return axios.get(`/api/get_blogs/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching blogs: ", error);
      return null;
    });
    
}
const page = ({ params }: {params: { id: string}}) => {
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