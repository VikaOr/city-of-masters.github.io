import './../Main_slider/Main_slider.css'
import prevImg from './../../pict/prev-btn.svg'
import nextImg from './../../pict/nezt-btn.svg'


function MainSlider ({onClickF, onClickS, onClickPrev, img, title, isTransform}) {
    return (
        <section className="section">
                        
                        <div className="slider__wrap">
                            <div className="slider__container">
                                <div className="slider__item">
                                    <div className="slider__item__text-content">
                                        <div className="slider__item__title--wrap">
                                        <div className="slider__item__title">{title}</div>
                                        </div>
                                        
                                        <div className="slider__item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium praesentium vel tempora magni quas minima blanditiis quam, obcaecati quae dolor veniam similique repellat, debitis adipisci ad et. Reprehenderit, quae?</div>
                                        <div className="slider__item__btn">
                                            <button className="seconary-btn">Узнать больше</button>
                                            <button onClick={onClickF} className="prev-btn">Заказать замер</button>
                                        </div>
                                    </div>
                                    <div className="slider__item__img--wrap">
                                        <img className="slider__item__img" src={img} alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="btn-section">
                                <img src={prevImg} alt="" className="prev-slider-btn" onClick={onClickPrev}/>
                                <img src={nextImg} alt="" className="next-slider-btn" onClick={onClickS}/>
                            </div>
                        </div>
                    </section>
    )
}



export default MainSlider;