"use client"
import Loader from '@/components/admin-panel/Loader';
import Sidebar from '@/components/admin-panel/Sidebar';
import { useAppSelector } from '@/redux/hooks'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isLoading = useAppSelector((store) => store.loadingReducer);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full h-full'>
        <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>
          { children }
        </div>
      </div>
      { isLoading && <Loader />}
    </div>
  )
}
