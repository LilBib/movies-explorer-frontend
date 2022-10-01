import React from "react";
import './Checkbox.css'

function Checkbox (props) {
    return (
        <div className="Checkbox">
            <div className={props.isCheckboxActive ? `checkbox checkbox__active` : `checkbox`} onClick={props.onCheckboxClick} />
            <label className="checkbox__label">Короткометражки</label>
        </div>
    )
}

export default Checkbox;