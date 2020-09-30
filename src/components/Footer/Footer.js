import React from 'react';
import "./Footer.scss";

const Footer = ({links, logos, author, design}) => {

    const footerLogoCollection = logos.map((item, index) => (
        <div className="footer__sponsorsItem" key={index}>
          <img className="footer__sponsorsLogo" src={item} alt="sponsor logo" />
        </div>
      ));
    
      const footerNavCollection = links.map((item, index) => (
        <a className="footer__anchorLinksItem" href={item.link} key={index}>
          {item.title}
        </a>
      ));

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__sponsors">{footerLogoCollection}</div>
                <div className="footer__flexWrapper">
                    <nav className="footer__anchorLinks">{footerNavCollection}</nav>
                    <div className="footer__authors">
                        <p className="footer__authorsText">Сайт был разработан <span className="footer__name"> <a href="https://github.com/Ant-C-tech?tab=repositories" className="author__link">{author}</a></span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="footer__name">{design}</span>.</p>
                    </div>
                </div>
                <p className="footer__rights">2020, Все права защищены</p>
                <div className="footer__siteLinks">
                  <a href="#agreed" className="footer__link">Согласие на обработку персональных данных</a>
                  <a href="#privacy" className="footer__link">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;