import Image from 'next/image'
import React from 'react'

export default function TrustedBy() {
  return (
      <div className='px-24 mt-20 pb-20'>
          <h1 className='text-base font-semibold uppercase text-center '>Trusted By</h1>
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
                  <h1 className='text-3xl font-semibold leading-snug'>All your marketing tools and data — connected in one place.</h1>
                  <p className='text-base font-light text-justify leading-8 mt-8'>
                      Many marketers are in a crisis of disconnection. Constantly-changing channels make it hard to connect with customers. Silos make it hard to connect your teams. Disparate systems make it hard to connect your data. But it doesn’t have to be that way.
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
