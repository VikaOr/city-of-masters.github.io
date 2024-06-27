import {useState} from 'react';
import InputMask from "react-input-mask";
import './Modal_window.css';
import './../Main_page/Main_page.css';
import close_img from './../../pict/close-item.svg';

function ModalWindow ({isOpen, onClick}) {
    const [imail, setImail] = useState("");
    const [phone, setphone] = useState("");
    const [isTrue, setIsTrue] = useState(true);
    function input () {
        console.log(imail)
        console.log(phone)
    }
    function nameInput () {
        if(imail.length>0 &&imail.length<20) {

            setIsTrue(true)
        }else {
            setIsTrue(false)
        }
    }
    function phoneInput () {
        console.log(imail)
        console.log(phone)
    }

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
                            <input className={`user-name ${!isTrue ? 'mistake': ""}`} 
                             
                                placeholder='Ваше имя'
                                onChange={(e) => {setImail(e.target.value)}}
                                onBlur={nameInput}/>

                            <InputMask 
                                value={phone}
                                mask={'+7\\(999) 999-99-99'}
                                maskChar=" " 
                                className='user-phone-number'
                                placeholder='Номер телефона'
                                onChange={(e) => {setphone(e.target.value)}}>
                                    {()=><input className='user-phone-number'
                                        placeholder='+7(000)000-00-00'
                                        />}
                                </InputMask>
                            <input className='user-phone-number'
                            placeholder='Ваш адресс'/>
                            <div className="form__checkbox">
                                <input className='checkbox' type="checkbox" />
                                <div className="form__checkbox--text">Вы подтверждаете, что даете согласие на обработку персональных данных</div>
                            </div>
                        </div>
                        
                        <button className="prev-btn" type='button' onClick={input}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default ModalWindow;