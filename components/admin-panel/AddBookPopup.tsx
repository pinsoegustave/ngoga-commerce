"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

const AddBookPopup = ({ setOpenPopup }: PropsType) => {

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 text-red-600' onClick={() => setOpenPopup(false)} />

            <h2 className='text-2xl'>Add a new book</h2>
            <form action="" className='mt-6 w-fit space-y-4 mx-auto'>
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' 
                placeholder='Book Name'
                required
                />
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                placeholder='Book link'
                required
                />
                <div className='flex justify-end'>
                    <button className='bg-[#0989FF] text-black px-8 py-2 rounded-lg self-center'>Save your book</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddBookPopup