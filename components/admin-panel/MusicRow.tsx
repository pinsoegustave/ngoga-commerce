import { IMusic } from '@/app/admin/dashboard/music/page';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react'
import {  RiDeleteBin5Line } from 'react-icons/ri'

interface PropsType {
    srNo: number;
    music: IMusic;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

const MusicRow = ({ srNo, music, setOpenPopup }: PropsType) => {

    const dispatch = useAppDispatch();

    const onDelete = () => {
        dispatch(setLoading(true));

        axios.delete(`/api/delete_music/${music._id}`).then(res => {
            console.log(res.data);
            makeToast("Music is deleted!!");
            window.location.reload();
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoading(false)));
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
                <RiDeleteBin5Line onClick={onDelete}
                className='text-[20px] cursor-pointer hover:text-red-600'
                />
            </div>
        </td>
    </tr>
  )
}

export default MusicRow;