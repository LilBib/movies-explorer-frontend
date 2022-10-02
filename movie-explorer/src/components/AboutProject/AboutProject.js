import React from "react";
import Underline from "../Underline/Underline";
import './AboutProject.css'

function AboutProject () {
    return(
        <section className="AboutProject">
            <div className="aboutproject__container">
                <h2 className="main__section-title">О проекте</h2>
                <Underline />
                <div className="aboutproject__info-container">
                    <div className="aboutproject__main-info">
                        <div className="aboutproject__main-info-container">
                            <p className="aboutproject__main-info-text">Дипломный проект включал 5 этапов</p>
                            <p className="aboutproject__main-info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                        </div>
                        <div className="aboutproject__main-info-container">
                            <p className="aboutproject__main-info-text">На выполнение диплома ушло 5 недель</p>
                            <p className="aboutproject__main-info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                        </div>
                    </div>
                    <div className="aboutproject__graph-line">
                        <div className="aboutproject__graph aboutproject__graph_part_front"></div>
                        <div className="aboutproject__graph aboutproject__graph_part_back"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;