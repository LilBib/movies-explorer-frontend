import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import UnderlineGrey from "../UnderlineGrey/UnderlineGrey";
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm (props) {
    const [query, setQuery] = React.useState('');
    const [isDirty, setDirty] = React.useState(false);
    function handleInputChange (e) {
        setQuery(e.target.value)
        setDirty(true)
    }
    function handleSubmit (e) {
        e.preventDefault();
        if (!isDirty&& props.searchQuery) {
            props.onSearch(props.searchQuery);
        } else props.onSearch(query);
    }
    return (
        <div className="SearchForm">
            <form className="searchform__container" noValidate  onSubmit={handleSubmit}>
                <img src={searchIcon} alt='иконка лупы поиска' className="searchform__icon" />
                <input type='text' placeholder="Фильм" className="searchform__input" required onChange={handleInputChange} defaultValue={props.searchQuery} />
                <button type="submit" className="searchform__button"></button>
            </form>
            <UnderlineGrey />
            <Checkbox onCheckboxClick={props.onCheckboxClick} isCheckboxActive={props.isCheckboxActive} />
        </div>
    )
}

export default SearchForm