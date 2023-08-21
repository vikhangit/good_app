
import Link from 'next/link'
import React, {useState} from 'react'
import TabContent from './element/tab-content';
import Support from './element/support';
export const metadata = {
  title: "GOOD APP",
  description: "This is the home page",
};

export default function Pricing() {
  return (
    <div className="pt-10 relative">
      <TabContent/>
    </div>
  )
}
