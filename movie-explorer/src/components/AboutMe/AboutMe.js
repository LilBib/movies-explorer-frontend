import React from "react";
import PortfolioLink from "../PortfolioLink.js/PortfolioLink";
import Underline from "../Underline/Underline";
import './AboutMe.css';

function AboutMe () {
    return (
        <div className="AboutMe">
            <div className="aboutme__container">
                <h2 className="main__section-title">Студент</h2>
                <Underline />
                <div className="aboutme__main-info-container">
                    <div className="aboutme__text-container">
                        <h3 className="aboutme__name">Владимир</h3>
                        <p className="aboutme__age">Фронтенд-разработчик, 22 года</p>
                        <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a className="aboutme__github" href="https://github.com/LilBib">Github</a>
                    </div>
                    <img src="https://sun9-west.userapi.com/sun9-14/s/v1/ig2/AvAc6i04Kg9ZJW3uOr42HLavY-o-HNGTxvSYbcTg11F9TK5yXkvYXyYFOpSk9B1Iyv_jCggF0QuuT1tfGPYM5bnt.jpg?size=209x221&quality=96&type=album" alt="фото студента" className="aboutme__photo"/>
                </div>
                <p className="aboutme__portfolio">Портфолио</p>
                <div className="aboutme__portfolio-container">
                    <PortfolioLink name='Статичный сайт' link='https://lilbib.github.io/how-to-learn/' />
                    <PortfolioLink name='Адаптивный сайт' link='https://lilbib.github.io/russian-travel/' />
                    <PortfolioLink name='Одностраничное приложение' link='https://vladimirmisakyan.mesto.project.nomoredomains.sbs/' />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;