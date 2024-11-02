"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../ui/button';
import Tiptap from '../Tiptap';
import Image from 'next/image';
import { UploadButton } from '@/utils/uploadthing';
import { useAppDispatch } from '@/redux/hooks';
import { setLoading } from '@/redux/features/loadingSlice';
import axios from 'axios';
import { makeToast } from '@/utils/helper';

interface PropsType {
    setOpenPopUp: Dispatch<SetStateAction<boolean>>;
}

interface IBlog {
    blogImage: null | string;
    fileKey: null | string;
    blogTitle: string;
    description: string;
}

const AddBlogPopup = ({ setOpenPopUp }: PropsType) => {
    const [ blogs, setBlogs ] = useState<IBlog>({
        blogImage: null,
        fileKey: null,
        blogTitle: "",
        description: ""
    });
    const dispatch =  useAppDispatch();

    const formSchema = z.object({
        blogTitle: z
            .string()
            .min(5, { message: "The title is not long enough" })
            .max(100, { message: "It&apos;s too long " }),
        description: 
        z
            .string()
            // .min(5, { message: "Description is not long enough" })
            // .max(1000, { message: "Try to keep it short" })
            .trim()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            blogTitle: "",
            description: "",
        },
    });

    function onSubmit( values: z.infer<typeof formSchema>) {
        dispatch(setLoading(true));
        makeToast("New blog added successfully!!");
        axios.post("/api/add_blog", {
            ...values,
            blogImage: blogs.blogImage,
            fileKey: blogs.fileKey
        }).then(res => {
            setBlogs({
                blogImage: null,
                fileKey: null,
                blogTitle: "",
                description: ""
            });

            window.location.reload();
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoading(false)));
    }

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline 
            className='absolute text-2xl right-0 top-0 m-4 cursor-pointer text-red-600'
            onClick={() => setOpenPopUp(false)}
            />  

            <h2 className='text-2xl'>Add a new blog</h2>
            <Form {...form}>
                <form className='w-[500px] mx-auto' 
                onSubmit={form.handleSubmit(onSubmit)} 
                noValidate
                >
                    <Image 
                    className='max-h-[100px] w-full object-contain rounded-md opacity-40'
                    src={blogs.blogImage ? blogs.blogImage: "/placeholder.jpg"}
                    alt='blog_image'
                    width={1000}
                    height={300}
                    />
                    <UploadButton 
                        endpoint='imageUploader'
                        onClientUploadComplete={(res) => {
                            console.log(res);

                            setBlogs({
                                ...blogs,
                                blogImage: res[0]?.url,
                                fileKey: res[0]?.key
                            });
                        }}
                        onUploadError={(error: Error) => {
                            console.log(`ERROR! ${error}`);
                        }}
                    />
                    <FormField
                        control={form.control}
                        name= "blogTitle"
                        render={({ field }) => (
                            field.onChange,
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Main title for your blog" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name= "description"
                        render={({ field }) => (
                            field.onChange,
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Tiptap description={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <Button className='my-4' type='submit'>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default AddBlogPopup;