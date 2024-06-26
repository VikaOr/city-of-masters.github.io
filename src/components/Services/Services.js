import React from 'react'
import './services.css'
import MainSlider from './../Main_slider/Main_slider.jsx';

export default function Services({onClick}) {
  return (
    <div>
      <section className="section">
                        <div className="section__title">Наши услуги<span></span></div>
                        
                        <div className="slider__wrap">
                        <div className="paginftion">
                            <div className="pagination__nav">
                                <ul className="pagination__nav__list">
                                    <li className="pagination__nav__item active">замер<br />и косультация</li>
                                    <li className="pagination__nav__item">подбор<br />освещения</li>
                                    <li className="pagination__nav__item">монтаж<br />потолка</li>
                                    <li className="pagination__nav__item">гарантийное<br />обслуживание</li>
                                    <li className="pagination__nav__item">ремонт<br />потолков</li>
                                    <li className="pagination__nav__item">слив<br />воды</li>
                                </ul>
                            </div>
                        </div>
                        
                            <MainSlider onClick={onClick}/>
                        </div>
                    </section>
    </div>
  )
}
