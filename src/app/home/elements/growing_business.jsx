import Image from 'next/image'
import React from 'react'

export default function GrowingBusiness() {
  return (
      <div className='px-24 py-20 grid grid-cols-3 items-center'>
          <div>
              <h1 className='text-4xl font-semibold text-gray-700'>177,000+</h1>
              <p className='text-lg font-light mt-4'>customers in over <span className="font-semibold">120</span> countries growing their businesses with HubSpot</p>
          </div> 
          <div className='col-span-2 grid grid-cols-4 gap-x-4 gap-y-4 ml-24'>
              <div className='p-5 flex items-center'>
                  <Image alt='' src="/images/home/growing/wwf.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/DoorDash.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/reddit-2.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/weightwatchers.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/tumblr.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/howard-university.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/motley-fool.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className='p-5'>
                  <Image alt='' src="/images/home/growing/eventbrit.webp" width={0} height={0} sizes='100vw' style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
          </div> 
    </div>
  )
}
