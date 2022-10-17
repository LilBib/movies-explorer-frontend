import React from "react";
import './LoginHead.css';

function LoginHead ({ phrase, onLogoClick }) {
    return (
        <div className="LoginHead">
            <div className="loginhead__logo" onClick={onLogoClick} />
            <p className="loginhead__greeting">{phrase}</p>
        </div>
    )
}

export default LoginHead;