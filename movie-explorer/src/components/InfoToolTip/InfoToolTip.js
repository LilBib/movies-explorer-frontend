import React from "react";
import successUnion from '../../images/infotooltip_success_icon.svg';
import failUnion from '../../images/infotooltip_fail_icon.svg';
import './InfoToolTip.css';
function InfoToolTip (props) {
    React.useEffect(() => {

        const closeByEscape = (e) => {
            if ( e.key === 'Escape' ) {
                props.setOpen(false)
            }
        }

        if(props.isOpen){window.addEventListener('keydown', closeByEscape)}
        return(()=>{window.removeEventListener('keydown', closeByEscape)})
    },[props])

    const closeByCLick = (e) => {
        if ( e.target.classList.contains('InfoToolTip') ) {
            props.setOpen(false)
        }
    }
    const closeByButtonCLick = () => {
        props.setOpen(false);
    } 

    return (
        <div className={`InfoToolTip ${props.isOpen && 'InfoToolTip_opened'}`} onClick={closeByCLick} >
            <div className='infotooltip__container'>
                <button type="button" className="infotooltip__close-icon" onClick={closeByButtonCLick}></button>
                <img className="infotooltip__union" src={`${props.isSucceed ? successUnion : failUnion}`} alt='иконка, сообщающая об (не)успешности авторизации' />
                <h2 className="infotooltip__alert">{`${props.isEmailConflicted?'Пользователь с такой почтой уже существует!':(props.isSucceed ? 'Вы успешно отредактировали профиль!' : `Что-то пошло не так! Попробуйте ещё раз.`)}`}</h2>
            </div>
        </div>
    )
}

export default InfoToolTip;