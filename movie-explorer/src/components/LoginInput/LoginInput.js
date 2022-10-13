import React, { useEffect } from "react";
import validator from "validator";
import './LoginInput.css';

function LoginInput ({ label, type, setValue, isDirty, setDirty, error, value, isValid, setValid }) {
    useEffect(() => {
        if (label==='E-mail') {
            setValid(validator.isEmail(value))
        }
        if (label==='Пароль') {
            setValid(value.length>0)
        }
        if (label==='Имя') {
            setValid(value.length>1 && value.length<31)
        }
    },[value])
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    const handleBlur = (e) => {
        setDirty(true)
    }
    return (
        <div className="LoginInput">
            <label className="logininput__label" htmlFor={label}>{label}</label>
            <input className="logininput__input" value={value} type={type} id={label} onChange={handleInputChange} onBlur={handleBlur} />
            {(isDirty && error && !isValid) && <span className="logininput__error">{error}</span>}
        </div>
    )
}

export default LoginInput;