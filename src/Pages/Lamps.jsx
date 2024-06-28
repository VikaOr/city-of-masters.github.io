import React from 'react'
import Product from '../components/Product/Product'
import {useState} from 'react';
import './lamps.css';
import './../components/Product/product.css'
import img1 from './../pict/sw105wh.jpg';
import img2 from './../pict/sw105bkjpg.jpg';
import img3 from './../pict/sw65bk.jpg';
import img4 from './../pict/sw65whjpg.jpg';
import Header from '../components/heder/Header';


const orders =[];
const product =[
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW65',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW65',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: '1.074',
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img4
  }
];



export default function Lamps() {
  const [isClick, setClick] = useState(false);
    function setItem() {
        setClick(!isClick);
        console.log('клик')
      };
    function chuseItem () {
      if (isClick) {
        console.log('клик')
      }
    };
  const listProducts = product.map((item) => <Product 
      img = {item.img} 
      title = {item.name} 
      text = {'Некий текст'}
      funck={setItem}/>
)
  return (
    <div>
      <div className="main-page">
      <div className="container">
        <div className="grid-container">
        {listProducts}
        </div>
        
      </div>
      </div>
      
    </div>
  )
  
}


