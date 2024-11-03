'use client'
import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
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

  // const blog = await getBlog(params.id)
  // const router = useRouter();
  useEffect(() => {
    getBlog(params.id).then((data) => setBlog(data));
  }, [params.id]);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);  

  if(!blog) {
    return <p>loading.....</p>;
  } 
  // useEffect(() => {
  //   axios.get(`/api/get_blogs/${_id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setStory(res.data);
  //     })
  //     .catch((err) => console.error('Error fetching blogs: ', err));
  // }, []);

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