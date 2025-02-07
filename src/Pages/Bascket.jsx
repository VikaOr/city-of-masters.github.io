import React from 'react'
import { useState } from 'react';
import './basket.css'
import BastektIem from '../components/basketComponent/BastektIem';





export default function Bascket({products}) {
  // const [isDell, setDell] = useState(true); 
  let listComponents = [];

  for (let i = 0; i < products.length; i++) {
    listComponents.push(<><BastektIem img={products[i][0]} priceItem={products[i][1]} name = {products[i][2]}/></>)
  }
  // function closeBtn() {
  //   setDell(false)
  // }
  return (
    <div>
        <div className="main-page">
      <div className="container">
        <div className="basket-container">
          {listComponents}
        </div>
        
      </div>
      </div>
    </div>
  )
}
