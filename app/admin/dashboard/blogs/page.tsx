"use client"
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoIosAddCircle } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'

const Blogs = () => {
  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl pb-4'>Blogs info</h2>
        <div>
          <button className='bg-green-600 p-4 rounded-md flex gap-2'>
            <IoIosAddCircle className='text-2xl' />Add a new blog
          </button>
        </div>
        {/* <div className=''> */}
          <table className='w-full mt-4 h-[clac(100vh-180px)] overflow-y-auto'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>Blog ID</th>
                <th>Blog Title</th>
                <th>Blog Description</th>
                <th>Blog Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>BLOG001</div>
                </td>
                <td>
                  <div>My journey to architect</div>
                </td>
                <td>
                  <div>Lorem ipsum dolor sit </div>
                  </td>
                <div>
                  <td>
                  <div className='text-2xl flex items-center gap-2 text-gray-600'>
                <CiEdit
                className='cursor-pointer hover:text-black' 
                />
                <RiDeleteBin5Line 
                className='text-[20px] cursor-pointer text-red-600'
                />
            </div>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Blogs