"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function EasyUse() {
  const [swiper, setSwiper] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  return (
    <>
      <div className="text-center mt-14 mb-20">
        <h5 className="text-base font-semibold mt-8 mb-8">
          CONSISTENTLY PRAISED BY HUBSPOT USERS ON REVIEW SITE G2.COM
        </h5>
        <div className='px-24 w-3/4 mx-auto flex'>
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
      <div className='pb-10 mt-0 bg-indigo-50 bg-opacity-50'>
        <div className='py-24 relative w-full'>
          <div className="absolute text-center top-0 bg-white left-1/2 -translate-x-1/2 -translate-y-10 py-3 px-8 rounded-full flex flex-col items-center bg-white shadow shadow-gray-800">
            <h5 className="text-sm font-semibold">Have questions? Give us a call and {"we'll"} walk you through it.</h5>
            <Link href="" className="group mt-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-indigo-600 group-hover:underline pl-2">

                +1 857-829-5060
              </span>
            </Link>
          </div>
          <div className='relative text-center text-gray-600 px-24'>
            <h1 className="text-3xl font-semibold">
              The proof is in the pixels. See {"what's"} possible from real customers who choose CMS Hub.
            </h1>
          </div>
        </div>
        <div className='mx-24 relative'>
          <Swiper
            spaceBetween={30}
            loop={true}
            // modules={[Pagination]}
            className="w-3/4 h-full z-10"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
            onActiveIndexChange={(s) => setActiveSlide(s.realIndex)}
          >
            <SwiperSlide className='flex justify-center items-center text-center'>
              <Image alt='' src="/images/products/soft/slide1.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center text-center'><Image alt='' src="/images/products/soft/slide2.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "100%" }} /></SwiperSlide>
            <SwiperSlide className='flex justify-center items-center text-center'><Image alt='' src="/images/products/soft/slide3.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "100%" }} /></SwiperSlide>
            <SwiperSlide className='flex justify-center items-center text-center'><Image alt='' src="/images/products/soft/slide4.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "100%" }} /></SwiperSlide>
          </Swiper>
          <div>
            <button className="p-2.5 rounded-full bg-white shadow-sm shadow-gray-800 absolute top-1/2 left-10 z-10 -translate-y-1/2" onClick={() => swiper.slidePrev()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="p-2.5 rounded-full bg-white shadow-sm shadow-gray-800 absolute top-1/2 right-10 -translate-y-1/2 z-10" onClick={() => swiper.slideNext()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <div className='flex justify-center gap-x-2.5 mt-5'>
            {
              [0, 1, 2, 3].map((_, index) =>
                <span key={index} className={`${activeSlide === index && "bg-indigo-600"} border-2 border-indigo-600 text-white w-4 h-4 rounded-full cursor-pointer`} onClick={() => swiper.slideTo(index)}></span>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
