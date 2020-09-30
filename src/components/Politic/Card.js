import React, { useState } from "react";
import "./Card.scss";


const Card = ({ item }) => {
  const [isToolTipShowed, setToolTipState] = useState(false);
  const toggleMobileToolTip = (newValue) => {
    setToolTipState(newValue);
  };


  return (
    <div
      className="card"
      
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <img className="card__img" src={item.img} alt="card background" />
      <div className="card__desktopBg"></div>
      <div className="card__titleBox" onClick={() => toggleMobileToolTip(true)}>
        {!isToolTipShowed && <p className="card__title">{item.title}</p>}
      </div>
      <div className="card__preventPressButton"></div>
      {isToolTipShowed && (
        <div className="card__mobileToolTip">
          <div className="btnContainer">
            <div className="modalWindow__closeButton">
              <div className="modalWindow__btnWrapper" onClick = {() => toggleMobileToolTip(false)}>
                <span className="modalWindow__btnGraph modalWindow__btnGraph-h"></span>
                <span className="modalWindow__btnGraph modalWindow__btnGraph-v"></span>
              </div>
            </div>
          </div>
          <p className="card__title">{item.title}</p>
          <p className="card__subtitle">{item.content}</p>
        </div>
      )}
      <div className="card__tooltipWrrapper">
        <div className="card__tooltipFrame">
          <div className="card__tooltipBg">
            <div className="card__tooltipСloseWrapper"></div>
          </div>
          <p className="card__text">{item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
