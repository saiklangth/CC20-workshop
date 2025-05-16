import { useEffect, useState } from 'react'

import Header from './components/Header'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  // cart = {id, product, price, title, quantity}

  const fetchProducts = () => {
    fetch('http://localhost:8000/products')
      .then(resp => resp.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  // ถ้า add สินค้าให้เพิ่มจำนวนแทน
  const addToCart = (id, title, price) => {
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    let newItem
    if (idx === -1) {
      newItem = { id: id, title: title, price: price, quantity: 1 }
      setCarts([...carts, newItem])
    } else {
      const cloneCart = [...carts]
      cloneCart[idx].quantity += 1
      setCarts(cloneCart)
    }
    // let newItem = { id: id, title: title, price: price, quantity: 1}
    // setCarts([...carts, newItem])
  }

  const decQuantity = (id) => {
    // ลดจำนวน Quantity ของ item ใน cart
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    const cloneCart = [...carts]
    if(cloneCart[idx].quantity > 1) {
      cloneCart[idx].quantity -= 1
    } else {
      cloneCart.splice(idx,1)
    }
    setCarts(cloneCart)
  }

  // const incQuantity = (id) => {
  //   let idx = carts.findIndex(el => el.id === id) // not found = -1
  //   const cloneCart = [...carts]
  //   cloneCart[idx].quantity += 1
  //   setCarts(cloneCart)
  // }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header itemCount={carts.length} />
      <div className='flex flex-1'>
        <ProductList products={products} addToCart={addToCart} />
        <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart}/>
      </div>
    </div>
  )
}

export default App
