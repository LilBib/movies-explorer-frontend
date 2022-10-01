import React from "react";
import UnderlineGrey from "../UnderlineGrey/UnderlineGrey";
import './Profile.css'

function Profile ({ name, email }) {
    const [currentName, setCurrentName] = React.useState(name);
    const [currentEmail, setCurrentEmail] = React.useState(email);
    const handleNameChange = (evt) => {
        setCurrentName(evt.target.value);
    }
    const handleEmailChange = (evt) => {
        setCurrentEmail(evt.target.value);
    }

    return (
        <div className="Profile">
            <form name="change-profile-form" className="profile__form" noValidate>
                <h2 className="profile__greeting">{`Привет, ${currentName}!`}</h2>
                <div className="profile__input-container">
                    <label htmlFor="name" className="profile__input-label">Имя</label>
                    <input type="text" id="name" className="profile__input" defaultValue={currentName} onChange={handleNameChange} />
                </div>
                <UnderlineGrey />
                <div className="profile__input-container">
                    <label htmlFor="email" className="profile__input-label">E-mail</label>
                    <input type="text" id="email" className="profile__input" defaultValue={currentEmail} onChange={handleEmailChange} />
                </div>
                <button className="profile__submit-button">
                    <p className="profile__submit-button-text">Редактировать</p>
                </button>
                <p className="profile__logout">Выйти из аккаунта</p>
            </form>
        </div>
    )
}

export default Profile