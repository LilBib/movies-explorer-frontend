import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import UnderlineGrey from "../UnderlineGrey/UnderlineGrey";
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm (props) {
    return (
        <div className="SearchForm">
            <div className="searchform__container">
                <img src={searchIcon} alt='иконка лупы поиска' className="searchform__icon" />
                <input type='text' placeholder="Фильм" className="searchform__input"></input>
                <button type="submit" className="searchform__button"></button>
            </div>
            <UnderlineGrey />
            <Checkbox onCheckboxClick={props.onCheckboxClick} isCheckboxActive={props.isCheckboxActive} />
        </div>
    )
}

export default SearchForm