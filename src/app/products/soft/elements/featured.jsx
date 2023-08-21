"use client"
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Featured() {
    const [activeTab, setActiveTab] = React.useState("tab1");
    const data = [
        {
            label: "Start Conversations",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Save Time and Resources",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Measure and Optimize",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        }
    ];
    return (
        <div className='bg-indigo-50 bg-opacity-50 pt-8 pb-20'>
            <div>
                <h1 className=' px-24 text-lg font-semibold text-gray-800 text-center'>BUILT FOR</h1>
            </div>
            <div className='mt-4'>
                <Tabs value={activeTab} >
                    <TabsHeader
                        className="relative z-10 rounded-none border-b border-gray-500 bg-indigo-800 bg-opacity-100 p-0 justify-center"
                        indicatorProps={{
                            className:
                                " bg-transparent shadow-none rounded-sm",
                        }}
                    >
                        <Tab
                            value={"tab1"}
                            onClick={() => setActiveTab("tab1")}
                            className="p-0 w-fit"
                        >
                            <div className={`relative z-10 w-fit ${activeTab === "tab1" && "bg-gray-500 bg-opacity-40"} border-gray-900 py-6 px-8 text-sm font-medium text-white`}>
                                Marketers
                                {activeTab === "tab1" && <div style={{
                                    borderWidth: "12px"
                                }} className='absolute z-50 top-full left-1/2 w-0 h-0 border-t-8 border-l-8 border-r-8 border-t-gray-500 border-l-transparent  border-r-transparent border-opacity-50 -translate-x-1/2'></div>}
                            </div>
                        </Tab>
                        <Tab
                            value={"tab2"}
                            onClick={() => setActiveTab("tab2")}
                            className="p-0 w-fit"
                        >
                            <div className={`w-fit ${activeTab === "tab2" && "bg-gray-500 bg-opacity-40"} border-gray-900 py-6 px-8 text-sm font-medium text-white`}>
                                Developers
                                {activeTab === "tab2" && <div style={{
                                    borderWidth: "12px"
                                }} className='absolute z-50 top-full left-1/2 w-0 h-0 border-t-8 border-l-8 border-r-8 border-t-gray-500 border-l-transparent  border-r-transparent border-opacity-50 -translate-x-1/2'></div>}
                            </div>
                        </Tab>
                        <Tab
                            value={"tab3"}
                            onClick={() => setActiveTab("tab3")}
                            className="p-0 w-fit"
                        >
                            <div className={`w-fit ${activeTab === "tab3" && "bg-gray-500 bg-opacity-40"} border-gray-900 py-6 px-8 text-sm font-medium text-white`}>
                                IT Teams
                                {activeTab === "tab3" && <div style={{
                                    borderWidth: "12px"
                                }} className='absolute z-50 top-full left-1/2 w-0 h-0 border-t-8 border-l-8 border-r-8 border-t-gray-500 border-l-transparent  border-r-transparent border-opacity-50 -translate-x-1/2'></div>}
                            </div>

                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value={"tab1"} className='px-24'>
                            <div className='mt-10'>
                                <h2 className='text-3xl font-semibold text-center'>Build a website with ease.</h2>
                                <p className="text-base font-light text-center mt-6">So you can focus on what matters: marketing.</p>
                                <div className='flex items-center mt-14 gap-x-10'>
                                    <div className='basis-1/2'>
                                        <h1 className='text-2xl font-medium'>
                                            Marketers
                                        </h1>
                                        <p className='text-base font-light text-justify leading-7 mt-5'>
                                            The content management system you need to easily create and personalize website pages for every visitor — optimized for conversion across every device. Rely on developers as much or as little as ${"you'd"} like.
                                        </p>
                                        <div className='flex gap-x-3 mt-10'>
                                            <Link
                                                href="#"
                                                className="text-sm font-semibold bg-indigo-600 text-white border border-indigo-600 py-2.5 px-4 rounded-sm hover:opacity-60"
                                            >
                                                Xem demo
                                            </Link>
                                            <Link
                                                href="#"
                                                className="text-sm font-semibold bg-white text-indigo-600 py-2.5 px-4 rounded-sm border border-indigo-600 hover:bg-indigo-100"
                                            >
                                                Bắt đầu
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="basis-1/2">
                                        <iframe
                                            src="https://www.youtube.com/embed/7HeXcA4zDxY"
                                            title="YouTube video player"
                                            className='w-full h-60'
                                            frameBorder={0}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                                <h3 className='text-xl font-medium mt-10 text-center'>Features that make this possible:</h3>
                                <div className="grid grid-cols-3 gap-x-6 mt-16 gap-y-10">
                                            <div>
                                                <h2 className='text-xl text-indigo-600 font-bold cursor-pointer hover:underline'>Forms</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Generate leads from your website using a powerful online form builder.</p>
                                                <Link href="" className="mt-4 flex items-center text-base font-medium text-indigo-600 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                </svg>
                                                Watch product video
                                                </Link>
                                            </div>
                                            <div>
                                                <h2 className='text-xl text-indigo-600 font-bold cursor-pointer hover:underline'>Live Chat</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Help site visitors with targeted welcome messages and chat automations.</p>
                                                <Link href="" className="mt-4 flex items-center text-base font-medium text-indigo-600 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                </svg>
                                                Watch product video
                                                </Link>
                                            </div>
                                            <div>
                                                <h2 className='text-xl text-indigo-600 font-bold cursor-pointer hover:underline'>Salesforce Integration</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Connect HubSpot to Salesforce for a fast, reliable, bi-directional sync — no technical work required.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-xl text-indigo-600 font-bold cursor-pointer hover:underline'>Salesforce Integration</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Connect HubSpot to Salesforce for a fast, reliable, bi-directional sync — no technical work required.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-xl text-indigo-600 font-bold cursor-pointer hover:underline'>Salesforce Integration</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Connect HubSpot to Salesforce for a fast, reliable, bi-directional sync — no technical work required.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-xl text-indigo-600 font-bold cursor-pointer hover:underline'>Salesforce Integration</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Connect HubSpot to Salesforce for a fast, reliable, bi-directional sync — no technical work required.</p>
                                            </div>
                                        </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={"tab2"}>
                            <div className='flex mt-10'>
                                <div className='w-1/4 pr-20'>
                                    <h1 className='text-2xl font-medium text-gray-800'>Get noticed, and never miss an opportunity to connect with prospects.</h1>
                                </div>
                                <div className='w-3/4'>
                                    <Image alt='' src="/images/products/web/feature.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} />
                                    <button className='flex w-full text-xs items-center justify-center font-medium mt-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                        </svg>
                                        Click to enlarge
                                    </button>
                                    <div className='mt-6'>
                                        <h1 className='text-lg font-semibold text-gray-800 mb-6'>POPULAR FEATURES</h1>
                                        <div className="grid grid-cols-3 gap-x-6">
                                            <div>
                                                <h2 className='text-base text-indigo-600 font-bold cursor-pointer hover:underline'>Forms</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Generate leads from your website using a powerful online form builder.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-base text-indigo-600 font-bold cursor-pointer hover:underline'>Live Chat</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Help site visitors with targeted welcome messages and chat automations.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-base text-indigo-600 font-bold cursor-pointer hover:underline'>Salesforce Integration</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Connect HubSpot to Salesforce for a fast, reliable, bi-directional sync — no technical work required.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={"tab3"}>
                            <div className='flex mt-10'>
                                <div className='w-1/4 pr-20'>
                                    <h1 className='text-2xl font-medium text-gray-800'>Get noticed, and never miss an opportunity to connect with prospects.</h1>
                                </div>
                                <div className='w-3/4'>
                                    <Image alt='' src="/images/products/web/feature.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} />
                                    <button className='flex w-full text-xs items-center justify-center font-medium mt-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                        </svg>
                                        Click to enlarge
                                    </button>
                                    <div className='mt-6'>
                                        <h1 className='text-lg font-semibold text-gray-800 mb-6'>POPULAR FEATURES</h1>
                                        <div className="grid grid-cols-3 gap-x-6">
                                            <div>
                                                <h2 className='text-base text-indigo-600 font-bold cursor-pointer hover:underline'>Forms</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Generate leads from your website using a powerful online form builder.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-base text-indigo-600 font-bold cursor-pointer hover:underline'>Live Chat</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Help site visitors with targeted welcome messages and chat automations.</p>
                                            </div>
                                            <div>
                                                <h2 className='text-base text-indigo-600 font-bold cursor-pointer hover:underline'>Salesforce Integration</h2>
                                                <p className='text-base font-light leading-7 mt-3'>Connect HubSpot to Salesforce for a fast, reliable, bi-directional sync — no technical work required.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}
