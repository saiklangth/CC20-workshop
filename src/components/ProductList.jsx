import { useState } from 'react'
import ProductCart from './ProductCard'

function ProductList(props) {
  const { products, addToCart } = props
  console.log(products[0])
  return (
    <div className='w-2/3 bg-blue-400 ps-2'>
      <h2 className='text-2xl py-2'>Products</h2>
      <div className="flex flex-wrap gap-3">
        {products.map(el => (
          <ProductCart key={el.id} productItem={el} addToCart={addToCart} />
        ))}
      </div>

      {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
    </div>
  )
}

export default ProductList