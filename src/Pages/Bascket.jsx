import React from 'react'
import { useState } from 'react';
import BastektIem from '../components/basketComponent/BastektIem';
import img1 from './../pict/sw105wh.jpg';
const product = {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  }

export default function Bascket() {
    let count = 1;
    const [isClick, setClick] = useState(false);
    function pluseCount () {
        if (isClick) {

        }
    }
  return (
    <div>
        <div className="main-page">
      <div className="container">
        <div className="main-page__content">
        <BastektIem product={product} />
        
        </div>
        
      </div>
      </div>
    </div>
  )
}
