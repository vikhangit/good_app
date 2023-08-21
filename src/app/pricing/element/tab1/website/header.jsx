import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeaderTabWeb({handleScroll, title}) {
  return (
    <div id="top-pricing">
      <div className="flex items-center justify-center mt-4">
        <Image alt="" src="/images/header/web.png" width={30} height={30} />
        <h1 className="text-3xl font-bold ml-3">{title}™</h1>
      </div>
      <p className="flex items-center text-sm font-light mt-4">
        Everything you need to capture leads and turn them into customers.{" "}
        <button
          // href="#calculate"
          onClick={() => handleScroll("calculate")}
          className="ml-1 flex items-center text-indigo-600 hover:underline"
        >
          Calculate your price{" "}
          <svg
            xmlns="http://www.w3.org/1500/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
          </svg>
        </button>
      </p>
    </div>
  );
}
