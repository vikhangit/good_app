import React from 'react'
import HeroApp from './elements/hero_app'
import TrustedBy from './elements/trusted_by';
import Featured from './elements/featured';
import EasyUse from './elements/easy_use';
import GrowWithYou from './elements/grow_with_you';
import CustomerProduct from './elements/customer';
import FAQs from './elements/faqs';

export default function Website() {
  return (
      <div>
      <HeroApp />
      <TrustedBy />
      <Featured />
      <EasyUse /> 
      <GrowWithYou />
      <CustomerProduct />
      <FAQs />
    </div>
  )
}
