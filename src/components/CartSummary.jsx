import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const { carts } = props
  return (
    <div className='w-1/3'>
      <h2 className='text-2xl py-2'>Cart Item :</h2>
      <div className='flex flex-col gap-2'>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <pre>{JSON.stringify(carts,null,2)}</pre>
    </div>
  )
}

export default CartSummary