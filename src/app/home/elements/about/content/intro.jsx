import Link from 'next/link'
import React from 'react'

export default function Heading() {
  return (
      <div className='text-center w-3/4 mx-auto'>
          <h1 className='text-3xl font-semibold'>
              What is Good App?
          </h1>
          <p className="text-justify text-base font-light leading-relaxed mt-12">
              HubSpot is a CRM platform with all the software, integrations, and resources you need to connect marketing, sales, content management, and customer service. Each product in the platform is powerful on its own, but the real magic happens when you use them together.
              
          </p>
          <div className='flex justify-center gap-x-4 mt-4'>
              <Link
                  href="#"
                  className="text-sm font-semibold bg-indigo-600 text-white border border-indigo-600 py-2 px-8 rounded-sm hover:opacity-60"
              >
                  Demo premium CRM
              </Link>
              <Link
                  href="#"
                  className="text-sm font-semibold bg-white text-indigo-600 py-2 px-8 rounded-sm border border-indigo-600 hover:bg-indigo-100"
              >
                  Get free CRM
              </Link>
          </div>
    </div>
  )
}
