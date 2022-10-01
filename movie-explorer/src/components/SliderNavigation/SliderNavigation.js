import React from "react";
import { Link } from "react-router-dom";
import './SliderNavigation.css'

function SliderNavigation (props) {
    return (
        <div className="SliderNavigation">
            <Link to='/' className={ (props.path === '/') ? 'navigation__link navigation__link_active' : 'navigation__link'} onClick={props.onClick}>Главная</Link>
            <Link to='/movies' className={ (props.path === '/movies') ? 'navigation__link navigation__link_active' : 'navigation__link'} onClick={props.onClick}>Фильмы</Link>
            <Link to='/saved-movies' className={ (props.path === '/saved-movies') ? 'navigation__link navigation__link_active' : 'navigation__link'} onClick={props.onClick}>Сохранённые фильмы</Link>
        </div>
    )
}

export default SliderNavigation;