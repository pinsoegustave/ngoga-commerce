import React, { Dispatch, SetStateAction } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup }: PropsType) => {

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600' onClick={() => setOpenPopup(false)} />

            <h2 className='text-2xl -mt-3'>Add new music link</h2>
            <form className='mt-6 w-fit space-y-4 mx-auto'>
                <input type="text"
                className='border block border-gray-500 outiline-none px-4 py-2 rounded-lg w-fit'
                placeholder='Paste YouTube link here'
                />
                <div className='flex justify-end'>
                    <button className='bg-accent block text-white px-8 py-2 rounded-lg self-center'>Add link</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Popup;