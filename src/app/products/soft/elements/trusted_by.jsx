import Image from 'next/image'
import React from 'react'

export default function TrustedBy() {
  return (
      <div className='px-24 mt-20 pb-20'>
          <h1 className='text-base font-semibold uppercase text-center '>TRUSTED BY</h1>
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
          
    </div>
  )
}
