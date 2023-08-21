"use client"
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react'
import Tab1 from './tab1/tab1';
import Tab2 from './tab2/tab2';
import Link from 'next/link';

export default function TabContent() {
   const [hidden, setHidden] = useState(false);
   React.useEffect(() => {
     const toggleVisible = () => {
       const scrolled = document.documentElement.scrollTop;
       if (scrolled > 60) {
         setHidden(true);
       } else {
         setHidden(false);
       }
     };
     document.addEventListener("scroll", toggleVisible);
     return () => document.removeEventListener("scroll", toggleVisible);
   }, []);
    const [activeTab, setActiveTab] = useState("tab1");
    const ref = useRef(null);
    const [hiddenTab, setHiddenTab] = useState(false);
    React.useEffect(() => {
      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > ref?.current?.clientHeight) {
          setHiddenTab(true);
        } else {
          setHiddenTab(false);
        }
      };
      document.addEventListener("scroll", toggleVisible);
      return () => document.removeEventListener("scroll", toggleVisible);
    }, [ref?.current?.clientHeight]);
  return (
    <div>
      <Tabs ref={ref} value={activeTab}>
        <TabsHeader
          className={`fixed z-10 w-full ${
            hidden ? "top-0 shadow" : "-translate-y-7"
          } rounded-none bg-white items-center p-0 bg-opacity-100 ${hiddenTab && "hidden"}`}
          indicatorProps={{
            className: "bg-transparent rounded-none shadow-none",
          }}
        >
          <Link href="/" className="w-1/6 cursor-pointer hover:underline text-sm font-medium text-indigo-600 flex item-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Trở lại trang chủ
          </Link>
          <div className="w-5/6 flex items-center justify-center">
            <Tab
              value={"tab1"}
              onClick={() => setActiveTab("tab1")}
              className="p-0 w-fit"
            >
              <div
                className={`w-fit ${
                  activeTab === "tab1" && "border-b-4 font-medium"
                } border-gray-900 py-4 px-8 text-base font-light`}
              >
                Dành cho doanh nghiệp
              </div>
            </Tab>
            <Tab
              value={"tab2"}
              onClick={() => setActiveTab("tab2")}
              className="p-0 w-fit"
            >
              <div
                className={`w-fit ${
                  activeTab === "tab2" && "border-b-4 font-medium"
                } border-gray-900 py-4 px-8 text-base font-light`}
              >
                Dành cho cá nhân hoặc nhóm nhỏ
              </div>
            </Tab>
          </div>
        </TabsHeader>
        <TabsBody>
          <Tab1 hidden={hidden} hiddenTab={hiddenTab} />
          <Tab2 hidden={hidden} hiddenTab={hiddenTab} />
        </TabsBody>
      </Tabs>
    </div>
  );
}
