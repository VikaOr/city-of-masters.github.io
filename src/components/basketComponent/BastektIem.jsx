import React from 'react'
import { useState } from 'react';
import './basket_item.css'


export default function BastektIem({img, priceItem, name}) {
    
    const [count, setClick] = useState(1);
    function pluseCount() {
        setClick(count + 1)
    };
    function minuseCount() {
        (count>1 ? setClick(count - 1): setClick(1))   
    };
    let price = priceItem;
        price=count*price;
        price=price.toFixed(2);
    
  return (
    <div>
      <div className="container">
        <img src={img} alt="" className="pikt" />
        <div className="item-name">{name}</div>
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
