import {useState} from 'react';

import './Modal_window.css';
import './../Main_page/Main_page.css';
import close_img from './../../pict/close-item.svg';

function ModalWindow ({isOpen, onClick}) {
    
    return (
        <>

        
            <div className={`modal ${isOpen ? "close" : ""}`}>
            <div className="modal-wrap">
                <div className="modal__container">
                    <img className={`close-item ${isOpen ? "close" : ""}`} onClick={onClick} src={close_img} alt="" />
                    <div className="form">
                        <div className="form__title">
                            Заказать замер
                        </div>
                        <div className="form__inputs">
                            <input className='user-name' type="text" value="Ваше имя"/>
                            <input className='user-phone-number' type='text' value="Номер телефона"/>
                            <input className='user-phone-number' type='text' value="Ваш адрес"/>
                            <div className="form__checkbox">
                                <input className='checkbox' type="checkbox" />
                                <div className="form__checkbox--text">Вы подтверждаете, что даете согласие на обработку персональных данных</div>
                            </div>
                        </div>
                        
                        <button className="prev-btn">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default ModalWindow;