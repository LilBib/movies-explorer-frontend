import React from "react";
import { Link } from "react-router-dom";
import './LoginSubmitSection.css';

function LoginSubmitSection ({ submitText, questionText, linkText, linkRoute }) {
    return (
        <div className="LoginSubmitSection">
            <button className="loginsubmitsection__button">{submitText}</button>
            <div className="loginsubmitsection__link-container">
                <p className="loginsubmitsection__link-question">{questionText}</p>
                <Link to={linkRoute} className='loginsubmitsection__link'>{linkText}</Link>
            </div>
        </div>
    )
}

export default LoginSubmitSection;