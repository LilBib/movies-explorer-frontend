import React from "react";
import { Link } from 'react-scroll';
import './NavTab.css';

function NavTab () {
    return(
        <section className="NavTab">
            <Link className="navtab__link" to='about-project' spy={true} smooth={true} offset={50} duration={500}>О проекте</Link>
            <Link className="navtab__link" to='techs' spy={true} smooth={true} offset={50} duration={500}>Технологии</Link>
            <Link className="navtab__link" to='about-me' spy={true} smooth={true} offset={50} duration={500}>Студент</Link>
        </section>
    )
}

export default NavTab;