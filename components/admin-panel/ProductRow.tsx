import { Dispatch, SetStateAction } from 'react'
import { CiEdit } from 'react-icons/ci'
import {  RiDeleteBin5Line } from 'react-icons/ri'

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

const ProductRow = ({ setOpenPopup }: PropsType) => {

    const onEdit = () => {
        setOpenPopup(true);
      };
    
  return (
    <tr>
        <td>
            <div>102</div>
        </td>
        <td>
            <div>ngoga-kelly-12</div>
        </td>
        <td>
            <div>youtube.com/ngoga-kelly-12</div>
        </td>
        <td>
            <div className='text-2xl flex items-center gap-2 text-gray-600'>
                <RiDeleteBin5Line 
                className='text-[20px] cursor-pointer hover:text-red-600'
                />
            </div>
        </td>
    </tr>
  )
}

export default ProductRow