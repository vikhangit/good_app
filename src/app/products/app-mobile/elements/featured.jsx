"use client"
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Image from 'next/image';
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
        <div className='bg-indigo-50 bg-opacity-50 px-24 py-20'>
            <div>
                <h1 className='text-3xl font-semibold text-gray-800 text-center'>Sales Software That Helps You Sell Faster and Better</h1>
            </div>
            <div className='mt-12'>
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-gray-500 bg-transparent p-0"
                        indicatorProps={{
                            className:
                                " bg-transparent shadow-none rounded-sm",
                        }}
                    >
                        <Tab
                            value={"tab1"}
                            onClick={() => setActiveTab("tab1")}
                            className="p-0"
                        >
                            <div className={`w-fit ${activeTab === "tab1" && "border-b-4 font-medium"} border-gray-900 py-2 px-8 text-base font-light`}>
                                Start Conversations
                            </div>
                        </Tab>
                        <Tab
                            value={"tab2"}
                            onClick={() => setActiveTab("tab2")}
                            className="p-0"
                        >
                            <div className={`w-fit ${activeTab === "tab2" && "border-b-4 font-medium"} border-gray-900 py-2 px-8 text-base font-light`}>
                                Deepen Relationships
                            </div>
                        </Tab>
                        <Tab
                            value={"tab3"}
                            onClick={() => setActiveTab("tab3")}
                            className="p-0"
                        >
                            <div className={`w-fit ${activeTab === "tab3" && "border-b-4 font-medium"} border-gray-900 py-2 px-8 text-base font-light`}>
                                Manage Your Pipeline
                            </div>

                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value={"tab1"}>
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
