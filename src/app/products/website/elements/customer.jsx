"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CustomerProduct() {
    return (
        <div className='px-24 pb-12'>

            <h1 className='text-3xl font-semibold text-center mt-3'>
                How HubSpot Customers Are Connecting
            </h1>
            <p className='text-base font-light text-center leading-8 mt-6'>
                Don’t just take our word for it. Here’s what some of our customers say about how Marketing Hub helps them drive revenue, save time and resources, and measure and optimize investments.
            </p>
            <div className='grid grid-cols-3 gap-x-6 mt-12'>
                <div className='group cursor-pointer hover:shadow-lg  border border-blue-gray-600 rounded-sm'>
                    <div className='relative w-full'>
                        <Image
                            alt=''
                            src="/images/products/web/customer.webp"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                        <div className='absolute w-full h-full bg-black bg-opacity-40 top-0 flex jutify-center items-center group-hover:bg-transparent'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 mx-auto text-white">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-center py-5'>
                        <Image
                            alt=''
                            src="/images/products/web/logo-customer.webp"
                            width={96}
                            height={48}
                        />
                    </div>
                </div>
                <div className='group cursor-pointer hover:shadow-lg  border border-blue-gray-600 rounded-sm'>
                    <div className='relative w-full'>
                        <Image
                            alt=''
                            src="/images/products/web/customer.webp"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                        <div className='absolute w-full h-full bg-black bg-opacity-40 top-0 flex jutify-center items-center group-hover:bg-transparent'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 mx-auto text-white">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-center py-5'>
                        <Image
                            alt=''
                            src="/images/products/web/logo-customer.webp"
                            width={96}
                            height={48}
                        />
                    </div>
                </div>
                <div className='group cursor-pointer hover:shadow-lg  border border-blue-gray-600 rounded-sm'>
                    <div className='relative w-full'>
                        <Image
                            alt=''
                            src="/images/products/web/customer.webp"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                        <div className='absolute w-full h-full bg-black bg-opacity-40 top-0 flex jutify-center items-center group-hover:bg-transparent'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 mx-auto text-white">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-center py-5'>
                        <Image
                            alt=''
                            src="/images/products/web/logo-customer.webp"
                            width={96}
                            height={48}
                        />
                    </div>
                </div>
            </div>
            <h1 className='text-xl font-medium text-center mt-16'>
                Drive revenue, save time and resources, and optimize your investments with Marketing Hub.
            </h1>
            <div className="px-4 mx-auto flex justify-center mt-4 gap-x-3">
                <Link
                    href="#"
                    className="text-base text-center font-medium bg-indigo-600 text-white border border-indigo-600 py-2.5 px-8 rounded-sm hover:opacity-60"
                >
                    Xem demo
                </Link>
                <Link
                    href="#"
                    className="text-base text-center font-medium bg-white text-indigo-600 py-2.5 px-8 rounded-sm border border-indigo-600 hover:bg-indigo-100"
                >
                    Bắt đầu
                </Link>
                
            </div>
        </div>
    )
}
