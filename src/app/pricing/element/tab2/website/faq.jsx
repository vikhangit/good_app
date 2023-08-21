"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${open ? "rotate-90" : ""} w-4 h-4 text-indigo-600 mr-3.5`}
      strokeWidth={2.5}
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FaqsData = [
  {
    id: 1,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 2,
    name: "What are popular marketing software features?",
    desc: "<p><p>Popular features in HubSpot’s marketing software include the ability to:</p><ul><li>Build personalized, automated marketing campaigns&nbsp;<span></span></li><li >Design and host SEO optimized blog posts and web pages</li><li >Manage all of your social media accounts in a single place</li><li >Get your whole team speaking with one voice with campaign management tools</li><li >Track your marketing performance with built-in analytics and custom reporting</li></ul></p>",
  },
  {
    id: 3,
    name: "Does HubSpot's marketing software integrate with Salesforce and other third-party tools?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 4,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p><p>Yes. Marketing Hub has a powerful bi-directional sync with Salesforce, which means that any changes made in one system are automatically synced to the other. You can choose which records sync from HubSpot to Salesforce and when, and automatically send important lead intelligence like email opens, form submissions, website activity, and more to your sales team so they have all the context they need to close more deals. You can also send lead scores from HubSpot to Salesforce — to help your sales team prioritize their outreach and save valuable time.</p><br /><p>If you’re using tools other than Salesforce, you’ll find more than 1,400 custom integrations in our <a>App Marketplace </a> — making it easy to connect HubSpot to your favorite tools in just a few clicks.</p></p>",
  },
  {
    id: 5,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 6,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 7,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 8,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 9,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 10,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 11,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 12,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
  {
    id: 13,
    name: "How much does HubSpot's marketing software cost?",
    desc: "<p>HubSpot's marketing software is called Marketing Hub. You can get started for free with Marketing Hub's free tools, or if you’re looking for more advanced features to help automate and scale your marketing operations, HubSpot also offers premium Marketing Hub features in its <a href='/'>Starter, Professional, and Enterprise editions.</a></p>",
  },
];

export default function FAQs() {
  const [data2, setData2] = useState([]);
  useEffect(() => {
    let newArr = []
    FaqsData.map((item, index) => {
        newArr.push({ ...item, show: false });
    });
    setData2([...newArr]);
  }, []);
  const handleOpen = (index) => {
    data2[index].show = !data2[index].show;
    setData2([...data2]);
  };
  return (
    <div className="pt-20 pb-14">
      <h1 className="text-2xl font-semibold text-center">
        Frequently Asked Questions
      </h1>
      <div className="mt-10">
        {data2.map((item, index) => (
          <div key={index}>
            <Accordion
              key={index}
              open={item.show}
              icon={<Icon open={item.show} />}
            >
              <div className={`border border-blue-gray-200 mb-4 rounded-sm`}>
                <AccordionHeader
                  onClick={() => {
                    handleOpen(index);
                  }}
                  className={`border-0 py-4 text-sm font-semibold flex-row-reverse justify-end`}
                >
                  {item.name}
                </AccordionHeader>
                <AccordionBody>
                  <div
                    className="text-sm font-light px-12 leading-7 [&>p>a]:text-indigo-600 [&>p>a]:font-medium [&>p>a:hover]:underline [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:mt-4"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></div>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
