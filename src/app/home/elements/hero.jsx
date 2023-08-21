import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/images/home/hero.webp"
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex py-24 bg-amber-50">
      <div className="basis-1/2 lg:mx-24">
        <h1 className="text-6xl font-medium leading-tight text-gray-900 sm:text-6xl">
          Nền tảng thiết kế Mobile App
        </h1>
        <p className="mt-6 text-base font-light leading-8 text-gray-900 text-justify">
          Software thats powerful, not overpowering. Seamlessly connect your data, teams, and customers on one CRM platform that grows with your business.
        </p>
        <div className="mt-10 flex gap-x-5">
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
      <div className="basis-1/2">
        <Image alt="" src="/images/home/hero.webp" width={0} height={0} sizes="100vw" style={{
          width: "100%",
          height: "100%",
        }}/>
      </div>
    </div>
  );
}
