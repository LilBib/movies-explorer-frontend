import React from "react";
import PortfolioLink from "../PortfolioLink.js/PortfolioLink";
import Underline from "../Underline/Underline";
import './AboutMe.css';

function AboutMe () {
    return (
        <section className="AboutMe">
            <div className="aboutme__container">
                <h2 className="main__section-title">Студент</h2>
                <Underline />
                <div className="aboutme__main-info-container">
                    <div className="aboutme__text-container">
                        <h3 className="aboutme__name">Владимир</h3>
                        <p className="aboutme__age">Фронтенд-разработчик, 22 года</p>
                        <p className="aboutme__description">Я родился и вырос в Краснодаре, в 2018 году поступил в МГТУ им Н.Э. Баумана на направление Прикладная механика факультета робототехники и комплексной автоматизации. В программирование влюбился еще на первом курсе, когда у нас шла дисциплина по C/C++, по которой я один из немногих получил автоматом 5. В начале 4го курса задумался о смене специализации, так как не видел перспектив в развитии по своему направлению. Недавно закончил Практикум, начал заниматься фрилансом, а также активно ищу постоянную работу в роли фронтенд разработчика, и именно с разработкой интерфейсов я и хочу связать свою жизнь. В свободное от программирования и учебы время занимаюсь спортом, играю на гитаре, учусь игре на барабанах</p>
                        <a className="aboutme__github" href="https://github.com/LilBib">Github</a>
                    </div>
                    <img src="https://sun9-west.userapi.com/sun9-14/s/v1/ig2/AvAc6i04Kg9ZJW3uOr42HLavY-o-HNGTxvSYbcTg11F9TK5yXkvYXyYFOpSk9B1Iyv_jCggF0QuuT1tfGPYM5bnt.jpg?size=209x221&quality=96&type=album" alt="фото студента" className="aboutme__photo"/>
                </div>
                <p className="aboutme__portfolio">Портфолио</p>
                <ul className="aboutme__portfolio-list">
                    <PortfolioLink name='Статичный сайт' link='https://lilbib.github.io/how-to-learn/' />
                    <PortfolioLink name='Адаптивный сайт' link='https://lilbib.github.io/russian-travel/' />
                    <PortfolioLink name='Одностраничное приложение' link='https://vladimirmisakyan.mesto.project.nomoredomains.sbs/' />
                </ul>
            </div>
        </section>
    )
}

export default AboutMe;