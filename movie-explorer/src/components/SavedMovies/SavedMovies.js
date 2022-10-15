import React, {useState, useEffect} from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'

function SavedMovies (props) {
    const [foundSavedMovies, setFoundSavedMovies] = useState([]);
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
    const [isCheckboxActive, setCheckbox] = useState(false);
    useEffect(() => {
        setFoundSavedMovies(props.savedMovies)
    },[props.savedMovies])
    useEffect(()=> {
        if(isCheckboxActive) {
            setFilteredSavedMovies(foundSavedMovies.filter(movie=>movie.duration<40))
        } else {
            setFilteredSavedMovies(foundSavedMovies)
        }
    },[isCheckboxActive, foundSavedMovies])
    const onSearch = (str) => {
        setFoundSavedMovies(props.savedMovies.filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase())))
        if (str==='') {
            setFoundSavedMovies(props.savedMovies)
        }
    }
    const onCheckboxClick = () => {
        setCheckbox(!isCheckboxActive);
    }
    return (
    <main>
        <section className="SavedMovies">
            <div className="movies__container">
                <SearchForm onCheckboxClick={onCheckboxClick} isCheckboxActive={isCheckboxActive} onSearch={onSearch} saved={props.saved} />
                <MoviesCardList movies={filteredSavedMovies} appWidth = {props.appWidth} isMovieCardListMounted={props.isMovieCardListMounted} setMoviesCardListMounted={props.setMoviesCardListMounted} isPreloaderActive={props.isPreloaderActive} onSaveMovie={props.onSaveMovie} savedMovies={props.savedMovies} saved={props.saved} />
            </div>
        </section>
    </main>
    
    )
}

export default SavedMovies;