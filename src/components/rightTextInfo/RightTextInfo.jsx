import React from 'react'
import './rightTextInfo.css'

export default function RightTextInfo({ title, text, img, onClickF }) {
    return (
        <div>
            <div className="content--wrap">
                <div className="itemContent">
                    <div className="itemContent__img--wrap">
                        <img src={img} alt="" />
                    </div>
                    <div className="textArea">
                        <div className="text--title">{title}</div>
                        <div className="text--content">{text}</div>
                        <div className="item__btn">
                            <button className="seconary-btn">Узнать больше</button>
                            <button onClick={onClickF} className="prev-btn">Заказать замер</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
