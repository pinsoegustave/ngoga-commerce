"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../ui/button';
import Tiptap from '../Tiptap';
import Image from 'next/image';
import { UploadButton } from '@/utils/uploadthing';

interface PropsType {
    setOpenPopUp: Dispatch<SetStateAction<boolean>>;
}

interface IBlog {
    blog_Image: null | string;
    fileKey: null | string;
    title: string;
    description: string;
}

const AddBlogPopup = ({ setOpenPopUp }: PropsType) => {
    const [ blogs, setBlogs ] = useState<IBlog>({
        blog_Image: null,
        fileKey: null,
        title: "",
        description: ""
    });

    const formSchema = z.object({
        title: z
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
            title: "",
            description: "",
        },
    });

    function onSubmit( values: z.infer<typeof formSchema>) {
        // Do sth with the form values
        console.log(values);
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
                    src={blogs.blog_Image ? blogs.blog_Image: "/placeholder.jpg"}
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
                                blog_Image: res[0]?.url,
                                fileKey: res[0]?.key
                            });
                        }}
                        onUploadError={(error: Error) => {
                            console.log(`ERROR! ${error}`);
                        }}
                    />
                    <FormField
                        control={form.control}
                        name= "title"
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