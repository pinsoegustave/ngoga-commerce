"use client"
import AddBookPopup from '@/components/admin-panel/AddBookPopup'
import BookRow from '@/components/admin-panel/BookRow'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'

export interface IBooks {
  _id: string,
  book_imgSrc: string,
  fileKey: string,
  book_name: string,
  book_URL: string
}

interface PropsType {
  srNo: number;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateBook: React.Dispatch<React.SetStateAction<boolean>>;
  book: IBooks;
}
const Books = ({srNo, setOpenPopup, book, setUpdateBook }: PropsType) => {

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
                <th>Book Name</th>
                <th>Book Image Cover</th>
                <th>Book URL</th>
                <th>Book Action</th>
              </tr>
            </thead>
            <tbody>
              { books.map((book: IBooks, index) => (
                <BookRow 
                  key={book._id}
                  srNo={index + 1}
                  book={book}
                  setUpdateBook={setUpdateBook}
                />
              )) }
            </tbody>
          </table>
        </div>
      </div>
      { openPopUp && ( <AddBookPopup setOpenPopup={setOpenPopUp} /> ) }
    </div>
  )
}

export default Books