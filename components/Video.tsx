import React from 'react'

const Video = () => {

    const videos = [
        'https://www.youtube.com/embed/FybNes9uByc?rel=0',
        'https://www.youtube.com/embed/QRp4TgHJ7yU?rel=0',
        'https://www.youtube.com/embed/pZ_ZU9f6Jr0?rel=0',
        'https://www.youtube.com/embed/lbxcz-3nZaw?rel=0',
        'https://www.youtube.com/embed/nMIM5uZuDhY?rel=0',
        'https://www.youtube.com/embed/m7AaIPpkPiM?rel=0',
        'https://www.youtube.com/embed/ByhftlBp0Ec?rel=0',
        'https://www.youtube.com/embed/qTBAJ1M2HWw?rel=0',
        'https://www.youtube.com/embed/8yoyZsOSpuA?rel=0'
    ]
    return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>SONGS A<span className='text-yellow-400'>nd musics</span></h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem]'>
            { videos.map((v, index) => (
                <div key={index} className='ratio ratio-16x9'>
                    <iframe src={v} width={350} height={300} title='YouTube Video' allowFullScreen></iframe>
                </div>
            )) }
        </div>
    </div>
    
    );
}

export default Video;

