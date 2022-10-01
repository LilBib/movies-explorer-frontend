import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileButton from '../../images/profile-button.svg';
import menuIcon from '../../images/menu-icon.svg';
import closeIcon from '../../images/close-icon.svg';
import Navigation from "../Navigation/Navigation";
import SliderNavigation from "../SliderNavigation/SliderNavigation";

function Header (props) {
    const [isMenuOpened, setIsMenuOpened] = React.useState(false);
    const onMenuClick = () => {
        setIsMenuOpened(true);
    }
    const onClose = () => {
        setIsMenuOpened(false);
    }
    const onProfileClickInMenu = () => {
        props.onProfileClick();
        onClose();
    }
    if (props.path==="/" && !props.loggedIn)
        return (
            <header className="header header_place_main">
                <div className="header__container">
                    <img src={logo} alt="Лoготип проекта" className="header__logo" onClick={props.onLogoClick} />
                    <div className='header__login-units'>
                        <Link to='/signup' className="header__signin-button">Регистрация</Link>
                        <Link to='/signin' className="header__login-button">Войти</Link>
                    </div>
                </div>
            </header>
        ) 
    if (props.path==="/" && props.loggedIn && props.appWidth<1280) {
        return (
            <header className="header header_place_main">
                <div className="header__container">
                    <img src={logo} alt="Лoготип проекта" className="header__logo" onClick={props.onLogoClick} />
                    <img src={menuIcon} alt='Кнопка открытия навигационного меню' className="header__menu-button" onClick={onMenuClick} />
                    <div className={ isMenuOpened ? 'header__nav-menu-container header__nav-menu-container_active' : 'header__nav-menu-container' }>
                        <div className={ isMenuOpened ? 'header__nav-menu header__nav-menu_active' : 'header__nav-menu' }>
                            <img src={closeIcon} alt='Кнопка закрытия меню' className="header__menu-close-button" onClick={onClose} />
                            <SliderNavigation path={props.path} onClick={onClose} />
                            <img src={profileButton} alt='Кнопка профиля' className="header__profile-button" onClick={onProfileClickInMenu} />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    if (props.path==="/" && props.loggedIn) {
        return (
            <header className="header header_place_main">
                <div className="header__container">
                    <img src={logo} alt="Лoготип проекта" className="header__logo" onClick={props.onLogoClick} />
                    <Navigation />
                    <img src={profileButton} alt='Кнопка профиля' className="header__profile-button" onClick={props.onProfileClick} />
                </div>
            </header>
        ) 
    }
    if (props.loggedIn && props.appWidth<1280) {
        return (
            <header className="header">
                <div className="header__container">
                    <img src={logo} alt="Лoготип проекта" className="header__logo" onClick={props.onLogoClick} />
                    <img src={menuIcon} alt='Кнопка открытия навигационного меню' className="header__menu-button" onClick={onMenuClick} />
                    <div className={ isMenuOpened ? 'header__nav-menu-container header__nav-menu-container_active' : 'header__nav-menu-container' }>
                        <div className={ isMenuOpened ? 'header__nav-menu header__nav-menu_active' : 'header__nav-menu' }>
                            <img src={closeIcon} alt='Кнопка закрытия меню' className="header__menu-close-button" onClick={onClose} />
                            <SliderNavigation path={props.path} onClick={onClose} />
                            <img src={profileButton} alt='Кнопка профиля' className="header__profile-button" onClick={onProfileClickInMenu} />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    if (props.loggedIn) {
        return (
            <header className="header">
                <div className="header__container">
                    <img src={logo} alt="Лoготип проекта" className="header__logo" onClick={props.onLogoClick} />
                    <Navigation />
                    <img src={profileButton} alt='Кнопка профиля' className="header__profile-button" onClick={props.onProfileClick} />
                </div>
            </header>
        )
    }
}

export default Header;