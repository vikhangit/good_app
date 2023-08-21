import React from 'react'
import HeroSoft from "./elements/hero_soft"
import TrustedBy from './elements/trusted_by';
import Featured from './elements/featured';
import EasyUse from './elements/easy_use';
import GrowWithYou from './elements/grow_with_you';
import CustomerProduct from './elements/customer';
import FAQs from './elements/faqs';
import Migrate from './elements/migrate';
import ButWait from './elements/ButWait';

export default function Website() {
  return (
      <div>
      <HeroSoft />
      <TrustedBy />
      <Featured />
      <EasyUse /> 
      <Migrate />
      <ButWait />
      <GrowWithYou />
      {/* <CustomerProduct /> */}
      <FAQs />
    </div>
  )
}
