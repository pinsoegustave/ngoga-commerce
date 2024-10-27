import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import Tiptap from '../Tiptap';
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLoading } from '@/redux/features/loadingSlice';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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

    const formSchema = z.object({
        blogTitle: z.string().min(5, {message: "The title is not long enough"}).
        max(100, { "message": "The title is too long"}),
        description: z.string().min(10, {message: "The description needs to be long"}).max(1000, { message: "Description is too long abi" }).trim()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            blogTitle: "",
            description: "",
        }
    })

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
            
            <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
                <input 
                className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                type="text"
                placeholder="Name"
                value={inputData.blogTitle}
                onChange={(e) => setInputData({...inputData, blogTitle: e.target.value })}
                required
                />
                {/* <input 
                className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                type="text"
                placeholder="Category"
                value={inputData.category}
                onChange={(e) => setInputData({...inputData, category: e.target.value })}
                required
                /> */}
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