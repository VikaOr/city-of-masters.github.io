import React from 'react'
import bascetImg from './../../pict/bascet.svg'
import './product.css'

export default function Product({img, title, text, classNames, onClick}) {
  return (
    
      <div className="product-wrap">
        <div className="product__container">
          <div className="img-wrap">
            <img src={img} alt="" className="img__contant" />
            </div>
          <div className="text-container">
            <div className="title">{title}</div>
            <div className="text-content">{text}</div>

          </div>
          <div className="button-section">
            <button className="seconary-btn">Подробнее</button>
            <button className="prev-btn" onClick={onClick}>В корзину</button>
          </div>
          
        </div>
      </div>
    
  )
}
