import React from "react";
import LoginHead from "../LoginHead/LoginHead";
import LoginInput from "../LoginInput/LoginInput";
import LoginSubmitSection from "../LoginSubmitSection/LoginSubmitSection";
import './Login.css';

function Login (props) {
    return (
        <div className="Login">
            <LoginHead phrase='Рады видеть!' onLogoClick={props.onLogoClick} />
            <form name="login-form" className="login__form" noValidate>
                <div>
                    <LoginInput label='E-mail' type='text' />
                    <LoginInput label='Пароль' type='password' />
                </div>
                <LoginSubmitSection submitText={'Войти'} questionText={'Еще не зарегистрированы?'} linkText={'Регистрация'} linkRoute={'/signup'} />
            </form>
        </div>
    )
}

export default Login;