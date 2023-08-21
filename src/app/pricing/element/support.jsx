import Image from 'next/image';
import React from 'react'

export default function Support() {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-semibold text-center mb-8">
        {"We're"} here for you
      </h1>
      <div className="grid grid-cols-3 gap-x-8">
        <div className="text-center">
          <Image
            alt=""
            src="/images/pricing/support/247Support.webp"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h2 className="text-sm font-semibold my-4">24/7 Support</h2>
          <p className="text-sm">
            Looking for expert advice on how to best use HubSpot? Our
            award-winning customer support and service teams are here to help.
          </p>
        </div>
        <div className="text-center">
          <Image
            alt=""
            src="/images/pricing/support/tailoredOnboarding.webp"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h2 className="text-sm font-semibold my-4">Tailored Onboarding</h2>
          <p className="text-sm">
            Get set up for success with guidance from a certified solutions
            partner or a dedicated onboarding specialist. Your customized
            onboarding plan will help you get up to speed with Good App software
            in no time.
          </p>
        </div>
        <div className="text-center">
          <Image
            alt=""
            src="/images/pricing/support/freeOnlineTraining.webp"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h2 className="text-sm font-semibold my-4">Free Online Training</h2>
          <p className="text-sm">
            From quick, practical courses to comprehensive certifications,
            HubSpot Academy can teach you everything you need to know about the
            most sought-after business skills.
          </p>
        </div>
      </div>
    </div>
  );
}
