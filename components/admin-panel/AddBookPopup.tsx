"use client"
import { useAppDispatch } from '@/redux/hooks';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import axios from 'axios';
import { setLoading } from '@/redux/features/loadingSlice';

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

interface Ibook {
    book_name: string,
    book_URL: string,
}

const AddBookPopup = ({ setOpenPopup }: PropsType) => {
    const [book, setBook ] = useState<Ibook>({
        book_name: "",
        book_URL: "",
    });

    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.post("/api/add_book", book).then(res => {
            setBook({
                book_name: "",
                book_URL: ""
            });
        })
        .catch((err: any) => console.log(err))
        .finally(() => setLoading(false));  
    }
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 text-red-600 cursor-pointer' onClick={() => setOpenPopup(false)} />

            <h2 className='text-2xl'>Add a new book</h2>
            <form onSubmit={handleSubmit} className='mt-6 w-fit space-y-4 mx-auto'>
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' 
                placeholder='Book Name'
                value={book.book_name}
                onChange={(e) => setBook({ ...book, book_name: e.target.value })}
                required
                />
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                placeholder='Book link'
                value={book.book_URL}
                onChange={(e) => setBook({ ...book, book_URL: e.target.value })}
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