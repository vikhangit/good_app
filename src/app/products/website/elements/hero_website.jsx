"use client"
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { Accordion, AccordionBody, AccordionHeader, Breadcrumbs } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Icon({ id, open }) {
    return id == open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>

}

export default function HeroWebsite() {
    const [open, setOpen] = React.useState(-1);

    const handleOpen = (value) => setOpen(open === value ? -1 : value);

    const posts = [
        {

            title: "Product Description",
            description:
                "<p>Marketing software that helps you drive revenue, save time and resources, and measure and optimize your investments — all on one easy-to-use platform.</p>",
        },
        {
            title: "Pricing Overview",
            description:
                "<p>Free and premium plans that grow with you. Editions starting at:<ul><li>- $0/month (Free)</li><li>- $45 / month(Starter)</li><li>- $800/month (Professional)</li><li>- $3,600/month (Enterprise)</li></ul></p>",
        },
        {

            title: "Features",
            description:
                "<p>Drive revenue by connecting with leads at the right place and time across email, landing pages, forms, and more. Manage your contacts and campaigns in one place and use automation tools to scale your efficiency. Measure the success of your campaigns using powerful reporting tools. All powered by the data in your CRM to enable customer connection at scale.</p>",
        },
    ];
    return (
        <div className="px-24 pt-6">
            <div className='flex items-center'>
                <Link href="" className="text-sm py-2 leading-none font-medium text-indigo-600 hover:underline">
                    Home
                </Link>
                <div className='px-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
                <span className="cursor-text py-2 leading-none text-sm font-light">
                    Website
                </span>
            </div>
            <div className='mt-10 flex items-center gap-x-12'>
                <div className='basis-1/2'>
                    <Image alt='' src="/images/products/web/hero.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "100%" }} />

                </div>
                <div className='basis-1/2'>
                    <div className="flex items-center">
                        <Image alt='' src="/images/header/web.png" width={25} height={25} />
                        <h1 className='text-xl font-medium ml-3'>Marketing Hub™</h1>
                    </div>
                    <h1 className='text-4xl fon-semibold mt-6'>Marketing Software</h1>
                    <div className="flex mt-5 gap-x-3">
                        <Link
                            href="#"
                            className="text-sm font-medium bg-indigo-600 text-white border border-indigo-600 py-2.5 px-8 rounded-sm hover:opacity-60"
                        >
                            Xem demo
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium bg-white text-indigo-600 py-2.5 px-8 rounded-sm border border-indigo-600 hover:bg-indigo-100"
                        >
                            Bắt đầu
                        </Link>
                    </div>
                    <div className='mt-12'>
                        {posts.map((item, index) => (
                            <Accordion
                                key={index}
                                open={open === index}
                                icon={<Icon id={index} open={open} />}
                            >
                                <div
                                    className={`border border-blue-gray-100 mt-3 rounded-sm`}
                                >
                                    <AccordionHeader
                                        onClick={() => handleOpen(index)}
                                        className={`px-4 border-${open == index ? "b" : "0"} border-blue-gray-100 text-sm font-semibold`}
                                    >
                                        {item.title}
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <div className='px-4 text-justify text-sm font-light leading-6' dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                    </AccordionBody>
                                </div>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}