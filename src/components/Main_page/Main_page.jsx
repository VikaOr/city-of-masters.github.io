import './../Main_page/Main_page.css'
import './../../../src/index.css'
import Count_price from './../Count_price/Count_price.jsx';
import Modal_form from './../Modal_window/Modal_window.jsx';
import Prices_examp from './../Prices_examples/Prices_examp.jsx';
import MainSlider from './../Main_slider/Main_slider.jsx';
import Services from './../Services/Services.js';
import {useState} from 'react';




function Main_page () {
    const [isModalOpen, setOpen] = useState();
    return (
        <>
        <Modal_form />
        <div className="main-page">
        
            <div className="container">
                <div className="main-page__content">
                    <section className='section'>
                    <div className="section__title">Город Мастеров<span></span></div>
                    <MainSlider />
                    </section>
                    
                    <Prices_examp />
                    <Count_price />
                    <Services/>
                </div>
                    
            </div>
        </div>
            
    </>
    )
}

export default Main_page