import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface IMusic {
    _id: string;
    music_name: string;
    music_URL: string;
}

const Video = () => {

    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        axios.get('/api/get_music')
            .then((res) => {
                console.log(res.data);
                setVideos(res.data);
            })
        .catch((err) => console.error(err));

    }, []);

    // const videos = [
    //     'https://www.youtube.com/embed/ByhftlBp0Ec?rel=0',
    //     'https://www.youtube.com/embed/qTBAJ1M2HWw?rel=0',
    //     'https://www.youtube.com/embed/8yoyZsOSpuA?rel=0'
    // ]
    return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>SONGS A<span className='text-yellow-400'>nd musics</span></h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem]'>
            { videos.map((v: IMusic) => (
                <div key={v._id} className='ratio ratio-16x9'>
                    <iframe src={v.music_URL} width={350} height={300} title={v.music_name} allowFullScreen></iframe>
                </div>
            )) }
        </div>
    </div>
    
    );
}

export default Video;

