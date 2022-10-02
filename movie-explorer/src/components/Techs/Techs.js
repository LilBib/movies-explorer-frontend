import React from "react";
import Underline from "../Underline/Underline";
import './Techs.css';

function Techs () {
    return (
        <section className="Techs">
            <div className="techs__container">
                <h2 className="main__section-title">Технологии</h2>
                <Underline />
                <div className="techs__info-container">
                    <h3 className="techs__info-headline">7 технологий</h3>
                    <p className="techs__main-info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <div className="techs__icons-container">
                        <div className="techs__icon">
                            <p className="techs__icon-text">HTML</p>
                        </div>
                        <div className="techs__icon">
                            <p className="techs__icon-text">CSS</p>
                        </div>
                        <div className="techs__icon">
                            <p className="techs__icon-text">JS</p>
                        </div>
                        <div className="techs__icon">
                            <p className="techs__icon-text">React</p>
                        </div>
                        <div className="techs__icon">
                            <p className="techs__icon-text">Git</p>
                        </div>
                        <div className="techs__icon">
                            <p className="techs__icon-text">Express.js</p>
                        </div>
                        <div className="techs__icon">
                            <p className="techs__icon-text">mongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;