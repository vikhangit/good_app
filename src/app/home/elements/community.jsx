import Image from 'next/image'
import React from 'react'

export default function Community() {
  return (
    <div className='p-24 bg-gradient-to-b from-indigo-600 to-indigo-100 text-white'>
      <div className='w-2/3 mx-auto'>
        <h2 className='text-3xl font-semibold text-center'>Learn and grow better with award-winning support and a thriving community.</h2>
        <p className='text-base font-light text-center mt-6'>
          Learn how to get the most out of HubSpot with free courses, certifications, and resources — plus a legendary customer support team and an active user community to back you up.
        </p>
      </div>
      <div className='grid grid-cols-4 mt-24'>
        <div className='p-8 border-b border-r border-white flex flex-col items-center'>
          <Image alt='' src="/images/home/community/deal.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6 relative after:absolute after:text-base after:ml-0.5 after:content-['+']">150</h3>
          <p className='text-base font-medium'>
            HubSpot user groups
          </p>
          
        </div>
        <div className='p-8 border-b border-r border-white flex flex-col items-center'>
          <Image alt='' src="/images/home/community/blogging.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6 relative after:absolute after:text-base after:ml-0.5 after:content-['+']">7M</h3>
          <p className='text-base font-medium'>
            monthly visits
          </p>
        </div>
        <div className='p-8 border-b border-r border-white flex flex-col items-center'>
          <Image alt='' src="/images/home/community/graduation.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6 relative after:absolute after:text-base after:ml-0.5 after:content-['+']">477K</h3>
          <p className='text-base font-medium'>
            certified professionals
          </p>
        </div>
        <div className='p-8 border-b border-white flex flex-col items-center'>
            <Image alt='' src="/images/home/community/inbound.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6">70K</h3>
          <p className='text-base font-medium'>
            registered attendees
          </p>
        </div>
        <div className='p-8 border-r border-white flex flex-col items-center'>
          <Image alt='' src="/images/home/community/online-shopping.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6 relative after:absolute after:text-base after:ml-0.5 after:content-['+']">1,400</h3>
          <p className='text-base font-medium'>
            integrations
          </p>
        </div>
        <div className='p-8 border-r border-white flex flex-col items-center'>
          <Image alt='' src="/images/home/community/globe.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6">6</h3>
          <p className='text-base font-medium'>
            anguages
          </p>
        </div>
        <div className='p-8 border-r border-white flex flex-col items-center'>
          <Image alt='' src="/images/home/community/speech-bubble.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6 relative after:absolute after:text-base after:ml-0.5 after:content-['+']">3.1M</h3>
          <p className='text-base font-medium'>
            social followers
          </p>
        </div>
        <div className='p-8 flex flex-col items-center'>
          <Image alt='' src="/images/home/community/group.png" width={40} height={40} />
          <h3 className="text-4xl font-semibold my-6 relative after:absolute after:text-base after:ml-0.5 after:content-['+']">184,000</h3>
          <p className='text-base font-medium'>
            customers
          </p>
        </div>
      </div>
    </div>
  )
}
