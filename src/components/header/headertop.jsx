"use client"
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeaderTop({ hidden }) {
    return (
        <div className={`flex items-center justify-between px-24 py-4 ${hidden ? "hidden" : "block"}`}>
            <div className="flex items-center gap-x-4">
                <span className="group flex items-center relative text-xs py-2 cursor-pointer hover:underline hover:text-indigo-600">
                    <Image alt='' src="/images/header/top/earth-globe.png" width={12} height={12} />
                    <span className="mx-2">{"English"}</span>
                    <ChevronDownIcon
                        className="h-3.5 w-3.5 flex-none text-gray-700"
                        aria-hidden="true"
                    />
                    <div 
                        className='absolute hidden group-hover:block z-50 top-full right-0 w-4 h-4 border border-gray-600 border-b-0 border-r-0 rotate-45 bg-white rounded-ss'></div>
                    <div className="absolute hidden group-hover:block left-0 top-full z-10 overflow-y-auto bg-transparent -translate-y-1">
                        <div className="border border-gray-600 relative z-40 shadow-lg ring-1 ring-gray-900/5 px-6 flex flex-col bg-white py-2 mt-3 rounded-sm">
                            <span className='py-2 text-gray-900 hover:text-indigo-600 hover:underline'>English</span>
                            <span className='py-2 text-gray-900  hover:text-indigo-600 hover:underline'>Vietnamese</span>
                        </div>
                    </div>
                </span>
                <span className="flex items-center text-xs gap-x-2 cursor-pointer hover:underline">
                    <Image alt='' src="/images/header/top/user.png" width={12} height={12} />
                    {"Contact Sale"}
                </span>
            </div>
            <div className="flex items-center gap-x-4">
                <span className="cursor-pointer"><Image alt='' src="/images/header/top/search.png" width={14} height={14} /></span>
                <Link href="" className="text-xs hover:underline hover:text-indigo-600">Login</Link>
                <Link href="" className="text-xs hover:underline hover:text-indigo-600">Customer Support</Link>
                <span className="group relative flex items-center text-xs hover:underline cursor-pointer hover:text-indigo-600 pr-5">
                    <span className="mr-2">About</span>
                    <ChevronDownIcon
                        className="h-3.5 w-3.5 flex-none text-gray-700"
                        aria-hidden="true"
                    />
                    <div
                        className='absolute hidden group-hover:block z-50 top-full right-5 w-4 h-4 border border-gray-600 border-b-0 border-r-0 rotate-45 bg-white rounded-ss translate-y-2'></div>
                    <div className="absolute hidden group-hover:block right-0 top-full z-10 overflow-y-auto bg-transparent -translate-y-1">
                        <div className="border border-gray-600 relative w-44 z-40 shadow-lg ring-1 ring-gray-900/5 px-6 flex flex-col bg-white py-2 mt-5 rounded-sm">
                            <span className='py-2 text-gray-900  hover:text-indigo-600 hover:underline'>About Us</span>
                            <span className='py-2 text-gray-900  hover:text-indigo-600 hover:underline'>Careers</span>
                            <span className='py-2 text-gray-900  hover:text-indigo-600 hover:underline'>Contact Us</span>
                            <span className='py-2 text-gray-900  hover:text-indigo-600 hover:underline'>Investor Relations</span>
                            
                            <span className='py-2 text-gray-900  hover:text-indigo-600 hover:underline'>Management Team</span>
                            
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}
