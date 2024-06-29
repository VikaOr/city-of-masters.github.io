import React from 'react'
import { useState } from 'react';
import BastektIem from '../components/basketComponent/BastektIem';





export default function Bascket({products}) {
    
  let listComponents = [];

  for (let i = 0; i < products.length; i++) {
    listComponents.push(<><BastektIem img={products[i][0]} priceItem={products[i][1]} name = {products[i][2]}/></>)
  }
  console.log(products.length)
  console.log(listComponents.length);
  console.log(listComponents)
  return (
    <div>
        <div className="main-page">
      <div className="container">
        <div className="main-page__content">
        {listComponents}
        
        </div>
        
      </div>
      </div>
    </div>
  )
}
