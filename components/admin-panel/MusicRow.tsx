import { IMusic } from '@/app/admin/dashboard/music/page';
import { Dispatch, SetStateAction } from 'react'
import { CiEdit } from 'react-icons/ci'
import {  RiDeleteBin5Line } from 'react-icons/ri'

interface PropsType {
    srNo: number;
    music: IMusic;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

const MusicRow = ({ srNo, music, setOpenPopup }: PropsType) => {

    const onEdit = () => {
        setOpenPopup(true);
      };
    
  return (
    <tr>
        <td>
            <div>{ srNo }</div>
        </td>
        <td>
            <div>{music.music_name}</div>
        </td>
        <td>
            <div>{music.music_URL}</div>
        </td>
        <td>
            <div className='text-2xl flex items-center gap-2 text-red-600'>
                <RiDeleteBin5Line 
                className='text-[20px] cursor-pointer hover:text-red-600'
                />
            </div>
        </td>
    </tr>
  )
}

export default MusicRow;