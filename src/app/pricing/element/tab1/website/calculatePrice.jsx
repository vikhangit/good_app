import { Radio } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export function Icon({ open }) {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export default function CalculatePrice({
  payment1,
  setPayment1,
  chooseType,
  setChooseType,
  handleScroll,
}) {
  const [showAddOns, setShowAddOns] = useState(false);
  const [contact, setContact] = useState(1000);
  return (
    <div className="w-full mt-14 pr-12">
      <div className="" id="calculate">
        <h1 className="text-2xl font-semibold text-center">
          Calculate Your Price
        </h1>
        <div className="flex justify-end w-full mb-8">
          <button
            // href="#top-pricing"
            onClick={() => handleScroll("top-pricing")}
            className="flex items-center text-sm font-semibold text-indigo-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z"
                clipRule="evenodd"
              />
            </svg>
            Back to top
          </button>
        </div>
        <div className="flex items-start">
          <div className="basis-3/5 border border-gray-600 rounded-sm px-6 py-8">
            <h5 className="text-base font-semibold">
              Select a Marketing Hub plan
            </h5>
            <div className="[&>div]:flex-row-reverse grid grid-cols-3 gap-x-2 mt-6">
              <button
                className={`flex items-start justify-between border rounded-sm border-gray-600 px-3 py-3 cursor-pointer relative ${
                  chooseType === "starter" && "border-indigo-600 border-2"
                }`}
                onClick={() => setChooseType("starter")}
              >
                <span className="flex flex-col items-start">
                  <span className="text-sm font-medium">Starter</span>
                  <span className="text-xs font-semibold">
                    <span>$20</span> <span className="mt-5">/month</span>
                  </span>
                </span>
                <span
                  className={`w-5 h-5 mt-1.5 rounded-sm border border-gray-600 ${
                    chooseType === "starter" && "border-indigo-600"
                  }`}
                >
                  {chooseType === "starter" ? (
                    <Image
                      alt=""
                      src="/images/pricing/check.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : null}
                </span>
              </button>
              <button
                className={`flex items-start justify-between border rounded-sm border-gray-600 px-3 py-3 cursor-pointer relative ${
                  chooseType === "professional" && "border-indigo-600 border-2"
                }`}
                onClick={() => setChooseType("professional")}
              >
                <span className="flex flex-col items-start">
                  <span className="text-sm font-medium">Professional</span>
                  <span className="text-xs font-semibold">
                    <span>$890</span> <span className="mt-5">/month</span>
                  </span>
                </span>
                <span
                  className={`w-5 h-5 mt-1.5 rounded-sm border border-gray-600 ${
                    chooseType === "professional" && "border-indigo-600"
                  }`}
                >
                  {chooseType === "professional" ? (
                    <Image
                      alt=""
                      src="/images/pricing/check.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : null}
                </span>
              </button>
              <button
                className={`flex items-start justify-between border rounded-sm border-gray-600 px-3 py-3 cursor-pointer relative ${
                  chooseType === "enterprise" && "border-indigo-600 border-2"
                }`}
                onClick={() => setChooseType("enterprise")}
              >
                <span className="flex flex-col items-start">
                  <span className="text-sm font-medium">Enterprise</span>
                  <span className="text-xs font-semibold">
                    <span>$3600</span> <span className="mt-5">/month</span>
                  </span>
                </span>
                <span
                  className={`w-5 h-5 mt-1.5 rounded-sm border border-gray-600 ${
                    chooseType === "enterprise" && "border-indigo-600"
                  }`}
                >
                  {chooseType === "enterprise" ? (
                    <Image
                      alt=""
                      src="/images/pricing/check.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : null}
                </span>
              </button>
            </div>
            <div className="w-14 h-0.5 bg-gray-600 mt-6 mb-10"></div>
            <h4 className="text-sm font-semibold">
              How many marketing contacts can I have with a Marketing Hub plan?
            </h4>
            <div className="text-xs font-light mt-2 flex">
              $18/month per 1,000{" "}
              <span className="font-semibold ml-2 mr-3 text-indigo-600">
                additional marketing contacts
              </span>
              <div className="relative z-10">
                <input
                  type="text"
                  className="py-1.5 px-2 w-20 h-full border border-gray-400 bg-gray-100 block rounded-sm"
                  min={1000}
                  max={10000}
                  value={contact}
                />
                <div className="absolute right-0 top-0 z-20 flex flex-col h-full">
                  <span
                    className="h-1/2 border border-gray-400 flex items-center justify-center text-center border-r-0 border-b-0 rounded-e-sm px-1 cursor-pointer"
                    onClick={() => setContact(contact + 1000)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span
                    className="h-1/2 border border-gray-400 flex items-center justify-center text-center border-r-0 rounded-e-sm px-1 cursor-pointer"
                    onClick={() => setContact(contact - 1000)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xs font-semibold text-center border border-gray-600 py-3 rounded-sm mt-4">
              <p>Includes 1 million free, non-marketing contacts.</p>
              <p className="font-light">
                Only pay for the contacts you want to market to.
              </p>
            </div>
            {/* <div className="w-14 h-0.5 bg-gray-600 mt-6 mb-10"></div>
            <button className="flex items-start justify-between w-full" onClick={() => setShowAddOns(!showAddOns)}>
              <div className="text-left">
                <p className="text-base font-semibold text-left">Add-ons</p>
                <p className="text-sm mt-2 text-left">
                  Customize and enhance your plan with additional features.
                </p>
              </div>
              <Icon open={showAddOns} />
            </button> */}
          </div>
          <div className="basis-2/5 shadow-sm shadow-gray-600 py-4 px-6 rounded-sm rounded-sm border-t-4 border-amber-600">
            <div className="">
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
              {/* <p className="text-xs mt-3">Starts at</p> */}
              <p className="text-4xl font-medium text-center mt-5">$890/mo</p>
              <p className="text-xl font-semibold text-center mt-4">
                billed annually
              </p>
              <p className="text-xl font-semibold text-center">
                at<span className="line-through ml-1">$10,680</span>
                <span className="text-indigo-600 ml-1">$9,600/yr</span>
              </p>
              <p className="text-sm text-center">with an annual commitment</p>
              <p className="text-sm text-center font-semibold mt-4">
                Estimated cost to get started:
              </p>
              <p className="text-lg text-center">$12,600*</p>
              <p className="text-sm text-center font-semibold mt-6">
                Product Selections
              </p>
              <div className="bg-gray-200 px-6 py-2 mt-4">
                <p className="text-sm font-semibold">
                  Marketing Hub Professional $800/mo
                </p>
                <span className="text-sm ">
                  Includes 2,000 marketing contacts
                </span>
              </div>
              <button className="mt-5 bg-indigo-600 text-center w-full text-white rounded-sm text-sm font-medium py-2.5 hover:opacity-50">
                Talk to sales
              </button>
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
    </div>
  );
}
