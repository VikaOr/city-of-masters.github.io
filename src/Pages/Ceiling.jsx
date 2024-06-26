import React from 'react'
import './ceiling.css'
import Header from '../components/heder/Header'
import Product2 from '../components/Product/Product2'
import img1 from './../pict/matovi.jpg'
import img2 from './../pict/сатиновый потолокjpg.jpg'
import img3 from './../pict/тканевый_потолокjpg.jpg'
import img4 from './../pict/сатиновый потолокjpg.jpg'
import img5 from './../pict/сатиновый потолокjpg.jpg'
import img6 from './../pict/сатиновый потолокjpg.jpg'
import img7 from './../pict/сатиновый потолокjpg.jpg'

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

const listProducts = product.map((item) => <Product2 img = {item.img} title = {item.name} text = {'Некий текст'}/>
)

export default function Ceiling() {
  return (
    <div>
      <div className="main-page">
        <div className="container">
            <div className="grid-container">{listProducts}</div>
        </div>
      </div>
    </div>
  )
}
