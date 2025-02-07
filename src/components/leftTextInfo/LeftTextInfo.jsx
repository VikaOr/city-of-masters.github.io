import React from 'react'
import './leftTextInfo.css'

export default function LeftTextInfo({ title, text, img, onClickF }) {
    return (
        <div>
            <div className="content--wrap">
                <div className="itemContent">
                    <div className="textArea">
                        <div className="text--title">{title}</div>
                        <div className="text--content">{text}</div>
                        <div className="item__btn">
                            <button className="seconary-btn">Узнать больше</button>
                            <button onClick={onClickF} className="prev-btn">Заказать замер</button>
                        </div>
                    </div>
                    <div className="itemContent__img--wrap">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
