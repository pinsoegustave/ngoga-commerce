"use client"
import Popup from '@/components/admin-panel/Popup';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoAddCircle } from 'react-icons/io5';
import MusicRow from '@/components/admin-panel/MusicRow';

export interface IMusic {
  _id: string;
  music_name: string;
  music_URL: string;
}

const Music = () => {

  const [ openPopup, setOpenPopup ] = useState(false);
  const [ musics, setMusics ] = useState([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    axios.get("/api/get_music")
      .then((res) => setMusics(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)))
  }, []);

  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl pb-4'>Music info.</h2>
        <div>
          <button onClick={() => setOpenPopup(true)} className='bg-green-500 p-4 rounded-md flex gap-2'><IoAddCircle className='text-2xl' /> Add new music</button>
        </div>
        <div className='mt-4 h-[calc(100vh-240px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No</th>
                <th>YouTube Name</th>
                <th>YouTube link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { musics.map((music: IMusic, index) => (  
                <MusicRow 
                  key={music._id}
                  srNo={index +1 }
                  music={music}
                  setOpenPopup={setOpenPopup}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      { openPopup && ( <Popup setOpenPopup={setOpenPopup} /> ) }
    </div>
  )
}

export default Music;