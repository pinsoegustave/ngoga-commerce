"use client"
import Popup from '@/components/admin-panel/Popup';
import ProductRow from '@/components/admin-panel/ProductRow';
import React, { useState } from 'react'
import { IoAddCircle } from 'react-icons/io5';

// interface PropsType {
//   setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
// }

const Music = () => {

  const [ openPopup, setOpenPopup ] = useState(false);

  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl pb-4'>Music info.</h2>
        <div>
          <button onClick={() => setOpenPopup(true)} className='bg-green-500 p-4 rounded-md flex gap-2'><IoAddCircle className='text-2xl' /> Add new music</button>
        </div>
        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No</th>
                <th>Youtube link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <ProductRow 
              setOpenPopup={setOpenPopup}
              />
            </tbody>
          </table>
        </div>
      </div>
      { openPopup && ( <Popup setOpenPopup={setOpenPopup} /> ) }
    </div>
  )
}

export default Music;