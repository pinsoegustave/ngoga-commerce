import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

interface IMusic {
    music_name: string;
    music_URL: string;
}

const Popup = ({ setOpenPopup }: PropsType) => {
    const [music, setMusic ] = useState<IMusic>({
        music_name: "",
        music_URL: "",
    });
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.post("/api/add_music", music).then(res => {
            setMusic({
                music_name: "",
                music_URL: ""
            });
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600' onClick={() => setOpenPopup(false)} />

            <h2 className='text-2xl -mt-3'>Add new music link</h2>
            <form onSubmit={handleSubmit} className='mt-6 w-fit space-y-4 mx-auto'>
                <input type="text"
                className='border block border-gray-500 outiline-none px-4 py-2 rounded-lg w-fit'
                placeholder='YouTube Name'
                value={music.music_name}
                onChange={(e) => setMusic({ ...music, music_name: e.target.value})}
                />
                <input type="text"
                className='border block border-gray-500 outiline-none px-4 py-2 rounded-lg w-fit'
                placeholder='Paste YouTube link here'
                value={music.music_URL}
                onChange={(e) => setMusic({ ...music, music_URL: e.target.value})}
                />
                <div className='flex justify-end'>
                    <button className='bg-[#0989FF] block px-8 py-2 rounded-lg self-center'>Add link</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Popup;