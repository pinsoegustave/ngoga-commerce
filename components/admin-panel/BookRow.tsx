import { IBooks } from '@/app/admin/dashboard/books/page';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';

interface PropsType {
    srNo: number;
    book: IBooks;
    setUpdateBook: Dispatch<SetStateAction<boolean>>;
}

const BookRow = ({srNo, book, setUpdateBook}: PropsType) => {

  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(setLoading(true));

    const payload = {
      fileKey: book.fileKey
    }

    axios.delete("/api/uploadthing", { data: payload }).then(res => {
      console.log(res.data);

      axios.delete(`/api/delete_book/${book._id}`).then(res => {
        console.log(res.data);
        makeToast("Book is deleted!!!");
        setUpdateBook((prevState) => !prevState);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
    })
      .catch((error) => console.log(error));
  };

  
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
        <RiDeleteBin5Line onClick={onDelete}
          className='text-[20px] cursor-pointer text-red-600' />
        </td>
    </tr>
  )
}

export default BookRow