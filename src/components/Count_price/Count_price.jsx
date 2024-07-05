import './../Count_price/Count_price.css'
import './../../../src/index.css'

function countPrice ({onClick}) {
    return (
        <section className='section'>
        <div className="section--wrap">
                <div className="section__title">Примерный рассчет стоимости</div>
                <div className="price-section__content">
                    <div className="section__content__item--left">
                        <div className="section__content__item__title">Площадь комнаты</div>
                        <div className="interactive-line--container">
                            <div className="interactive-line__left-text">
                                <span className='counter--left'>0</span>
                                <span className='counter--text'>м²</span>
                            </div>
                            <div className="interactive-line"></div>
                            <div className="interactive-line__right-text">
                                <span className='counter--right'>50</span>
                                <span className='counter--text'>м²</span>
                            </div>
                        </div>
                        <div className="section__content__item__bar">
                            <div className="section__content__item__bar--elem active">Econom</div>
                            <div className="section__content__item__bar--elem">Classic</div>
                            <div className="section__content__item__bar--elem">Perfect</div>
                            <div className="section__content__item__bar--elem">Perfectium</div>
                        </div>
                    </div>
                    <div className="section__content__item--right">
                        <div className="section__content__item--right__title">Всего: <span className='interaction-text'>2740,00</span></div>
                        <div className="section__content__item--right__text">Для точного рассчета стоимости закажите звонок</div>
                        <div className="section__content__item__btn-section">
                            <button className="seconary-btn">Узнать больше</button>
                            <button className="prev-btn" onClick={onClick}>Заказать замер</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
    
}


export default countPrice;