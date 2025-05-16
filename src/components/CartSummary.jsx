import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const {carts} = props
  return (
    <div>
      <h2>Cart Item</h2>
      <CartItem />
    </div>
  )
}

export default CartSummary