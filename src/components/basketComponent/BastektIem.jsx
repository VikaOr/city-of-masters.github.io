import React from 'react'
import { useState } from 'react';
import './basket_item.css'


export default function BastektIem({product}) {
    
    const [count, setClick] = useState(1);
    function pluseCount() {
        setClick(count + 1)
    };
    function minuseCount() {
        (count>1 ? setClick(count - 1): setClick(1))   
    };
    let price = product.price;
        price=count*price;
        price=price.toFixed(2);
    
  return (
    <div>
      <div className="container">
        <img src={product.img} alt="" className="pikt" />
        <div className="item-name">{product.name}</div>
        <div className="count-item--wrap">
            <div className="minus" onClick={minuseCount}>-</div>
            <div className="counter">{count}</div>
            <div className="pluse" onClick={pluseCount}>+</div>
        </div>
        <div className="price">{price}</div>
        <div className="close-btn"></div>
      </div>
    </div>
  )
}
