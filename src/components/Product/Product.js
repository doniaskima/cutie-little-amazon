import React from 'react'
import "./Product.css";

const Product = ({title,image,price}) => {
  return (
      <div className="product">
          <div className="product-info">
              <p>{title}</p>
              <p className="product-price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>

          </div>
          <img src={image} alt="" />
          <button >Add to BasKet</button>
   </div>
  )
}

export default Product