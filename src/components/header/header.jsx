"use client"
import { Popover } from "@headlessui/react";
import {
  ChevronDownIcon
} from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import message from "../../../public/images/header/bubble.png";
import service from "../../../public/images/header/customer-support.png";
import education from "../../../public/images/header/graduation.png";
import team from "../../../public/images/header/group.png";
import img3 from "../../../public/images/header/programming.png";
import img2 from "../../../public/images/header/user-interface.png";
import img1 from "../../../public/images/header/web.png";
import { usePathname } from 'next/navigation';
import HeaderTop from './headertop';
const products = [
  { name: "App B2C (Bán Lẻ)", href: "retail-b2c-app", icon: ChartPieIcon },
  {
    name: "App Chuổi Cửa Hàng",
    description: "Speak directly to your customers",
    href: "chain-store-app",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "App B2B (Đại Lý/CTV)",
    description: "Your customers’ data will be safe and secure",
    href: "agent-system-building-app",
    icon: FingerPrintIcon,
  },
  {
    name: "Web Bán Hàng",
    description: "Connect with third-party tools",
    href: "website-b2b",
    icon: SquaresPlusIcon,
  },
];

function classNames(...classes) { }
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const path = usePathname()
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    document.addEventListener("scroll", toggleVisible);
    return () => document.removeEventListener("scroll", toggleVisible);
  }, []);
  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 ${path !== "/pricing" && "shadow"} bg-white`}>
      <HeaderTop hidden={hidden} /> 
        <nav
          className={`mx-auto flex max-w-7xl items-center relative ${path === "/pricing" && hidden && "hidden"} justify-between lg:mx-24`}
          aria-label="Global"
        >
          <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12">
            <Link href={"/"} className="text-indigo-600 text-xl uppercase">
              Good App
            </Link>
            <div className="group">
              <button className="group py-4 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:underline focus-visible:border-0 focus-visible:outline-0">
                Phần mềm
                <ChevronDownIcon
                  className="h-3.5 w-3.5 flex-none text-gray-700"
                  aria-hidden="true"
                />
              </button>
              <div className="absolute hidden group-hover:block left-0 top-full z-10 w-full overflow-y-auto bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="bg-indigo-50 flex flex-col items-center pt-10 px-24 pb-4 border border-gray-300 rounded-s-sm">
                  <h2 className="text-lg font-medium">
                    The HubSpot CRM Platform
                  </h2>
                  <p className="text-sm font-light leading-relaxed mt-3">
                    All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.
                  </p>
                  <div className="flex gap-x-6 mt-3">
                    <Link href="" className="bg-white flex items-center px-12 py-4 text-sm font-semibold text-indigo-600 hover:underline border border-gray-300 rounded-sm">
                      Free HubSpot CRM
                      <span aria-hidden="true" className="font-light">&nbsp;&rarr;</span>
                    </Link>
                    <Link href="" className="bg-white flex items-center px-12 py-4 text-sm font-semibold text-indigo-600 hover:underline border border-gray-300 rounded-sm">Overview all product
                      <span aria-hidden="true" className="font-light">&nbsp;&rarr;</span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-4">
                    <Link href="/products/website" className="bg-white flex items-start px-6 py-4 cursor-pointer border border-gray-300 rounded-sm gap-x-4">
                      <div className="mt-2">
                        <Image width={35} height={35} src={img1} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium">Website</h1>
                        <p className="text-sm font-light mt-2">
                          Website automation software.
                          <span className="ml-2 font-semibold text-indigo-600 hover:underline">
                            Free and premium plans<span className="font-light">&nbsp;&rarr;</span>
                          </span>
                        </p>
                      </div>
                    </Link>
                    <Link href="/products/app-mobile" className="bg-white flex items-start px-6 py-4 cursor-pointer border border-gray-300 rounded-sm gap-x-4">
                      <div className="mt-2">
                        <Image width={35} height={35} src={img2} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium">Mobile App</h1>
                        <p className="text-sm font-light mt-2">
                          Mobile app automation software.
                          <span className="ml-2 font-semibold text-indigo-600 hover:underline">
                            Free and premium plans<span className="font-light">&nbsp;&rarr;</span>
                          </span>
                        </p>
                      </div>
                    </Link>
                    <Link href="/products/soft" className="bg-white flex items-start px-6 py-4 cursor-pointer border border-gray-300 rounded-sm gap-x-4">
                      <div className="mt-2">
                        <Image width={35} height={35} src={img3} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium">Soft</h1>
                        <p className="text-sm font-light mt-2">
                          Soft automation software
                          <span className="ml-2 font-semibold text-indigo-600 hover:underline">
                            Free and premium plans<span className="font-light">&nbsp;&rarr;</span>
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="bg-white px-24 py-8 border border-gray-300 rounded-e-sm">
                  <Link href="" className="group flex flex-col items-center">
                    <h1 className="text-base font-semibold">App Marketplace</h1>
                    <div className="flex items-center text-xs mt-4 font-light">Connect your favorite apps to HubSpot.<div className="flex items-center font-semibold ml-1 text-indigo-600 group-hover:underline">
                      See all integrations
                      <span className="font-light">&nbsp;&rarr;</span>
                    </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/pricing" className="py-4 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:underline">
              Bảng giá
            </Link>
            <div className="group">
              <button className="flex py-4 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:underline focus-visible:border-0 focus-visible:outline-0">
                Tài liệu
                <ChevronDownIcon
                  className="h-3.5 w-3.5 flex-none text-gray-700"
                  aria-hidden="true"
                />
              </button>
              <div className="absolute left-1/2 hidden group-hover:block top-full z-10 w-2/3 -translate-x-1/2 overflow-y-auto bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex flex-col items-center border border-gray-300 rounded-s-sm">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                    <div className="bg-white px-4 py-6">
                      <div className="flex items-start gap-x-4">
                        <div className="mt-2 bg-indigo-50 p-2 rounded">
                          <Image width={30} height={30} src={education} alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                          <h1 className="text-base font-bold">Education</h1>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Blog
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Ebook, Guides & More
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Free Courses & Certifications
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Inbound Methodology
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            INBOUND 2023
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-start gap-x-4 mt-8">
                        <div className="mt-2 bg-indigo-50 p-2 rounded">
                          <Image width={30} height={30} src={message} alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                          <h1 className="text-base font-bold">Why Good App</h1>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Case Studies
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Why Choose Good App
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-4 py-6">
                      <div className="flex items-start gap-x-4">
                        <div className="mt-2 bg-indigo-50 p-2 rounded">
                          <Image width={30} height={30} src={service} alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                          <h1 className="text-base font-bold">Services</h1>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Onboarding & Consulting Services
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Hire a Service Provider
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-start gap-x-4  mt-8">
                        <div className="mt-2 bg-indigo-50 p-2 rounded">
                          <Image width={30} height={30} src={team} alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                          <h1 className="text-base font-bold">User Resources</h1>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Partner Programs
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Developer Tools
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            Community
                          </Link>
                          <Link href="" className="w-full text-sm font-normal hover:font-medium hover:underline hover:text-indigo-600 py-1">
                            HubSpot Ecosystem
                          </Link>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Popover.Group>
          <div className="hidden lg:flex lg:gap-x-3">
            <Link
              href="#"
              className={`text-sm font-semibold bg-indigo-600 text-white border border-indigo-600 py-1.5 px-6 rounded-sm hover:opacity-60`}
            >
              { path === "/pricing" ? "Bắt Đầu" : "Xem demo"}
            </Link>
            <Link
              href="#"
              className={`text-sm font-semibold bg-white text-indigo-600 py-1.5 px-6 rounded-sm border border-indigo-600 hover:bg-indigo-100 ${path === "/pricing" && "hidden"}`}
            >
              Bắt đầu
            </Link>
          </div>
        </nav>
        {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
      </header></>
  );
}
