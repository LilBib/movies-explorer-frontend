import React from "react";
import UnderlineGrey from "../UnderlineGrey/UnderlineGrey";
import './Footer.css';

function Footer () {
    return (
        <footer className="Footer">
            <div className="footer__container">
                <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <UnderlineGrey />
                <div className="footer__copyright-container">
                    <div className="footer__copyright"></div>
                    <div className="footer__links-container">
                        <a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
                        <a className="footer__link" href="https://github.com/LilBib">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;