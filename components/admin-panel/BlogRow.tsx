import { IBlogs } from '@/app/admin/dashboard/blogs/page';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import EditBlog from './EditBlog';

interface PropsType {
    srNo: number;
    blogged: IBlogs;
    setUpdateBlog: Dispatch<SetStateAction<boolean>>;
}

const BlogRow = ({ srNo, blogged, setUpdateBlog}: PropsType) => {
    const [ bloggs, setBloggs ] = useState([]);
    const [ edit, setEdit ] = useState(false);
    const [ openPopUp, setOpenPopUp ] = useState(false);

    const dispatch = useAppDispatch();
    
    const onEdit = () => {
        setEdit(true);
    }

    const onDelete = () => {
        dispatch(setLoading(true));
        
        const payload = {
            fileKey: blogged.fileKey
        }
        axios.delete("/api/uploadthing", { data: payload}).then((res => {
            console.log(res.data);

            axios.delete(`/api/delete_blog/${blogged._id}`).then((res => {
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
        <td>{blogged.description.slice(0, 40)+ "..."}</td>
        <td className='text-2xl flex items-center gap-2 text-gray-600'>
            <CiEdit onClick={onEdit}
                className='cursor-pointer hover:text-black' 
            />
            <RiDeleteBin5Line onClick={onDelete}
                className='text-[20px] cursor-pointer text-red-600'
            />
        </td>
        { edit && ( <EditBlog setEdit={setEdit} setUpdateBlog={setUpdateBlog} /> )}
    </tr>
  )
}

export default BlogRow