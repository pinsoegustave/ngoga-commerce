"use client"
import AddBookPopup from '@/components/admin-panel/AddBookPopup'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'

export interface IBooks {
  book_id: string,
  book_name: string,
  book_URL: string
}

const Books = () => {

  const [ books, setBooks ] = useState([]); 
  const [ openPopUp, setOpenPopUp ] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    axios.get("/api/get_books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  }, []);

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
            <tbody className='w-full'>
              <tr>
                <td><div>bO12</div></td>
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