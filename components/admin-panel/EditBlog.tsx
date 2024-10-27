import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLoading } from '@/redux/features/loadingSlice';
import { makeToast } from '@/utils/helper';
import axios from 'axios';

interface PropsType {
    setEdit: Dispatch<SetStateAction<boolean>>;
    setUpdateBlog: Dispatch<SetStateAction<boolean>>;
}

const EditBlog = ({ setEdit, setUpdateBlog }: PropsType) => {
    const blogData = useAppSelector((state) => state.blogReducer);
    const dispatch = useAppDispatch();

    const [ inputData, setInputData ] = useState({
        blogTitle: blogData.blogTitle,  
        blogImage: blogData.blogImage,
        description: blogData.description,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(false));

        axios
            .put(`/api/edit_blog/${blogData._id}`, inputData)
            .then((res) => {
                makeToast("Blog Updated Successfully");
                setUpdateBlog((prevState) => !prevState);
            })
            .catch((err: any) => console.log(err))
            .finally(() => {
                dispatch(setLoading(false));
                // setEdit(false);
            })
    }


  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 cursor-pointer text-red-600' onClick={() => setEdit(false)} />
            
            <h2 className='text-2xl'>Edit your blog</h2>
            <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
                <input 
                className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                type="text"
                placeholder="Blog Title"
                value={inputData.blogTitle}
                onChange={(e) => setInputData({...inputData, blogTitle: e.target.value })}
                required
                />
                <textarea 
                className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                placeholder="Description"
                value={inputData.description}
                onChange={(e) => setInputData({...inputData, description: e.target.value })}
                required
                />
                    <Button className='my-4' type='submit'>
                        Submit
                    </Button>
                </form>
        </div>
    </div>
  )
}

export default EditBlog