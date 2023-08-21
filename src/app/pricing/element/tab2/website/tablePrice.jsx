"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TablePrice({ payment1, setPayment1 }) {
  return (
    <div>
      <div className="w-full mx-auto mt-8">
        <div className="flex gap-x-4">
          <div className="shadow-sm shadow-gray-600 py-4 px-6 rounded-sm">
            <h1 className="text-2xl font-semibold">Free Tools</h1>
            <p className="text-sm font-light mt-5">
              Start generating and emailing new leads, and measuring your
              success — for free
            </p>
            <p className="text-xs mt-3 relative z-[-1] opacity-0">Starts at</p>
            <p className="text-xl font-medium">$0</p>
            <span className="text-xs">No credit card required</span>
            <div className=" bg-gray-300 rounded-full flex items-stretch mt-3 relative z-[-1] opacity-0">
              <button
                className={`basis-1/2 ${
                  payment1 === "1" && "border border-indigo-600 rounded-full"
                } py-1.5`}
                onClick={() => setPayment1("1")}
              >
                <p className="text-xs font-semibold text-black">Pay Monthly</p>
                <p className="text-xs font-light">Commit annually</p>
              </button>
              <button
                className={`basis-1/2 ${
                  payment1 === "2" && "border border-indigo-600 rounded-full"
                } py-1.5`}
                onClick={() => setPayment1("2")}
              >
                <p className="text-xs font-semibold text-black">Pay Upfront</p>
                <p className="text-xs font-semibold text-green-500">SAVE 10%</p>
                <p className="text-xs font-light">Commit annually</p>
              </button>
            </div>
            <button className="mt-6 bg-indigo-600 text-center w-full text-white rounded-sm text-sm font-medium py-2.5 hover:opacity-50">
              Talk to sales
            </button>
            <p className="text-sm mt-5">Includes:</p>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Free Marketing tools</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Free Sales tools</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Free Service tools</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Free CMS tools</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">
                Omni-channel marketing automation
              </p>
            </div>

            <div className="text-xs mt-5">
              *Cost shown does not include the required, one-time{" "}
              <span className="font-semibold">Professional Onboarding </span>{" "}
              for a fee of $3,000.{" "}
              <Link
                href=""
                className=" font-semibold text-indigo-600 hover:underline inline-flex items-center"
              >
                {" "}
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/1500/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="shadow-sm shadow-gray-600 py-4 px-6 rounded-sm">
            <h1 className="text-2xl font-semibold">Professional</h1>
            <p className="text-sm font-light mt-5">
              Comprehensive marketing software for automation, reporting, and
              campaigns
            </p>
            <p className="text-xs mt-3">Starts at</p>
            <p className="text-xl font-medium">$890/mo</p>
            <span className="text-xs">billed monthly</span>
            <div className="bg-gray-300 rounded-full flex items-stretch mt-3">
              <button
                className={`basis-1/2 ${
                  payment1 === "1" && "border border-indigo-600 rounded-full"
                } py-1.5`}
                onClick={() => setPayment1("1")}
              >
                <p
                  className={`text-[11px] font-semibold ${
                    payment1 === "1" ? "text-indigo-600" : "text-black"
                  }`}
                >
                  Pay Monthly
                </p>
                <p className="text-[11px] font-light">Commit annually</p>
              </button>
              <button
                className={`basis-1/2 ${
                  payment1 === "2" && "border border-indigo-600 rounded-full"
                } py-1.5`}
                onClick={() => setPayment1("2")}
              >
                <p
                  className={`text-[11px] font-semibold ${
                    payment1 === "2" ? "text-indigo-600" : "text-black"
                  }`}
                >
                  Pay Upfront
                </p>
                <p className="text-[11px] font-semibold text-green-500">
                  SAVE 10%
                </p>
                <p className="text-[11px] font-light">Commit annually</p>
              </button>
            </div>
            <button className="mt-5 bg-indigo-600 text-center w-full text-white rounded-sm text-sm font-medium py-2.5 hover:opacity-50">
              Talk to sales
            </button>
            <p className="text-sm mt-5">Starter plus:</p>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Team</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Social media</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Campaign reporting</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Custom reporting</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">
                Omni-channel marketing automation
              </p>
            </div>

            <div className="text-xs mt-5">
              *Cost shown does not include the required, one-time{" "}
              <span className="font-semibold">Professional Onboarding </span>{" "}
              for a fee of $3,000.{" "}
              <Link
                href=""
                className=" font-semibold text-indigo-600 hover:underline inline-flex items-center"
              >
                {" "}
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/1500/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="shadow-sm shadow-gray-600 py-4 px-6 rounded-sm">
            <h1 className="text-2xl font-semibold">Professional</h1>
            <p className="text-sm font-light mt-5">
              Comprehensive marketing software for automation, reporting, and
              campaigns
            </p>
            <p className="text-xs mt-3">Starts at</p>
            <p className="text-xl font-medium">$890/mo</p>
            <span className="text-xs">billed monthly</span>
            <div className="bg-gray-300 rounded-full flex items-stretch mt-3">
              <button
                className={`basis-1/2 ${
                  payment1 === "1" && "border border-indigo-600 rounded-full"
                } py-1.5`}
                onClick={() => setPayment1("1")}
              >
                <p
                  className={`text-[11px] font-semibold ${
                    payment1 === "1" ? "text-indigo-600" : "text-black"
                  }`}
                >
                  Pay Monthly
                </p>
                <p className="text-[11px] font-light">Commit annually</p>
              </button>
              <button
                className={`basis-1/2 ${
                  payment1 === "2" && "border border-indigo-600 rounded-full"
                } py-1.5`}
                onClick={() => setPayment1("2")}
              >
                <p
                  className={`text-[11px] font-semibold ${
                    payment1 === "2" ? "text-indigo-600" : "text-black"
                  }`}
                >
                  Pay Upfront
                </p>
                <p className="text-[11px] font-semibold text-green-500">
                  SAVE 10%
                </p>
                <p className="text-[11px] font-light">Commit annually</p>
              </button>
            </div>
            <button className="mt-5 bg-indigo-600 text-center w-full text-white rounded-sm text-sm font-medium py-2.5 hover:opacity-50">
              Talk to sales
            </button>
            <p className="text-sm mt-5">Starter plus:</p>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Team</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Social media</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Campaign reporting</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">Custom reporting</p>
            </div>
            <div className="flex items-start py-1.5">
              <Image
                alt=""
                src="/images/home/about/check.png"
                width={15}
                height={15}
              />
              <p className="text-sm leading-none ml-2">
                Omni-channel marketing automation
              </p>
            </div>

            <div className="text-xs mt-5">
              *Cost shown does not include the required, one-time{" "}
              <span className="font-semibold">Professional Onboarding </span>{" "}
              for a fee of $3,000.{" "}
              <Link
                href=""
                className=" font-semibold text-indigo-600 hover:underline inline-flex items-center"
              >
                {" "}
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/1500/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
