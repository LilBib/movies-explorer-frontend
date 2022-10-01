import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation () {
    return (
        <div className="Navigation">
            <Link to='/movies' className="navigation__link">Фильмы</Link>
            <Link to='/saved-movies' className="navigation__link">Сохранённые фильмы</Link>
        </div>
    )
}

export default Navigation;