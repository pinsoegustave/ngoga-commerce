import Link from "next/link";
import React from "react";
import { BiSolidVideo } from "react-icons/bi";
import { IoAnalytics, IoBookOutline, IoNewspaper } from "react-icons/io5";

const Dashboard = () => {
  const cards = [
    {
      title: "Page visits",
      icon: <IoAnalytics />,
      count: 24,
    },
    {
      title: "Videos",
      icon: <BiSolidVideo />,
      count: 5,
      link: "/admin/dashboard/videos",
    },
    {
      title: "Books",
      icon: <IoBookOutline />,
      count: 4,
      link: "/admin/dashboad/books",
    },
    {
      title: "Blogs",
      icon: <IoNewspaper />,
      count: 12,
      link: "/admin/dashboard/blogs",
    },
  ];
  return (
    <div>
      <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
        <h2 className="text-3xl pb-4">All information</h2>
        <div className="gap-10 grid grid-cols-3">
            { cards.map(card => 
          <BoxWrapper key={card.title}>
            <div className="flex gap-10 items-center">
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-500 text-3xl">
                {/* <IoAnalytics className="text-4xl text-white" /> */}
                {card.icon}
              </div>
              <div className="">
                <span className="text-xl mt-8 mx-auto text-neutral-200 font-semibold">
                  {card.title}
                </span>
              </div>
            </div>
            <strong className="flex items-center justify-center mx-auto text-md text-white font-semibold">
              {card.count}
            </strong>
            <Link href={'/admin/dashboard/#'} className="text-blue-200 underline flex justify-center">Click to view in details.</Link>
          </BoxWrapper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function BoxWrapper({ children }: any) {
  return (
    <div className="bg-slate-900 rounded-md p-4 w-[20vw] h-[25vh]">
      {children}
    </div>
  );
}
