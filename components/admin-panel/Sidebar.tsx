import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiSolidVideo } from 'react-icons/bi';
import { IoAnalytics, IoBookOutline, IoNewspaperOutline, IoSettings } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
    const pathname = usePathname();
    const menus = [
        {
            title: "Dashboard",
            icon: <MdDashboard />,
            href: "/admin/dashboard",
        },
        {
            title: "Music",
            icon: <BiSolidVideo />,
            href: "/admin/dashboard/music",
        },
        {
            title: "Books",
            icon: <IoBookOutline />,
            href: "/admin/dashboard/books",
        },
        {
            title: "Blogs",
            icon: <IoNewspaperOutline />,
            href: "/admin/dashboard/blogs",
        },
        {
            title: "Analytics",
            icon: <IoAnalytics />,
            href: "/admin/dashboard/#"
        },
        {
            title: "Settings",
            icon: <IoSettings />,
            href: "#",
        }
    ];

  return (
    <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
        <div className='flex items-center gap-4'>
            <Link href={'/'} className='flex items-center gap-4'>
            <img src="/favicon.ico" alt="logo" className='size-12 rounded-lg' />
            <h2 className='text-[20px] font-semibold'>Ngoga Commerce</h2>
            </Link>
        </div>

        <ul className='space-y-4 mt-6'>
            { menus.map(menu => <Link key={menu.title} href={menu.href} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500 ${pathname === menu.href ? "bg-blue-500 text-yellow-400" : "bg-gray-200"}`}>
                <div className='text-[20px]'>{menu.icon}</div>
                <p>{menu.title}</p>
            </Link>
        )}
        </ul>
    </div>
  )
}

export default Sidebar