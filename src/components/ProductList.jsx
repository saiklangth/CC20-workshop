import {useState} from 'react'
import ProductCart from './ProductCard'

function ProductList(props) {
  const {products} = props
  return (
    <div className='w-2/3 bg-blue-400'>
      <h2>Product List</h2>
      <ProductCart />
    </div>
  )
}

export default ProductList