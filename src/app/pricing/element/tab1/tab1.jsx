"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TabWebsite from "./website/tabwebsite";

export default function Tab1({hidden, hiddenTab}) {
  const [activeTabChild, setActiveTabChild] = useState("1");
  const [payment1, setPayment1] = useState("1");
 const [chooseType, setChooseType] = useState("professional");
  return (
    <TabPanel value={"tab1"}>
      <div className="mt-4">
        <Tabs
          value={activeTabChild}
          orientation="vertical"
          className="[&>nav]:w-1/6 relative"
        >
          <TabsHeader
            className={`w-1/6 fixed translate-y-6 z-10 rounded-none p-0 bg-transparent ${hidden && "top-20 translate-y-0"} ${hiddenTab && "hidden"}`}
            indicatorProps={{
              className: " bg-transparent shadow-none rounded-sm",
            }}
          >
            <Tab
              value={"1"}
              onClick={() => setActiveTabChild("1")}
              className={`${
                activeTabChild === "1" && "bg-indigo-50 border-l-4"
              }  py-4 text-sm font-light border-indigo-600 rounded-sm hover:bg-indigo-50 justify-start`}
            >
              Website
            </Tab>
            <Tab
              value={"2"}
              onClick={() => setActiveTabChild("2")}
              className={`${
                activeTabChild === "2" && "bg-indigo-50 border-l-4"
              }  py-4 text-sm font-light border-indigo-600 rounded-sm hover:bg-indigo-50 justify-start`}
            >
              App mobile
            </Tab>
            <Tab
              value={"3"}
              onClick={() => setActiveTabChild("3")}
              className={`${
                activeTabChild === "3" && "bg-indigo-50 border-l-4"
              }  py-4 text-sm font-light border-indigo-600 rounded-sm hover:bg-indigo-50 justify-start`}
            >
              Soft
            </Tab>
          </TabsHeader>
          <TabsBody className="w-5/6 pl-12">
            {
              [1,2,3].map((item, index) => <TabWebsite
              key={index}
              index={item}
              payment1={payment1}
              setPayment1={setPayment1}
              chooseType={chooseType}
              setChooseType={setChooseType}
            />)
            }
          </TabsBody>
        </Tabs>
      </div>
    </TabPanel>
  );
}
