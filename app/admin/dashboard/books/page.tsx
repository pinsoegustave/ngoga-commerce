"use client"
import AddBookPopup from '@/components/admin-panel/AddBookPopup'
import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'

const Books = () => {

  const [ openPopUp, setOpenPopUp ] = useState(false);

  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl pb-4'>Books info</h2>

        <div className=''>
          <button onClick={() => setOpenPopUp(true)} className='bg-green-500 p-4 rounded-md flex gap-2'><IoIosAddCircle className='text-2xl' />Add a new book.</button>
        </div>
        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>Book ID</th>
                <th>Book URL</th>
                <th>Book Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bo1</td>
                <td>bojfnsdkfksf</td>
                <td><RiDeleteBin5Line 
                className='text-[20px] cursor-pointer text-red-600'
                /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      { openPopUp && ( <AddBookPopup setOpenPopup={setOpenPopUp} /> ) }
    </div>
  )
}

export default Books