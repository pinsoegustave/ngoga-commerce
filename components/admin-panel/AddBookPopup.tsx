"use client"
import { useAppDispatch } from '@/redux/hooks';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { setLoading } from '@/redux/features/loadingSlice';
import { UploadButton } from '@/utils/uploadthing';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import Image from 'next/image';

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

interface Ibook {
    book_imgSrc: null | string;
    fileKey: null | string;
    book_name: string,
    book_URL: string,
}

const AddBookPopup = ({ setOpenPopup }: PropsType) => {
    const [book, setBook ] = useState<Ibook>({
        book_imgSrc: null,
        fileKey: null,
        book_name: "",
        book_URL: "",
    });

    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.post("/api/add_book", book).then(res => {
            setOpenPopup(false),
            makeToast("Book Added Successfully");
            setBook({
                book_imgSrc: null,
                fileKey: null,
                book_name: "",
                book_URL: ""
            });
            window.location.reload();
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoading(false)));
        
    }

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 text-red-600 cursor-pointer' onClick={() => setOpenPopup(false)} />

            <h2 className='text-2xl'>Add a new book</h2>
            <form onSubmit={handleSubmit} className='mt-6 w-fit space-y-4 mx-auto'>
                <Image 
                className='max-h-[200px] w-full object-contain rounded-md opacity-40'
                src={book.book_imgSrc ? book.book_imgSrc: "/placeholder.jpg"}
                alt='book_image'
                width={1000}
                height={300}
                />
                <UploadButton 
                    endpoint='imageUploader'
                    onClientUploadComplete={(res) => {
                        console.log(res);

                        setBook({
                            ...book,
                            book_imgSrc: res[0]?.url,
                            fileKey: res[0]?.key,
                        });
                    }}
                    onUploadError={(error: Error) => {
                        console.log(`ERROR! ${error}`);
                    }}
                />
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full' 
                placeholder='Book Name'
                value={book.book_name}
                onChange={(e) => setBook({ ...book, book_name: e.target.value })}
                required
                />
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full'
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