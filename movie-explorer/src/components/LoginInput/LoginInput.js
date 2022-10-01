import React from "react";
import './LoginInput.css';

function LoginInput ({ label, type }) {
    return (
        <div className="LoginInput">
            <label className="logininput__label" htmlFor={label}>{label}</label>
            <input className="logininput__input" type={type} id={label} />
        </div>
    )
}

export default LoginInput;