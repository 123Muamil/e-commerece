import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import Sidebar from '../pages/sidebar'
const Allproducts = ({allproducts: {image, name, slug, tags, price}}) => {  
  return (
    
        <div >
        
          <Link href={`/product/${slug.current}`} className='Allproducts-container'>
            <div className='Allproduct-card'>
              <img src={urlFor(image && image[0])} width={250} height={270} />
              <p className='Allproduct-name'>{name}</p>
              <p className='Allproduct-tags'>{tags}</p>
              <p className='Allproduct-price'>${price}</p>
            </div>
          </Link>
        </div>
      )
}

export default Allproducts