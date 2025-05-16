import React, {useState} from 'react'

function ProductCard(props) {
  const { addToCart, productItem : {id, category, description, title, image, price, rating}} = props
  const [showDesc, setShowDesc] = useState(false)
  return (
    <div className="card bg-base-100 w-70 shadow-sm pt-4">
      <figure className='h-40 w-2/3 mx-auto'>
        <img className='h-full w-full object-contain'
          src={image}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <p className={`cursor-pointer ${showDesc ? '' : 'line-clamp-2'}`}
          onClick={()=>setShowDesc(pre=>!pre)}
        >{description}</p>
        <p>{price} $</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" 
            onClick={()=>addToCart(id, title, price)}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard