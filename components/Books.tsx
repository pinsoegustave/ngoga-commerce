import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface IBooks {
    _id: string;
    book_imgSrc: string;
    book_name: string;
    book_URL: string;
}

const Books = () => {

    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        axios.get('/api/get_books')
            .then((res) => {
                console.log(res.data)
                setBooks(res.data);
            })
            .catch((err) => console.error(err));
    }, []);
    
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>MY BO
            <span className='text-yellow-400'>OKS</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>   
        { books.map((booking: IBooks) => (
            <Link key={booking._id} href={booking.book_URL} target='_blank'>
                <div data-aos="fade-up">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                            src={booking.book_imgSrc}
                            alt={booking.book_name}
                            layout='fill'
                            className='object-contain'
                            />
                    </div>
                </div>
            </Link>
        ))}
        </div>
            {/* <div data-aos="fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book4.jfif'}
                    alt='book2'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book3.jfif'}
                    alt='book3'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book4.webp'}
                    alt='book4'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1200">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book5.webp'}
                    alt='book5'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1500">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image 
                        src={'/book2.jpg'}
                        alt='book5'
                        layout='fill'
                        className='object-contain'
                    />
                    
                </div>
            </div> */}
        {/* // </div> */}
    </div>
  )
}

export default Books