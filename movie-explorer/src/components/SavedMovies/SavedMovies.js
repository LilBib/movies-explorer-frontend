import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'

function SavedMovies (props) {
    return (
    <div className="SavedMovies">
        <div className="movies__container">
            <SearchForm onCheckboxClick={props.onCheckboxClick} isCheckboxActive={props.isCheckboxActive} />
            <MoviesCardList movies={props.movies} appWidth = {props.appWidth} />
        </div>
    </div>
    )
}

export default SavedMovies;