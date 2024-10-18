import { IBlogs } from '@/app/admin/dashboard/blogs/page';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface PropsType {
    srNo: number;
    blogged: IBlogs;
    setUpdateBlog: Dispatch<SetStateAction<boolean>>;
}

const BlogRow = ({ srNo, blogged, setUpdateBlog}: PropsType) => {
    const [ bloggs, setBloggs ] = useState([]);
    const [ openPopUp, setOpenPopUp ] = useState(false);

    const dispatch = useAppDispatch();

    const onDelete = () => {
        dispatch(setLoading(true));
        
        const payload = {
            fileKey: blogged.fileKey
        }
        axios.delete("/api/uploadthing", { data: payload}).then((res => {
            console.log(res.data);

            axios.delete(`/api/delete_blog/${blogged.blog_id}`).then((res => {
                console.log(res.data);
                console.log("Blog Deleted");
                setUpdateBlog((prevState) => !prevState);
            }))
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
        }))
        .catch((err) => console.log(err));
    };
    
    return (
    <tr>
        <td>{srNo}</td>
        <td>{blogged.blogTitle}</td>
        <td>
            <Image 
                src={blogged.blogImage}
                alt='blog_Image'
                width={40}
                height={40}
            />
        </td>
        <td>{blogged.description}</td>
        <td className='text-2xl flex items-center gap-2 text-gray-600'>
            <CiEdit
                className='cursor-pointer hover:text-black' 
            />
            <RiDeleteBin5Line
                className='text-[20px] cursor-pointer text-red-600'
            />
        </td>
    </tr>
  )
}

export default BlogRow