import React from "react";
import LoginHead from "../LoginHead/LoginHead";
import LoginInput from "../LoginInput/LoginInput";
import LoginSubmitSection from "../LoginSubmitSection/LoginSubmitSection";
import './Register.css';

function Register (props) {
    return (
        <div className="Register">
            <LoginHead phrase='Добро пожаловать!' onLogoClick={props.onLogoClick} />
            <form name="login-form" className="login__form" noValidate>
                <div>
                    <LoginInput label='Имя' type='text' />
                    <LoginInput label='E-mail' type='text' />
                    <LoginInput label='Пароль' type='password' />
                </div>
                <LoginSubmitSection submitText={'Зарегистрироваться'} questionText={'Уже зарегистрированы?'} linkText={'Войти'} linkRoute={'/signin'} />
            </form>
        </div>
    )
}

export default Register;