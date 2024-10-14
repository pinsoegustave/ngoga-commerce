"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Form, FormProvider, useForm } from 'react-hook-form'
import * as z from "zod";
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from "@hookform/resolvers/zod"

interface PropsType {
    setOpenPopUp: Dispatch<SetStateAction<boolean>>;
}

const AddBlogPopup = ({ setOpenPopUp }: PropsType) => {
    
    const formSchema = z.object({
        title: z
            .string()
            .min(5, { message: "Hey the title is not long enough" })
            .max(100, { message: "It&apos;s too long " }),
        price: z
            .number().min(5, { message: "Hey the title is " }),
        description: z
            .string()
            .min(5, { message: "Hey the title is not long enough" })
            .max(100, { message: "It's too long" })
            .trim()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            price: 29.09,
            description: "",
        },
    })
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline 
            className='absolute text-2xl right-0 top-0 m-4 cursor-pointer text-red-600'
            onClick={() => setOpenPopUp(false)}
            />

            <h2 className='text-2xl'>Add a new blog</h2>
            <FormProvider {...form}>
                <form>
                    <FormField
                        control={form.control}
                        name= "title"
                        render={({ field }) => (
                            field.value,
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Main title for your blog" />
                                </FormControl>
                            </FormItem>
                        )}
                        />
                </form>
            </FormProvider>

            {/* <form className="mt-6 w-fit space-y-4 mx-auto">
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' 
                placeholder='Blog Image'
                required 
                />
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' 
                placeholder='Blog Title'
                required 
                />
                <input type="text"
                className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit' 
                placeholder='Blog Description'
                required 
                />
                <div className='flex justify-end'>
                    <button className='bg-[#0989FF] text-black px-8 py-2 rounded-lg self-center'>
                        Save blog
                    </button>
                </div>
            </form> */}
        </div>
    </div>
  )
}

export default AddBlogPopup;