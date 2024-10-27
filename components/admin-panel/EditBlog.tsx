import React, { Dispatch, SetStateAction } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface PropsType {
    setEdit: Dispatch<SetStateAction<boolean>>;
}

const EditBlog = ({ setEdit }: PropsType) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center' onClick={() => setEdit(false)}>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 cursor-pointer text-red-600' onClick={() => setEdit(false)} />
            EditBlog
        </div>
    </div>
  )
}

export default EditBlog