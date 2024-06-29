import './../../src/index.css'
import Count_price from './../components/Count_price/Count_price.jsx';
import Modal_form from './../components/Modal_window/Modal_window.jsx';
import Prices_examp from './../components/Prices_examples/Prices_examp.jsx';
import MainSlider from './../components/Main_slider/Main_slider.jsx';
import Services from './../components//Services/Services.js';
import Header from './../components/heder/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import { useState } from 'react';

import sliderImgFirst from './../pict/slider_production.png';
import sliderImgSecond from './../pict/experience.jpg';
import sliderImgThird from './../pict/lamp.jpg';

const slides = [
    {
        number: 1,
        title: "Многолетний опыт работы",
        img: sliderImgFirst,
    },
    {
        number: 2,
        title: "Широкий выбор светильников в наличии",
        img: sliderImgSecond,
    },
    {
        number: 3,
        title: "Собственное производство",
        img: sliderImgThird,
    }
];

function Main_page () {
    const [isOpen, setOpen] = useState(true);
    const [isClick, setClick] = useState(false);
    function handleClick() {
        setOpen(!isOpen);
      };
    const [next, setnext] = useState(0);
    function nextClick() {
        if (next ==slides.length-1) {
            setnext(0)
            setClick(!isClick)
        } else {
            setnext(next + 1);
            setClick(!isClick)
        }
        
    }
    function prevClick() {
        if (next ==0) {
            setnext(slides.length-1);
            
        } else {
            setnext(next - 1);
        }
        
    }
    return (
        <>
        <Modal_form isOpen = {isOpen} onClick={handleClick}/>
        <div className="main-page">
        
            <div className="container">
                <div className="main-page__content">
                    <section className='section'>
                    <div className="section__title">Город Мастеров<span></span></div>
                    <MainSlider onClickF={handleClick}
                    onClickS={nextClick}
                    onClickPrev = {prevClick}
                    img={slides[next].img}
                    title={slides[next].title}
                    isTransform={isClick}/>
                    </section>
                    
                    <Prices_examp />
                    <Count_price onClick={handleClick}/>
                    <Services onClickF={handleClick}
                                nextClick={nextClick}
                                prevClick = {prevClick}
                                img={slides[0].img}
                                title={slides[0].title}
                                isTransform={isClick}/>
                </div>
                    
            </div>
            <Footer />
        </div>
        
    </>
    )
}

export default Main_page;