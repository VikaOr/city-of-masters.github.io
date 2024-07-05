import React from 'react'
import './../Prices_examples/prices_examp.css'

export default function Prices_examp() {
  return (
    <div>
      <section className="section">
            <div className="section__title">Цены<span></span></div>
            <div className="section__content--wrap">
                <div className="section__content--grid">
                    <div className="section__content__item">
                        <div className="section__content__item__title">Econom</div>
                        <div className="section__content__item__text-content">
                            <p>Фактурность поверхности слабо выраженная</p>
                            <p>Толщина пленки 180 микрон</p>
                            <p>Прочность при разрыве 20 кг/см²</p>
                            <p>Стандартные потолки небольшой площади</p>
                        </div>
                        <div className="section__content__item__bottom-content"> 248 <span>руб/м²</span></div>
                    </div>
                    <div className="section__content__item">
                        <div className="section__content__item__title">Classic</div>
                        <div className="section__content__item__text-content">
                            <p>Фактурность поверхности слабо выраженная</p>
                            <p>Толщина пленки 180 микрон</p>
                            <p>Прочность при разрыве 20 кг/см²</p>
                            <p>Стандартные потолки небольшой площади</p>                                
                        </div>
                        <div className="section__content__item__bottom-content"> 248 <span>руб/м²</span></div>
                    </div>
                    <div className="section__content__item main">
                        <div className="section__content__item__title">Perfect</div>
                        <div className="section__content__item__text-content">
                            <p>Фактурность поверхности слабо выраженная</p>
                            <p>Толщина пленки 180 микрон</p>
                            <p>Прочность при разрыве 20 кг/см²</p>
                            <p>Стандартные потолки небольшой площади</p>
                        </div>
                        <div className="section__content__item__bottom-content"> 248 <span>руб/м²</span></div>
                    </div>
                    <div className="section__content__item">
                        <div className="section__content__item__title">Premium</div>
                        <div className="section__content__item__text-content">
                            <p>Фактурность поверхности слабо выраженная</p>
                            <p>Толщина пленки 180 микрон</p>
                            <p>Прочность при разрыве 20 кг/см²</p>
                            <p>Стандартные потолки небольшой площади</p>
                        </div>
                        <div className="section__content__item__bottom-content"> 248 <span>руб/м²</span></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
