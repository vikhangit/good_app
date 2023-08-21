import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mx-auto px-24 py-12 bg-blue-900 bg-opacity-60 relative z-50">
      <div className="flex text-white">
        <div className="border-r basis-2/5">
          <h2 className="text-sm font-semibold">Popular Features</h2>
          <div className="flex mt-5">
            <div className="basis-1/2 flex flex-col">
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">All Products and Features</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Meeting Scheduler App</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Social Media Tools</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Email Tracking Software</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Sales Email Automation</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Ads Software</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Email Marketing Software</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Lead Management Software</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Pipeline Management Tools</Link>
            </div>
            <div className="basis-1/2 flex flex-col">
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Website Builder</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Sales Email Templates</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Help Desk Software</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Online Form Builder</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Chatbot Builder</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Live Chat Software</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Marketing Analytics</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Landing Page Builder</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Web Hosting</Link>
            </div>
          </div>
        </div>
        <div className="basis-3/5 flex ml-10">
          <div className="w-1/3">
            <h3 className="text-sm font-semibold">Free Tools</h3>
            <div className="mt-5 flex flex-col">
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Website Grader</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Make My Persona</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Email Signature Generator</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Brand Kit Generator</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Blog Ideas Generator</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Invoice Template Generator</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Marketing Plan Generator</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Free Business Templates</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Industry Benchmark Data</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Software Comparisons Library</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Template Marketplace</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600" >Campaign Assistant</Link>
            </div>
          </div>
          <div className="basis-1/3">
            <h3 className="text-sm font-semibold">Company</h3>
            <div className="mt-5 flex flex-col">
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 ">About Us</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 ">Careers</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 ">Management Team</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600  ">Board of Directors</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 ">Investor Relations</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 ">Blog</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 ">Contact Us</Link>
            </div>
          </div>
          <div className="basis-1/3">
            <h3 className="text-sm font-semibold">Customers</h3>
            <div className="mt-5 flex flex-col">
              <Link href="" className="text-xs font-medium hover:underline">Customer Support</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600 mb-28">Join a Local User Group</Link>

            </div>
            <h3 className="text-sm font-semibold mt-3.5">Partners</h3>
            <div className="mt-5 flex flex-col">
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">All Partner Programs</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Careers</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Solutions Partner Program
              </Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">App Partner Program</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">HubSpot for Startups</Link>
              <Link href="" className="text-xs font-medium hover:underline py-1.5 hover:text-indigo-600">Affiliate Program</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-8 mt-12">
        <div className="w-1/3 border-t border-white"></div>
        <div className="w-1/3 flex items-center justify-between">
          <Image alt="" src="/images/footer/facebook-app-symbol.png" width={25} height={25} />
          <Image alt="" src="/images/footer/instagram.png" width={25} height={25} />
          <Image alt="" src="/images/footer/youtube-1.png" width={25} height={25} />
          <Image alt="" src="/images/footer/twitter.png" width={25} height={25} />
          <Image alt="" src="/images/footer/telegram.png" width={25} height={25} />
          <Image alt="" src="/images/footer/tik-tok.png" width={25} height={25} />
        </div>
        <div className="w-1/3  border-t border-white"></div>
      </div>
      <div className="flex flex-col items-center text-center mt-8">
        <h1 className="text-white text-2xl uppercase">
          Good App
        </h1>
        <p className="text-sm font-medium text-white">Copyright © 2023 by Good App</p>
        <div className="flex jutify-center items-center mt-4">
          <Link href="" className="pr-6 text-sm font-semibold underline hover:no-underline text-white hover:text-indigo-600">Legal Stuff</Link>
          <span className="w-px h-3 bg-white "></span>
          <Link href="" className="px-6 text-sm font-semibold underline hover:no-underline text-white hover:text-indigo-600">Privacy Policy</Link>
          <span className="w-px h-3 bg-white"></span>
          <Link href="" className="px-6 text-sm font-semibold underline hover:no-underline text-white hover:text-indigo-600">Security</Link>
          <span className="w-px h-3 bg-white "></span>
          <Link href="" className="px-6 text-sm font-semibold underline hover:no-underline text-white hover:text-indigo-600">Website Accessibility</Link>
          <span className="w-px h-3 bg-white"></span>
          <Link href="" className="pl-6 text-sm font-semibold underline hover:no-underline text-white hover:text-indigo-600">Manage Cookies</Link>
        </div>
      </div>
    </div>
  );
}
