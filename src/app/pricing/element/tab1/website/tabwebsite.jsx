"use client";
import { TabPanel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderTabWeb from "./header";
import TablePrice from "./tablePrice";
import TableFeature from "./tableFeature";
import CalculatePrice from "./calculatePrice";
import Support from "../../support";
import FAQs from './faq';
import CallPhone from './../../callPhone';

export default function TabWebsite({ index, payment1, setPayment1, chooseType, setChooseType }) {
  const handleScroll = (id) => {
    //  const href = e.currentTarget.href;
    //  const targetId = href.replace(/.*\#/, "");
     // get the element by id and use scrollIntoView
     
     const elem = document.getElementById(id);
     elem?.scrollIntoView({
       behavior: "smooth",
       block: "end",
       inline: "nearest",
     });
  }
   
  return (
    <div>
      <TabPanel value={`${index.toString()}`} className="flex flex-col items-center pr-8 pl-0">
        <HeaderTabWeb handleScroll={handleScroll} title={index === 1 ? "Website": index === 2 ? "App Mobile" : index === 3 ? "Soft" : ""}/>
        <TablePrice payment1={payment1} setPayment1={setPayment1} />
        <TableFeature />
        <h3 className="text-base font-semibold text-black mt-4">
          Need help choosing a plan?
        </h3>
        <div className="border border-gray-400 rounded-full flex items-center text-sm font-semibold px-12 py-4 cursor-pointer hover:underline hover:text-indigo-600 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2">+61 280 466 514</span>
        </div>
        <CalculatePrice payment1={payment1} setPayment1={setPayment1}  handleScroll={handleScroll}
        chooseType={chooseType} setChooseType={setChooseType}
         />
        <Support />
        <FAQs />
        <CallPhone />
      </TabPanel>
    </div>
  );
}
