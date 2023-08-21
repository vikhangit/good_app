import React from 'react'
import Heading from './content/intro'
import Product from './content/product';
import CMO from './content/cmo';

export default function About() {
  return (
    <div className='bg-gray-100 px-24 pt-20 pb-16'>
      <Heading />
      <Product />
      <CMO />
    </div>
  )
}
