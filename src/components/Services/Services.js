import React from 'react'
import { useState } from 'react';
import './services.css'
import MainSlider from './../Main_slider/Main_slider.jsx';
import sliderImgFirst from './../../pict/slider_production.png';
import sliderImgSecond from './../../pict/experience.jpg';
import sliderImgThird from './../../pict/lamp.jpg';


const pagin = [
  {
      number: 1,
      title: "Замер и консультация",
      img: sliderImgFirst,
  },
  {
      number: 2,
      title: "Подбор освещения",
      img: sliderImgSecond,
  },
  {
      number: 3,
      title: "Монтаж потолка",
      img: sliderImgThird,
  },
  {
      number: 4,
      title: "Гарантийное обслуживание",
      img: sliderImgThird,
  },
  {
      number: 5,
      title: "Ремонт потолков",
      img: sliderImgThird,
  },
  {
      number: 6,
      title: "Слив воды",
      img: sliderImgThird,
  }
];

export default function Services({onClick, nextClick, prevClick, isTransform}) {
  const [isClick, setClick] = useState(0);
  function changeNumber(num) {
    setClick(num)
  }
  function nextSlider(num) {
    if (num>0||num<pagin.length-1) {
      setClick(num+1)
    }else if (num==0) {
      setClick(pagin.length-1)
    }else if (num==pagin.length-1) {
      setClick(0)
    }
  }
  function prevtSlider(num) {
    if (num>0||num<pagin.length-1) {
      setClick(num-1)
    }else if (num==0) {
      setClick(pagin.length-1)
    }else if (num==pagin.length-1) {
      setClick(0)
    }
  }
  return (
    <div>
      <section className="section">
                        <div className="section__title">Наши услуги<span></span></div>
                        
                        <div className="slider__wrap">
                        <div className="paginftion">
                            <div className="pagination__nav">
                                <ul className="pagination__nav__list">
                                    <li className={`pagination__nav__item ${(isClick==0)? "active": ""}`} onClick={()=>changeNumber(0)}>замер<br />и косультация</li>
                                    <li className={`pagination__nav__item ${(isClick==1)? "active": ""}`} onClick={()=>changeNumber(1)}>подбор<br />освещения</li>
                                    <li className={`pagination__nav__item ${(isClick==2)? "active": ""}`} onClick={()=>changeNumber(2)}>монтаж<br />потолка</li>
                                    <li className={`pagination__nav__item ${(isClick==3)? "active": ""}`} onClick={()=>changeNumber(3)}>гарантийное<br />обслуживание</li>
                                    <li className={`pagination__nav__item ${(isClick==4)? "active": ""}`} onClick={()=>changeNumber(4)}>ремонт<br />потолков</li>
                                    <li className={`pagination__nav__item ${(isClick==5)? "active": ""}`} onClick={()=>changeNumber(5)}>слив<br />воды</li>
                                </ul>
                            </div>
                        </div>
                        
                            <MainSlider onClickF={onClick}
                                        onClickS={nextSlider}
                                        onClickPrev = {prevtSlider}
                                        img={pagin[isClick].img}
                                        title={pagin[isClick].title}
                                        isTransform={isTransform}/>
                        </div>
                    </section>
    </div>
  )
}
