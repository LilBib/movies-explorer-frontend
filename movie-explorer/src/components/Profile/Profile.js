import React from "react";
import UnderlineGrey from "../UnderlineGrey/UnderlineGrey";
import './Profile.css'

function Profile ({ name, email, setName, setEmail, onLogOut, onUpdateUser }) {
    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }
    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdateUser();
    }

    return (
        <main>
            <section className="Profile">
                <form name="change-profile-form" className="profile__form" noValidate>
                    <h2 className="profile__greeting">{`Привет, ${name}!`}</h2>
                    <div className="profile__input-container">
                        <label htmlFor="name" className="profile__input-label">Имя</label>
                        <input type="text" id="name" className="profile__input" defaultValue={name} onChange={handleNameChange} />
                    </div>
                    <UnderlineGrey />
                    <div className="profile__input-container">
                        <label htmlFor="email" className="profile__input-label">E-mail</label>
                        <input type="text" id="email" className="profile__input" defaultValue={email} onChange={handleEmailChange} />
                    </div>
                    <button className="profile__submit-button">
                        <p className="profile__submit-button-text" onClick={handleUpdate}>Редактировать</p>
                    </button>
                    <p className="profile__logout" onClick={onLogOut}>Выйти из аккаунта</p>
                </form>
            </section>
        </main>
        
    )
}

export default Profile