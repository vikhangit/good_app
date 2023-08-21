import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from "../../../../../../public/images/header/web.png"
import img2 from "../../../../../../public/images/header/user-interface.png"
import img3 from "../../../../../../public/images/header/programming.png"
import iconCheck from "../../../../../../public/images/home/about/check.png"

export default function Product() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-14">
                <div className="shadow bg-white px-6 py-8 cursor-pointer  rounded-sm gap-x-4">
                    <div className="mt-2 flex">
                        <Image width={30} height={30} src={img1} alt="" />
                        <h1 className="text-2xl font-medium ml-3">Website<sup>TM</sup></h1>
                    </div>
                    <p className="text-sm font-light mt-6 text-justify">
                        Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.
                    </p>
                    <div className='border-t border-gray-400 mt-10 pt-6'>
                        <h2 className='text-base font-light'>Popular Features</h2>
                        <div className='flex items-center mt-5'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Lead generation</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Marketing automation</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Analytics</p>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <Link
                                href="#"
                                className="w-full text-center text-base font-medium bg-indigo-600 text-white border border-indigo-600 py-2 px-8 rounded-sm hover:opacity-60"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="shadow bg-white px-6 py-8 cursor-pointer  rounded-sm gap-x-4">
                    <div className="mt-2 flex">
                        <Image width={30} height={30} src={img2} alt="" />
                        <h1 className="text-2xl font-medium ml-3">App Mobile<sup>TM</sup></h1>
                    </div>
                    <p className="text-sm font-light mt-6 text-justify">
                        Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.
                    </p>
                    <div className='border-t border-gray-400 mt-10 pt-6'>
                        <h2 className='text-base font-light'>Popular Features</h2>
                        <div className='flex items-center mt-5'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Advanced CRM</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Meeting scheduling</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Payments</p>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <Link
                                href="#"
                                className="w-full text-center text-base font-medium bg-indigo-600 text-white border border-indigo-600 py-2 px-8 rounded-sm hover:opacity-60"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="shadow bg-white px-6 py-8 cursor-pointer  rounded-sm gap-x-4">
                    <div className="mt-2 flex">
                        <Image width={30} height={30} src={img3} alt="" />
                        <h1 className="text-2xl font-medium ml-3">Website</h1>
                    </div>
                    <p className="text-sm font-light mt-6 text-justify">
                        Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.
                    </p>
                    <div className='border-t border-gray-400 mt-10 pt-6'>
                        <h2 className='text-base font-light'>Tickets</h2>
                        <div className='flex items-center mt-5'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Customer feedback</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Knowledge base</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <Image alt='' src={iconCheck} width={15} height={15} />
                            <p className='ml-3 text-xs font-medium'>Analytics</p>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <Link
                                href="#"
                                className="w-full text-center text-base font-medium bg-indigo-600 text-white border border-indigo-600 py-2 px-8 rounded-sm hover:opacity-60"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
