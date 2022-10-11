import React from "react";
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader"
import './MoviesCardList.css';

function MoviesCardList (props) {
    const [maxElemsOnPage, setMaxElemsOnPage] = React.useState(0);
    const onButtonClick = () => {
        if (props.appWidth>=0) {
            setMaxElemsOnPage(maxElemsOnPage+2)
        }
        if (props.appWidth>=1280) {
            setMaxElemsOnPage(maxElemsOnPage+3)
        }
    }
    React.useEffect(()=>{
        if (props.appWidth>0) {
            setMaxElemsOnPage(5);
        }
        if (props.appWidth>=768) {
            setMaxElemsOnPage(8);
        }
        if (props.appWidth>=1280) {
            setMaxElemsOnPage(12);
        }
    },[props.isMovieCardListMounted])
    React.useEffect(() => {
        if (props.saved) {
            props.setMoviesCardListMounted(true)
        }
    })
    
    return (
        <>  
            <Preloader isActive={props.isPreloaderActive} />
            <div className={props.isMovieCardListMounted ? "MoviesCardList" : "MoviesCardList MoviesCardList__disabled" }>
                {
                    props.movies.map((movie,i) =>{
                        if (i>=maxElemsOnPage){
                            return null;
                        }
                        return props.saved ? (<Movie nameRU={movie.nameRU} nameEN={movie.nameEN} country={movie.country} director={movie.director} duration={movie.duration} year={movie.year} description={movie.description} image={movie.image} trailerLink={movie.trailer} thumbnail={movie.image} onSaveMovie={props.onSaveMovie} movieId={movie.movieId} key={movie._id} savedMovies={props.savedMovies} _id={movie._id}/>) 
                        : (<Movie nameRU={movie.nameRU} nameEN={movie.nameEN} country={movie.country} director={movie.director} duration={movie.duration} year={movie.year} description={movie.description} image={`https://api.nomoreparties.co/${movie.image.url}`} trailerLink={movie.trailerLink} thumbnail={`https://api.nomoreparties.co/.${movie.image.url}`} onSaveMovie={props.onSaveMovie} movieId={movie.id} key={movie.id} savedMovies={props.savedMovies}/>)
                    })
                }
            </div>
            <div className={props.movies.length<=maxElemsOnPage ? "moviescardlist__button moviescardlist__button_hidden" : "moviescardlist__button"} onClick={onButtonClick}>
                <p className="moviescardlist__button-text">Ещё</p>
            </div>
        </>
        
    )
}

export default MoviesCardList;