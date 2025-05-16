import React from 'react'
import CartCount from './CartCount'

function Header(props) {
  const {itemCount} = props
  return (
    <div className='flex justify-between h-17 bg-amber-400'>
      <div>
        Logo, Brand
      </div>
      <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header