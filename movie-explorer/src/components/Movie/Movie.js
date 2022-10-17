import React from "react";
import './Movie.css'

function Movie ({saved, nameRU, nameEN, country, director, duration, year, description, image, thumbnail, trailerLink, movieId, _id, onSaveMovie, savedMovies}) {
    const [isLiked, setLike] = React.useState(false);
    React.useEffect(()=>{
        setLike(savedMovies.some(m=>m.nameRU.includes(nameRU)));
    },[]);
    const onLikeClick = (e) => {
        if (e.target.classList.contains(`movie__like`)) {
            onSaveMovie(nameRU, nameEN, country, director, duration, year, description, image, trailerLink, thumbnail, movieId, _id);
            setLike(!isLiked)
        }
    }
    const onCardClick = (e) => {
        if (!e.target.classList.contains(`movie__like`)) {
            window.open(`${trailerLink}`, '_blank')
        }
    }
    return (
        <div className="Movie" onClick={onCardClick}>
            <div className="movie__info-container">
                <div>
                    <p className="movie__title">{nameRU}</p>
                    <p className="movie__duration">{`${Math.trunc(duration/60)}ч ${duration - Math.trunc(duration/60)*60}мин`}</p>
                </div>
                <button className={saved ? 'movie__like movie__delete' : (isLiked ? `movie__like movie__like_active` : `movie__like`)} onClick={onLikeClick}></button>
            </div>
            <img src={thumbnail} alt='Постер к фильму' className="movie__image" />
        </div>
    )
}

export default Movie;