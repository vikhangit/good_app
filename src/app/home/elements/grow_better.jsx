import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GrowBetter() {
  return (
      <div className="flex items-center px-24 pb-16">
          <div className="basis-2/3 lg:mr-24">
              <h1 className="text-2xl font-medium leading-tight text-gray-900 ">
                  Grow Better With HubSpot Today
              </h1>
              <p className="mt-6 text-base font-light leading-8 text-gray-900 text-justify">
                  With tools to make every part of your process more human and a support team excited to help you, getting started with HubSpot has never been easier.
              </p>
              <div className="mt-10 flex gap-x-5 w-3/4">
                  <Link
                      href="#"
                      className="basis-1/2 text-lg text-center font-medium bg-indigo-600 text-white border border-indigo-600 py-4 rounded-sm hover:opacity-60"
                  >
                      Xem demo
                  </Link>
                  <Link
                      href="#"
                      className="basis-1/2 text-lg text-center font-medium bg-white text-indigo-600 py-4 rounded-sm border border-indigo-600 hover:bg-indigo-100"
                  >
                      Bắt đầu
                  </Link>
              </div>
              <p className="mt-3 text-base font-light leading-8 text-gray-900 text-justify">
                  Get a demo of our premium software, or get started with free tools.
              </p>
          </div>
          <div className="basis-1/3">
              <Image alt="" src="/images/home/grow-better/1.webp" width={0} height={0} sizes="100vw" style={{
                  width: "100%",
                  height: "100%",
              }} />
          </div>
      </div>
  )
}
