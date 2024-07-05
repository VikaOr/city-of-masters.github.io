import './../../src/index.css'

import React from 'react'
import Count_price from './../components/Count_price/Count_price.jsx';
import Prices_examp from '../components/Prices_examples/Prices_examp.jsx';
import Footer from '../components/footer/Footer.jsx';


export default function Prices() {
  return (
    <div>
      <div className="main-page">
        <div className="container">
          <div className="main-page__content">
            <Prices_examp />
            <Count_price />
          
          </div>
          <Footer/>
        </div>
      </div>
      
    </div>
  )
}
