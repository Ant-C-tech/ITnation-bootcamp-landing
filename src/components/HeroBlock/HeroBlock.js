import React, { useState} from "react";
import "./HeroBlock.scss";

const HeroBlock = ({ bgImg, title, links, logos }) => {
  const [isMobileMenuShowed, setMobileMenuState] = useState(false);
  const toggleMobileMenu = (newValue) => {
    setMobileMenuState(newValue);
  };

  const logoCollection = logos.map((item, index) => (
    <div className="hero__sponsorsItem" key={index}>
      <img className="hero__sponsorsLogo" src={item} alt="sponsor logo" />
    </div>
  ));

  const navCollection = links.map((item, index) => (
    <a className="hero__anchorLinksItem" href={item.link} key={index}>
      {item.title}
    </a>
  ));

  const bg = {
    background: `linear-gradient(rgba(22, 22, 22, 0.31), rgba(22, 22, 22, 0.31)), url(${bgImg})`,
  };

  return (
    <section className="hero" style={bg}>
      <div className="container">
        <header className="hero__header">
          <div className="hero__sponsors">{logoCollection}</div>
          <nav className="hero__anchorLinks">{navCollection}</nav>
          <div
            className="header__menuBtn"
            onClick={() => toggleMobileMenu(true)}
          >
            <span className="header__menuBtnItem"></span>
            <span className="header__menuBtnItem"></span>
            <span className="header__menuBtnItem"></span>
            <span className="header__menuBtnItem"></span>
          </div>
        </header>

        <h1 className="hero__title">{title}</h1>
        <a className="hero__mainLink" href="#aqIndex">
          Отследить
        </a>
      </div>
      {isMobileMenuShowed && (
        <div className="hero__mobileMenu">
          <header className="hero__header hero__header-mobile">
            <div className="hero__closeButton">
              <div
                className="hero__btnWrapper"
                onClick={() => toggleMobileMenu(false)}
              >
                <span className="hero__btnGraph hero__btnGraph-h"></span>
                <span className="hero__btnGraph hero__btnGraph-v"></span>
              </div>
            </div>
            <div className="header__menuBtn">
              <span className="header__menuBtnItem"></span>
              <span className="header__menuBtnItem"></span>
              <span className="header__menuBtnItem"></span>
              <span className="header__menuBtnItem"></span>
            </div>
          </header>
          <nav className="hero__anchorLinks hero__anchorLinks-mobile" onClick={() => toggleMobileMenu(false)}>{navCollection}</nav>
          <div className="hero__mobileFooter">
            <p className="hero__rights">2020, Все права защищены</p>
            <div className="hero__siteLinks">
              <a href="#agreed" className="hero__link">Согласие на обработку персональных данных</a>
              <a href="#privacy" className="hero__link">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBlock;
