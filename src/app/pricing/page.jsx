"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import TabContent from './element/tab-content';
import Support from './element/support';

export default function Pricing() {
  const [hidden, setHidden] = useState(false);
  React.useEffect(() => {
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
    <div className="pt-10 relative">
      <TabContent hidden={hidden}/>
    </div>
  )
}
