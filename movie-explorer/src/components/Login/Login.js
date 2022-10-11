import React, {useState, useEffect} from "react";
import LoginHead from "../LoginHead/LoginHead";
import LoginInput from "../LoginInput/LoginInput";
import LoginSubmitSection from "../LoginSubmitSection/LoginSubmitSection";
import './Login.css';

function Login (props) {
    const [isEmailDirty, setEmailDirty] = useState(false);
    const [isPasswordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Некорректно введен E-mail');
    const [passwordError, setPasswordError] = useState('Некорректно введен пароль');
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setFormValid] = useState(false);
    useEffect(() => {
        if (isEmailValid && isPasswordValid) {
            setFormValid(true);
        } else setFormValid(false)
    },[isEmailValid, isPasswordValid])
    const onSignUp = (e) => {
        e.preventDefault();
        props.onSubmit(email, password);
    }
    return (
        <div className="Login">
            <LoginHead phrase='Рады видеть!' onLogoClick={props.onLogoClick} />
            <form name="login-form" className="login__form" noValidate onSubmit={onSignUp}>
                <div>
                    <LoginInput label='E-mail' type='text' isValid={isEmailValid} setValid={setEmailValid} isDirty={isEmailDirty} setDirty={setEmailDirty} error={emailError} value={email} setValue={setEmail} />
                    <LoginInput label='Пароль' type='password' isValid={isPasswordValid} setValid={setPasswordValid} isDirty={isPasswordDirty} setDirty={setPasswordDirty} error={passwordError} value={password} setValue={setPassword} />
                </div>
                <LoginSubmitSection isValid={isFormValid} submitText={'Войти'} questionText={'Еще не зарегистрированы?'} linkText={'Регистрация'} linkRoute={'/signup'} />
            </form>
        </div>
    )
}

export default Login;