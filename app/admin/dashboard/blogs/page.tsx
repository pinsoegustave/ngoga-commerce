"use client"
import AddBlogPopup from '@/components/admin-panel/AddBlogPopup'
import BlogRow from '@/components/admin-panel/BlogRow'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'

export interface IBlogs {
  _id: string,
  blogImage: string,
  fileKey: string,
  blogTitle: string,
  description: string,
  
}

const Blogs = () => {
  
  const [ blogs, setBlogs ] = useState([]);
  const [ openPopUp, setOpenPopUp ] = useState(false);
  const [updateBlog, setUpdateBlog] = useState(false);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios.get("/api/get_blogs")
        .then((res) => setBlogs(res.data))
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoading(false)));
}, []);

  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl pb-4'>Blogs info</h2>
        <div>
          <button onClick={() => setOpenPopUp(true)} className='bg-green-600 p-4 rounded-md flex gap-2'>
            <IoIosAddCircle className='text-2xl' />Add a new blog
          </button>
        </div>
        <div className='mt-4 h-[calc(100vh-240px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>Blog ID</th>
                <th>Blog Title</th>
                <th>Blog Image</th>
                <th>Blog Description</th>
                <th>Blog Actions</th>
              </tr>
            </thead>
            <tbody>
              { blogs.map((getme: IBlogs, index) => (
                <BlogRow 
                  key={index}
                  srNo={index + 1}
                  blogged={getme}
                  setUpdateBlog={setUpdateBlog}
                  />
                )) }
            </tbody>
          </table>
      </div>
      </div>
      { openPopUp && ( <AddBlogPopup setOpenPopUp={setOpenPopUp} /> ) }
      
    </div>
  )
}

export default Blogs