import React from 'react'
import './product2.css'

export default function Product2({img, title, text}) {
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
            <button className="prev-btn">В корзину</button>
          </div>
          
        </div>
      </div>
  )
}
