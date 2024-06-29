import React from 'react'
import { useState } from 'react';
import bascetImg from './../../pict/bascet.svg'
import './product.css'

export default function Product({product, funck}) {
  
  const [isClick, setIsClick] =useState(true)

  function targetElem() {
    funck(product);
    console.log(product.name);
    setIsClick(false);
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
            <button className={`prev-btn ${isClick ? "": "count"}`} onClick={targetElem}>В корзину</button>
          </div>
          
        </div>
      </div>
    
  )
}
