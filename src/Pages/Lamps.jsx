import React from 'react'
import Product from '../components/Product/Product'
import Footer from '../components/footer/Footer';
import {useState} from 'react';
import './lamps.css';
import './../../src/index.css'
import img1 from './../pict/sw105wh.jpg';
import img2 from './../pict/sw105bkjpg.jpg';
import img3 from './../pict/sw65bk.jpg';
import img4 from './../pict/sw65whjpg.jpg';



const orders =[];
const product =[
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW65',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW65',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img3,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img4
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'wh',
    material: 'plastick',
    img: img1,
  },
  {
    category: 'point',
    price: 1.074,
    stroked: true,
    name: 'SW105',
    color: 'bk',
    material: 'plastick',
    img: img2,
  },
  {
    category: 'point',
    price: 1.074,
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



export default function Lamps({chuseElemFunc}) {
  const [isClick, setClick] = useState(false);
  const [chuseElem, setElem] = useState();
  function chuseItem (chuseElem) {
    setElem(chuseElem);
    orders.push(chuseElem);
    console.log(orders.length);
    console.log(orders);
    let elem =orders[0];
    console.log(elem["color"]);
    chuseElemFunc(orders);
  };


  
  return (
    <div>
      <div className="main-page">
        <div className="container">
          <div className="grid-container">
          <Product
        product={product[0]}
        funck={chuseItem} />
        <Product
        product={product[1]}
        funck={chuseItem} />
        <Product
        product={product[2]}
        funck={chuseItem} />
        <Product
        product={product[3]}
        funck={chuseItem} />
        <Product
        product={product[4]}
        funck={chuseItem} />
        <Product
        product={product[5]}
        funck={chuseItem} />
        <Product
        product={product[6]}
        funck={chuseItem} />
        <Product
        product={product[0]}
        funck={chuseItem} />
        <Product
        product={product[0]}
        funck={chuseItem} />
        <Product
        product={product[0]}
        funck={chuseItem} />

          </div>
          
        </div>
      <Footer/>
      </div>
      
    </div>
  )
  
}


