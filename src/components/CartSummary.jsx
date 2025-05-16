import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const { carts, decQuantity, addToCart } = props
  return (
    <div className='w-1/3'>
      <h2 className='text-2xl py-2'>Cart Item :</h2>
      {carts.length === 0 && <p>Empty cart</p>}
      <div className='flex flex-col gap-2'>
        {carts.map(el => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart} />
        ))}
      </div>
      {/* <pre>{JSON.stringify(carts,null,2)}</pre> */}
    </div>
  )
}

export default CartSummary