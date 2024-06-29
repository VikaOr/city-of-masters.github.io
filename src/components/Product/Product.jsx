import React from 'react'
import bascetImg from './../../pict/bascet.svg'
import './product.css'

export default function Product({product, funck}) {

  function targetElem() {
    funck(product);
    console.log(product.name)
  };

  return (
    
      <div className="product-wrap">
        <div className="product__container">
          <div className="img--wrap">
            <img src={product.img} alt="" className="img__contant" />
            </div>
          <div className="text-container">
            <div className="title">{product.name}</div>
            <div className="text-content">{product.text}</div>

          </div>
          <div className="button-section">
            <button className="seconary-btn">Подробнее</button>
            <button className="prev-btn" onClick={targetElem}>В корзину</button>
          </div>
          
        </div>
      </div>
    
  )
}
