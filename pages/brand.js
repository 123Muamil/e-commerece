import React from 'react'
import SecondSection from '../components/SecondSection'
import Link from 'next/link'
function BrandPage() {
  return (
    <div>
      <div className='brand-container'>
        <div className='brand-info'>
          <h1 className='brand-name'>NEW PRODUCTS INTERIOR</h1>
          <p className='brand-description'>
            At tempor augue quis mauris purus <br/> enim et Lorem metus. Wisi vitae <br/> Donec In eget ut lorem
          </p>
          <Link href='/products'>
          <button className='purchase-button'>Purchase Now</button>
                </Link>
         
        </div>
      </div>
     <SecondSection/>
    </div>
  )
}

export default BrandPage
