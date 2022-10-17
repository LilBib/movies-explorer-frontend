import React, { useEffect, useState } from "react";
import LoginHead from "../LoginHead/LoginHead";
import LoginInput from "../LoginInput/LoginInput";
import LoginSubmitSection from "../LoginSubmitSection/LoginSubmitSection";
import './Register.css';

function Register (props) {
    const [isNameDirty, setNameDirty] = useState(false);
    const [isEmailDirty, setEmailDirty] = useState(false);
    const [isPasswordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Некорректно заполнено имя');
    const [emailError, setEmailError] = useState('Некорректно введен E-mail');
    const [passwordError, setPasswordError] = useState('Некорректно введен пароль');
    const [isNameValid, setNameValid] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setFormValid] = useState(false);
    useEffect(() => {
        if (isEmailValid && isPasswordValid && isNameValid) {
            setFormValid(true);
        } else setFormValid(false)
    },[isEmailValid, isPasswordValid, isNameValid])

    const onSignin = (e) => {
        e.preventDefault();
        props.onSubmit(name, email, password);
    }
    return (
        <div className="Register">
            <LoginHead phrase='Добро пожаловать!' onLogoClick={props.onLogoClick} />
            <form name="login-form" className="login__form" noValidate onSubmit={onSignin}>
                <div>
                    <LoginInput label='Имя' type='text' isValid={isNameValid} setValid={setNameValid} isDirty={isNameDirty} setDirty={setNameDirty} error={nameError} value={name} setValue={setName} />
                    <LoginInput label='E-mail' type='text' isValid={isEmailValid} setValid={setEmailValid} isDirty={isEmailDirty} setDirty={setEmailDirty} error={emailError} value={email} setValue={setEmail} />
                    <LoginInput label='Пароль' type='password' isValid={isPasswordValid} setValid={setPasswordValid} isDirty={isPasswordDirty} setDirty={setPasswordDirty} error={passwordError} value={password} setValue={setPassword} />
                </div>
                <LoginSubmitSection isValid={isFormValid} submitText={'Зарегистрироваться'} questionText={'Уже зарегистрированы?'} linkText={'Войти'} linkRoute={'/signin'} />
            </form>
        </div>
    )
}

export default Register;