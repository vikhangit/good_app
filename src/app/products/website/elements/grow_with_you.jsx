"use client"
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'
import iconCheck from "../../../../../public/images/home/about/check.png"
import Image from 'next/image'

export function Icon({ open }) {
  return open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>

}

export default function GrowWithYou() {
  const [open, setOpen] = useState(true)
  const handleOpen = () => setOpen(!open);
  return (
    <div className="px-24 pb-20 bg-indigo-50 bg-opacity-50">
      <div className='w-3/5 mx-auto'>
        <h1 className='text-3xl font-semibold text-gray-800 text-center'>Marketing Software That Grows With You</h1>
        <p className='text-base font-light text-center leading-8 mt-6'>Start with free tools and upgrade as you grow, or hit the ground running with one of our premium editions.</p>
      </div>
      <div className='grid grid-cols-4 gap-x-6 mt-8'>
        <div className='bg-white shadow border border-blue-gray-200 border-t-4 border-t-blue-gray-700 pt-10 pb-12 rounded-sm'>
          <h1 className='text-xl font-medium text-center'>Free</h1>
          <p className='text-xs font-light leading-relaxed text-center mt-2 mb-6'>100% free.
            <br />
            No credit card required.
          </p>
          <Accordion
            open={open}
            icon={<Icon open={open} />}
          >
            <div
              className={``}
            >
              <AccordionHeader
                onClick={() => handleOpen()}
                className={`border-0 border-t py-3 border-blue-gray-200 text-sm font-semibold justify-center text-indigo-600 hover:text-indigo-600 hover:underline text-sm font-medium`}
              >
                Popular features
              </AccordionHeader>
              <AccordionBody>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Email marketing
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Forms
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Landing pages
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Live chat
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Blog
                </div>
              </AccordionBody>
            </div>
          </Accordion>
        </div>
        <div className='bg-white shadow border border-blue-gray-200 border-t-4 border-t-amber-600 pt-10 pb-12 rounded-sm'>
          <h1 className='text-xl font-medium text-center'>Starter</h1>
          <p className='text-xs font-light leading-relaxed text-center mt-2 mb-11'>Starting at $45/month <br />
          </p>
          <Accordion
            open={open}
            icon={<Icon open={open} />}
          >
            <div
              className={``}
            >
              <AccordionHeader
                onClick={() => handleOpen()}
                className={`border-0 border-t py-3 border-blue-gray-200 text-sm font-semibold justify-center text-indigo-600 hover:text-indigo-600 hover:underline text-sm font-medium`}
              >
                Popular features
              </AccordionHeader>
              <AccordionBody>
                 <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Everything in Free
                </div>
                 <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Multiple currencies
                </div>
                 <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Email health insights
                </div>
                 <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Calls to action
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> HubSpot branding removed
                </div>
              </AccordionBody>
            </div>
          </Accordion>
        </div>
        <div className='bg-white shadow border border-blue-gray-200 border-t-4 border-t-green-300 pt-10 pb-12 rounded-sm'>
          <h1 className='text-xl font-medium text-center'>Professional</h1>
          <p className='text-xs font-light leading-relaxed text-center mt-2 mb-11'>
            Starting at $800/month
          </p>
          <Accordion
            open={open}
            icon={<Icon open={open} />}
          >
            <div
              className={``}
            >
              <AccordionHeader
                onClick={() => handleOpen()}
                className={`border-0 border-t py-3 border-blue-gray-200 text-sm font-semibold justify-center text-indigo-600 hover:text-indigo-600 hover:underline `}
              >
                Popular features
              </AccordionHeader>
              <AccordionBody>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Everything in Starter
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Campaign management
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> SEO
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Social media
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Custom reporting
                </div>
              </AccordionBody>
            </div>
          </Accordion>
        </div>
        <div className='bg-white shadow border border-blue-gray-200 border-t-4 border-t-blue-300 pt-10 pb-12 rounded-sm'>
          <h1 className='text-xl font-medium text-center'>Enterprise</h1>
          <p className='text-xs font-light leading-relaxed text-center mt-2 mb-11'>
            Starting at $3,600/month
          </p>
          <Accordion
            open={open}
            icon={<Icon open={open} />}
          >
            <div
              className={``}
            >
              <AccordionHeader
                onClick={() => handleOpen()}
                className={`border-0 border-t py-3 border-blue-gray-200 text-sm font-semibold justify-center text-indigo-600 hover:text-indigo-600 hover:underline`}
              >
                Popular features
              </AccordionHeader>
              <AccordionBody>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Everything in Professional
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Predictive lead scoring
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Adaptive testing
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Multi-touch revenue attribution
                </div>
                <div className='flex items-center gap-x-2 text-sm font-light px-5 py-1.5'>
                  <Image alt='' src={iconCheck} width={15} height={15} /> Customer journey analytics
                </div>
              </AccordionBody>
            </div>
          </Accordion>
        </div>

      </div>
      <div className="w-3/5 px-4 mx-auto flex justify-center mt-8 gap-x-3">
        <Link
          href="#"
          className="basis-1/2 text-base text-center font-medium bg-indigo-600 text-white border border-indigo-600 py-2.5 px-8 rounded-sm hover:opacity-60"
        >
          Xem demo
        </Link>
        <Link
          href="#"
          className="basis-1/2 text-base text-center font-medium bg-white text-indigo-600 py-2.5 px-8 rounded-sm border border-indigo-600 hover:bg-indigo-100"
        >
          Bắt đầu
        </Link>
      </div>
      <div className="text-center mt-14">
        <p className="text-sm font-light">
          For more detailed information on product packaging and the limits that apply, please see our Product and Services Catalog here. Price shown in USD and subject to applicable tax.
        </p>
        <h5 className="text-base font-semibold mt-8">
          CONSISTENTLY PRAISED BY HUBSPOT USERS ON REVIEW SITE G2.COM
        </h5>
      </div>
      <div className='w-3/4 mx-auto flex mt-8'>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
        <div className="px-4">
          <Image 
            alt='' 
            src="/images/products/web/badge.png" 
            width={0} 
            height={0} 
            sizes='100vw' 
            style={{
              width: '100%',
              height: "auto"
          }} />
        </div>
      </div>
    </div>
  )
}
