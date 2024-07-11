import logo from './../../pict/LOGO.svg'
import bascetImg from './../../pict/bascet.svg'
import searchImg from './../../pict/search-normal.svg'
import './../heder/header.css';
import './../Burger_menu/burger.css'
import './../Burger_menu/burger.css'
import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

import MainPage from '../../Pages/Main_page';




function Header () {
    const [isOpen, setOpen] = useState();
    return (

        <>
            <header className="header">
            <div className="container">
                <nav className='navbar'>
                    <div className='nav__left-item'>
                        <Link to="/"><img className='header__logo' src={logo} alt="LOGO" onClick={()=>setOpen(false)} /></Link>
                        <form className="heder__check-box">
                            <select name="" id="" className="heder__check-box__select">
                                <option value="" className="header__checkbox__item">Волгоград</option>
                                <option value="" className="header__checkbox__item">Волжский</option>
                            </select>

                        </form>
                    </div>
                    <ul className={`header__list ${isOpen ? "active" : ""}`}>
                        <li className="header__list__item" onClick={()=>setOpen(false)}><Link to="/" className='header__list__item__link'>Покупателям</Link></li>
                        <li className="header__list__item" onClick={()=>setOpen(false)}><Link to="/ceiling" className='header__list__item__link'>Потолки</Link></li>
                        <li className="header__list__item" onClick={()=>setOpen(false)}><Link to="/prices" className='header__list__item__link'>Цены</Link></li>
                        <li className="header__list__item" onClick={()=>setOpen(false)}><Link to="/lamps" className='header__list__item__link'>Светильники</Link></li>
                        <li className="header__list__item" onClick={()=>setOpen(false)}><Link to="/" className='header__list__item__link'>Услуги</Link></li>
                        <li className="header__list__item" onClick={()=>setOpen(false)}><Link to="/" className='header__list__item__link'>Контакты</Link></li>
                    </ul>
                    
                    <div className="header__icons">
                        <button className={`header__burger-btn ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                            <span className="header__burger-btn__span"></span>
                            <span className="header__burger-btn__span"></span>
                            <span className="header__burger-btn__span"></span>
                        </button>  
                        <img src={searchImg} className='bascet-img' alt="" />
                        <Link to='/basket'><img className='bascet-img' src={bascetImg} alt="корзина" /></Link>
                    </div>
                </nav>
            </div>
            
        </header>
        
        <Outlet />
        </>
        
    )
}

export default Header;