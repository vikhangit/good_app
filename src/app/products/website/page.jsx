import React from 'react'
import HeroWebsite from './elements/hero_website'
import TrustedBy from './elements/trusted_by';
import Featured from './elements/featured';
import EasyUse from './elements/easy_use';
import GrowWithYou from './elements/grow_with_you';
import CustomerProduct from './elements/customer';
import FAQs from './elements/faqs';

export default function Website() {
  return (
      <div>
      <HeroWebsite />
      <TrustedBy />
      <Featured />
      <EasyUse /> 
      <GrowWithYou />
      <CustomerProduct />
      <FAQs />
    </div>
  )
}
