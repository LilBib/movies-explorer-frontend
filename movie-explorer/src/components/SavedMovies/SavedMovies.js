import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'

function SavedMovies (props) {
    return (
    <main>
        <section className="SavedMovies">
            <div className="movies__container">
                <SearchForm onCheckboxClick={props.onCheckboxClick} isCheckboxActive={props.isCheckboxActive} onSearch={props.onSearch} saved={props.saved} />
                <MoviesCardList movies={props.movies} appWidth = {props.appWidth} isMovieCardListMounted={props.isMovieCardListMounted} setMoviesCardListMounted={props.setMoviesCardListMounted} isPreloaderActive={props.isPreloaderActive} onSaveMovie={props.onSaveMovie} savedMovies={props.savedMovies} saved={props.saved} />
            </div>
        </section>
    </main>
    
    )
}

export default SavedMovies;