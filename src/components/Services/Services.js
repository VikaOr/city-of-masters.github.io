import React from 'react'
import { useState } from 'react';
import './services.css'
import MainSlider from './../Main_slider/Main_slider.jsx';
import sliderImgFirst from './../../pict/slider_production.png';
import sliderImgSecond from './../../pict/experience.jpg';
import sliderImgThird from './../../pict/lamp.jpg';

import uslugi1 from './../../pict/замерjpg.jpg';
import uslugi2 from './../../pict/подбор_освещения.jpg';
import uslugi3 from './../../pict/монтаж_потолка.png';
import uslugi4 from './../../pict/гарантийное_обслуживание.jpg';
import uslugi5 from './../../pict/ремонт_потолков.jpg';
import uslugi6 from './../../pict/слив_воды.jpg'
import LeftTextInfo from './../leftTextInfo/LeftTextInfo.jsx';
import RightTextInfo from './../rightTextInfo/RightTextInfo.jsx';



const uslugi = [
  {
    number: 1,
    title: "Замер и консультация",
    text: "Работа с заказчиком начинается с визита инженера-консультанта, который осматривает объект, предлагает варианты натяжных потолков, помогает выбрать материалы и светильники, отвечает на вопросы, оценивает стоимость и производит замеры помещений.",
    img: uslugi1,
  },
  {
    number: 2,
    title: "Подбор освещения",
    text: `Мы предоставляем широкий выбор светильников, с которым вы можете ознакомиться в каталоге. 
      А так же вы всегда можете рассчитывать на консультацию наших специалистов`,
    img: uslugi2,
  },
  {
    number: 3,
    title: "Монтаж потолка",
    text: `Мы предоставляем широкий выбор светильников, с которым вы можете ознакомиться в каталоге. 
      А так же вы всегда можете рассчитывать на консультацию наших специалистов`,
    img: uslugi3,
  },
  {
    number: 4,
    title: "Гарантийное обслуживание",
    text: `Мы предоставляем широкий выбор светильников, с которым вы можете ознакомиться в каталоге. 
      А так же вы всегда можете рассчитывать на консультацию наших специалистов`,
    img: uslugi4,
  },
  {
    number: 5,
    title: "Ремонт потолков",
    text: `Мы предоставляем широкий выбор светильников, с которым вы можете ознакомиться в каталоге. 
      А так же вы всегда можете рассчитывать на консультацию наших специалистов`,
    img: uslugi5,
  },
  {
    number: 6,
    title: "Слив воды",
    text: `В случае затопления вы всегда можете рассчитывать на нас. Обратитесь в сервисную службу и мастер быстро устранит последствия и отремонтирует потолок.`,
    img: uslugi6,
  }
]

export default function Services({onClickF}) {



  return (
    <div>
      <section className="section">
        <div className="section__title">Наши услуги<span></span></div>

        <div className='section__content'>
          <LeftTextInfo title={uslugi[0].title}
            text={uslugi[0].text}
            img={uslugi[0].img}
            onClickF={onClickF}
             />
          <RightTextInfo title={uslugi[1].title}
            text={uslugi[1].text}
            img={uslugi[1].img}
            onClickF={onClickF} />
          <LeftTextInfo title={uslugi[2].title}
            text={uslugi[2].text}
            img={uslugi[2].img}
            onClickF={onClickF} />
          <RightTextInfo title={uslugi[3].title}
            text={uslugi[3].text}
            img={uslugi[3].img}
            onClickF={onClickF} />
          <LeftTextInfo title={uslugi[4].title}
            text={uslugi[4].text}
            img={uslugi[4].img}
            onClickF={onClickF} />
          <RightTextInfo title={uslugi[5].title}
            text={uslugi[5].text}
            img={uslugi[5].img}
            onClickF={onClickF} />
        </div>

      </section>
    </div>
  )
}
