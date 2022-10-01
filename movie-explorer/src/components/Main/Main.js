import React from 'react'
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main () {
    return (
        <main>
            <Promo />
            <NavTab />
            <div name='about-project' /> 
            <AboutProject />
            <div name='techs' />
            <Techs />
            <div name='about-me' />
            <AboutMe />
        </main>
    )
}

export default Main;