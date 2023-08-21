import Image from 'next/image'
import React from 'react'

export default function TrustedBy() {
  return (
      <div className='px-24 mt-20 pb-20'>
          <h1 className='text-base font-semibold uppercase text-center '>177,000+ COMPANIES TRUST</h1>
          <div className='grid grid-cols-8 items-center mt-4'>
                  <Image alt='' src="/images/products/web/trusted-by-1.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-2.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-3.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-4.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-5.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-6.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-7.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
                  <Image alt='' src="/images/products/web/trusted-by-8.webp" className='px-3' width={0} height={0} sizes='100vw' style={{width: "100%", height:"auto"}} />
          </div>
          <div className='flex items-center mt-20'>
              <div className='basis-3/5 pr-32'>
                  <h1 className='text-3xl font-semibold leading-snug'>Your sales process in one place, finally.</h1>
                  <p className='text-base font-light text-justify leading-8 mt-8'>
                      Sales Hub supercharges your sales process and eliminates friction by bringing all your tools and data together on one easy-to-use, powerful CRM platform your whole team loves. Now you’re freed up to focus on what really matters: your customers.
                  </p>
                  <p className='text-base font-light text-justify leading-8 mt-4'>
                      Marketing Hub is the connected way to market. It links your tools and experiences to unite your teams, all on top of a platform that connects your data. All of those bridges mean deeper connections with your customers and better results.
                  </p>
              </div>
              <div className="basis-2/5">
                  <iframe
                      src="https://www.youtube.com/embed/7HeXcA4zDxY"
                      title="YouTube video player"
                      className='w-full h-60'
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                  ></iframe>
              </div>
          </div>
    </div>
  )
}
