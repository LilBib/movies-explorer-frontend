import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'

function Movies (props) {
    return (
    <main>
        <section className="Movies">
            <div className="movies__container">
                <SearchForm searchQuery={props.searchQuery} onCheckboxClick={props.onCheckboxClick} isCheckboxActive={props.isCheckboxActive} onSearch={props.onSearch} />
                <MoviesCardList movies={props.movies} appWidth = {props.appWidth} isMovieCardListMounted={props.isMovieCardListMounted} setMoviesCardListMounted={props.setMoviesCardListMounted} isPreloaderActive={props.isPreloaderActive} onSaveMovie={props.onSaveMovie} savedMovies={props.savedMovies} />
            </div>
        </section>
    </main>
    )
}

export default Movies;