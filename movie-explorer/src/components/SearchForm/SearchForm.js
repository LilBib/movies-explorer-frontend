import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import UnderlineGrey from "../UnderlineGrey/UnderlineGrey";
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm (props) {
    const [query, setQuery] = React.useState('')
    function handleInputChange (e) {
        setQuery(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault();
        props.onSearch(query);
    }
    return (
        <div className="SearchForm">
            <form className="searchform__container" noValidate  onSubmit={handleSubmit}>
                <img src={searchIcon} alt='иконка лупы поиска' className="searchform__icon" />
                <input type='text' placeholder="Фильм" className="searchform__input" required onChange={handleInputChange} />
                <button type="submit" className="searchform__button"></button>
            </form>
            <UnderlineGrey />
            <Checkbox onCheckboxClick={props.onCheckboxClick} isCheckboxActive={props.isCheckboxActive} />
        </div>
    )
}

export default SearchForm