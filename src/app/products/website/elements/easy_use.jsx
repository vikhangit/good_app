import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EasyUse() {
  return (
    <div className='pb-10 mt-0 bg-indigo-50 bg-opacity-50'>
      <div className='py-24 relative w-full'>
        <div className='w-full absolute top-0 h-full'>
          <Image alt='' src="/images/products/web/easy_use.webp" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className='bg-black bg-opacity-60 w-full h-full absolute top-0'>
        </div>
        <div className="absolute text-center top-0 bg-white left-1/2 -translate-x-1/2 -translate-y-10 py-3 px-8 rounded-full flex flex-col items-center">
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
        <div className='relative text-center text-white'>
          <h1 className="text-3xl font-semibold">It’s already easy to use. But we’re still here for you.</h1>
          <p className="text-base font-light mt-4">Because you shouldn’t have to figure it out all on your own.</p>
        </div>
      </div>
      <div className='px-24 grid grid-cols-3 -translate-y-12'>
        <div className='bg-white px-4 pt-8 pb-4 border border-gray-500 rounded-sm'>
          <h2 className='text-2xl font-medium text-center'>24/7 Customer Support</h2>
          <p className="text-base font-light leading-7 mt-4">
            {"HubSpot's"} award-winning customer support team is ready to help you with all your technical questions, and can be reached by live chat, email, or phone depending on your plan.
          </p>
        </div>
        <div className='bg-white px-4 pt-8 pb-4 border border-gray-500 rounded-sm'>
          <h2 className='text-2xl font-medium text-center'>Services</h2>
          <p className="text-base font-light leading-7 mt-4">
            Get up and running quickly with a personalized onboarding plan. Then maximize results along the way with premium training, ongoing consulting, and technical services.
          </p>
        </div>
        <div className='bg-white px-4 pt-8 pb-4 border border-gray-500 rounded-sm'>
          <h2 className='text-2xl font-medium text-center'>Education</h2>
          <p className="text-base font-light leading-7 mt-4">
            From blog articles to online courses to comprehensive certifications, HubSpot has a library of free educational content to help your whole team stay ahead of the curve as you grow.
          </p>
        </div>
      </div>
    </div>
  )
}
