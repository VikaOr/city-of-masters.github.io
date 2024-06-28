import React from 'react'
import './productCeiling.css'

export default function Product2({img, title, text, openClick, setContent}) {

  

function propsTarget() {
  openClick();
  setContent([img, title, text]);
}

  return (
<div className="product-wrap--ceiling">
        <div className="product__container--ceiling">
          <div className="img-wrap--ceiling">
            <img src={img} alt="" className="img__contant--ceiling" />
            </div>
          <div className="text-container">
            <div className="title">{title}</div>

          </div>
          <div className="button-section">
            <button className="seconary-btn" onClick={propsTarget}>Подробнее</button>
          </div>
          
        </div>
      </div>
  )
}
