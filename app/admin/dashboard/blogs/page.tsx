"use client"
import AddBlogPopup from '@/components/admin-panel/AddBlogPopup'
import ProductRow from '@/components/admin-panel/ProductRow'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoIosAddCircle } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'


const Blogs = () => {
  
  const [ blogs, setBlogs ] = useState([]);
  const [ openPopUp, setOpenPopUp ] = useState(false);
  
  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl pb-4'>Blogs info</h2>
        <div>
          <button onClick={() => setOpenPopUp(true)} className='bg-green-600 p-4 rounded-md flex gap-2'>
            <IoIosAddCircle className='text-2xl' />Add a new blog
          </button>
        </div>
        {/* <div className=''> */}
          <table className='w-full mt-4 h-[clac(100vh-180px)] overflow-y-auto'>
            <tbody>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>Blog ID</th>
                <th>Blog Title</th>
                <th>Blog Image</th>
                <th>Blog Description</th>
                <th>Blog Actions</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  BLOG001
                </td>
                <td>
                  My journey to architect
                </td>
                <td>
                  Image
                </td>
                <td>
                  Lorem ipsum dolor sit 
                  </td>
                <div>
                  {/* <td> */}
                  <td className='text-2xl flex items-center gap-2 text-gray-600'>
                <CiEdit
                className='cursor-pointer hover:text-black' 
                />
                <RiDeleteBin5Line 
                className='text-[20px] cursor-pointer text-red-600'
                />
            </td>
                  {/* </td> */}
                </div>
              </tr>
            </tbody>
          </table>
        {/* </div> */}
      </div>
      { openPopUp && ( <AddBlogPopup setOpenPopUp={setOpenPopUp} /> ) }
    </div>
  )
}

export default Blogs