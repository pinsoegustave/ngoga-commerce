import { IBooks } from '@/app/admin/dashboard/books/page';
import { useAppDispatch } from '@/redux/hooks';
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
        <div>{book.book_URL}</div>
      </td>
      <td>
        <RiDeleteBin5Line 
          className='text-[20px] cursor-pointer text-red-600' />
        </td>
    </tr>
  )
}

export default BookRow