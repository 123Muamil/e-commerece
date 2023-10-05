// products.jsx
import React from 'react'
import { client } from '../lib/client'
import { AllProducts } from '../components'
import Sidebar from './sidebar'

const products = ({ Allproducts }) => {
  return (
    <div className='page-container'>
      <div>
      <Sidebar />
      </div>
      <div className='Allproducts-container'>
        {Allproducts?.map((prod) => (
          <AllProducts key={prod._id} allproducts={prod} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const Allproducts = await client.fetch(query)

  return {
    props: { Allproducts },
  }
}

export default products
