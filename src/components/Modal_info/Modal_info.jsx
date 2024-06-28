import React from 'react';
import "./modalInfo.css";
import close_img from './../../pict/close-item.svg';

export default function Modal_info({isOpen, onClick, props}) {
  return (
    <div>
      <div className={`modal ${isOpen ? "close" : ""}`}>
            <div className="modal-wrap">
                <div className="modal__container">
                    <img className={`close-item ${isOpen ? "close" : ""}`} onClick={onClick} src={close_img} alt="" />
                    <div className="modal-content">
                        <div className="product-title">{props[1]}</div>
                        <div className="img-container">
                            <img src={props[0]} alt="" />
                        </div>
                        
                        <div className="modal__text-container">{props[2]}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
