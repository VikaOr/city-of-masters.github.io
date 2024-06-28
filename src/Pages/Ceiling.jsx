import React from 'react'
import './ceiling.css'
import './../components/Product/productCeiling.css'
import Product2 from '../components/Product/Product2'
import { useState } from 'react'

import img1 from './../pict/matovi.jpg'
import img2 from './../pict/сатиновый потолокjpg.jpg'
import img3 from './../pict/тканевый_потолокjpg.jpg'
import img4 from './../pict/сатиновый потолокjpg.jpg'
import img5 from './../pict/сатиновый потолокjpg.jpg'
import img6 from './../pict/сатиновый потолокjpg.jpg'
import img7 from './../pict/сатиновый потолокjpg.jpg'
import Modal_info from '../components/Modal_info/Modal_info'

const product =[
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Матовые натяжные потолки',
      img: img1,
      text: <>
      <p>Матовый натяжной потолок прекрасно подходит для современного оформления жилых помещений. Он отлично маскирует дефекты покрытий, скрывает неровности и придает помещению стильный и уютный вид.</p>
      <p>В ассортименте компании «Город мастеров» представлено множество вариантов фактур и дизайна. Мы поможем в выборе и проведем профессиональный монтаж натяжного потолка для ваших комнат. Выезд мастера для замеров осуществляется бесплатно.</p>
      <div className="title">
      Особенности матовых моделей натяжных потолков
      </div>
      <div className="text">
        <p>Такие варианты особенно ценятся любителями классики и традиционных подходов к оформлению помещений. Матовые натяжные потолки уместно смотрятся в любом помещении: гостиной, спальне, домашнем кабинете, ванной, кухне и прихожей.</p>
      </div>
      </>,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Глянцевые натяжные потолки',
      color: 'bk',
      material: 'plastick',
      img: img2,
      text: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, debitis. Possimus enim doloremque quos, eligendi nobis reiciendis itaque commodi nihil. Unde sunt neque porro, praesentium quos possimus delectus esse magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, est tempora quia quasi eligendi pariatur, mollitia quos voluptatum recusandae officiis atque eos doloremque rem inventore. Totam numquam error velit repudiandae.
      Fugit nemo unde odio tempore modi fugiat commodi quisquam nobis eveniet quasi pariatur, in esse ut mollitia magni sequi expedita consequatur atque impedit porro explicabo quos repellendus, tempora aspernatur. Cumque.
      Eius aut repudiandae sapiente quaerat laboriosam maxime corporis velit tenetur ipsum minima non facere accusantium, officiis dolores atque veritatis. Soluta, fugit molestiae! Fugit adipisci culpa, quisquam reprehenderit dignissimos aliquam repellat.
      Perspiciatis doloribus ratione iusto. Assumenda iure, nihil quam cum dolores quibusdam labore quisquam totam! Ducimus soluta cumque porro deleniti nobis, ratione quis repudiandae suscipit animi esse ut exercitationem, dolores iste.
      Odit provident aperiam quasi iste a! Illo sequi obcaecati porro, nihil alias ad labore ipsa iusto atque? Obcaecati earum, consectetur minus eveniet inventore doloribus expedita odio assumenda, voluptas autem iste.</>,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Сатиновые натяжные потолки',
      color: 'wh',
      material: 'plastick',
      img: img3,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Тканевые натяжные потолки',
      color: 'wh',
      material: 'plastick',
      img: img4
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки с фотопечатью',
      color: 'wh',
      material: 'plastick',
      img: img1,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки Небо',
      color: 'bk',
      material: 'plastick',
      img: img2,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Теневые натяжные потолки',
      color: 'wh',
      material: 'plastick',
      img: img3,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Двухуровневые натяжные потолки',
      color: 'wh',
      material: 'plastick',
      img: img4
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Контурные натяжные потолки',
      color: 'wh',
      material: 'plastick',
      img: img1,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Парящие натяжные потолки',
      color: 'bk',
      material: 'plastick',
      img: img2,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки со скрытым карнизом',
      color: 'wh',
      material: 'plastick',
      img: img3,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки со световыми линиями',
      color: 'wh',
      material: 'plastick',
      img: img4
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки "Звездное небо"',
      color: 'wh',
      material: 'plastick',
      img: img1,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Светодиодные натяжные потолки',
      color: 'bk',
      material: 'plastick',
      img: img2,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки в ванную',
      color: 'wh',
      material: 'plastick',
      img: img3,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки на кухню',
      color: 'wh',
      material: 'plastick',
      img: img4
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки в зал',
      color: 'wh',
      material: 'plastick',
      img: img1,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки в спальню',
      color: 'bk',
      material: 'plastick',
      img: img2,
    },
    {
      category: 'point',
      price: '1.074',
      stroked: true,
      name: 'Натяжные потолки в детскую',
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



export default function Ceiling() {

  const [isOpen, setOpen] = useState(true);
  const [content, setContent] =useState('')

  function openClick() {
    setOpen(!isOpen);
  };

  function chacgeProps(content) {
    setContent(content)
  };

  return (
    <div>
      <Modal_info isOpen={isOpen} onClick={setOpen} props={content}/>
      <div className="main-page">
        <div className="container">
            <div className="grid-container--Ceiling">
            <Product2 
            onClick
            img = {product[0].img} 
            title = {product[0].name} 
            text = {product[0].text}
            openClick={openClick}
            setContent={chacgeProps}/>
            <Product2 
            img = {product[1].img} 
            title = {product[1].name} 
            text = {product[1].text}
            openClick={openClick}
            setContent={chacgeProps}/>
            <Product2 img = {product[2].img} title = {product[2].name} text = {'Некий текст'} openClick={openClick}/>
            <Product2 img = {product[3].img} title = {product[3].name} text = {'Некий текст'} openClick={openClick}/>
            <Product2 img = {product[4].img} title = {product[4].name} text = {'Некий текст'} openClick={openClick}/>
            <Product2 img = {product[5].img} title = {product[5].name} text = {'Некий текст'} openClick={openClick}/>
            <Product2 img = {product[6].img} title = {product[6].name} text = {'Некий текст'} openClick={openClick}/>
            </div>
        </div>
      </div>
    </div>
  )
}
