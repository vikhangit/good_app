import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Migrate() {
  return (
      <div  className='px-24 py-8'>
          <div className='flex items-center gap-x-10'>
              <div className='basis-1/2'>
                  <h1 className='text-3xl font-semibold'>
                      Migrate without the migraines.
                  </h1>
                  <p className='text-base font-light text-justify leading-7 mt-5'>
                      The content management system you need to easily create and personalize website pages for every visitor — optimized for conversion across every device. Rely on developers as much or as little as ${"you'd"} like.
                  </p>
                  <div className='flex gap-x-3 mt-10'>
                      <Link
                          href="#"
                          className="text-sm font-semibold bg-indigo-600 text-white border border-indigo-600 py-2.5 px-4 rounded-sm hover:opacity-60"
                      >
                          Find a partner
                      </Link>
                      <Link
                          href="#"
                          className="text-sm font-semibold bg-white text-indigo-600 py-2.5 px-4 rounded-sm border border-indigo-600 hover:bg-indigo-100"
                      >
                          Talk to Sales
                      </Link>
                  </div>
              </div>
              <div className="basis-1/2">
                  <Image alt='' src="/images/products/soft/CMS-Hub-Migrations@2x.webp" width={0} height={0} sizes='100vw' style={{
                      width: "100%",
                      height: "100%"
                  }} />
              </div>
          </div>
    </div>
  )
}
