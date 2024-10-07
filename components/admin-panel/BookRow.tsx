import { IBooks } from '@/app/admin/dashboard/books/page';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';

interface PropsType {
    srNo: number;
    book: IBooks;
}

const BookRow = ({srNo, book}: PropsType) => {

  const dispatch = useAppDispatch();
  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{book.book_name}</div>
      </td>
      <td>
        <Image 
          src={book.book_imgSrc}
          width={40}
          height={40}
          alt='book_imageCover'
        />
      </td>
      <td>
        <div>{book.book_URL.slice(0, 40)+ "..."}</div>
      </td>
      <td>
        <RiDeleteBin5Line 
          className='text-[20px] cursor-pointer text-red-600' />
        </td>
    </tr>
  )
}

export default BookRow