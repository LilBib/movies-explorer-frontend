import React from "react";
import './Movie.css'

function Movie ({duration, nameRU, thumbnail}) {
    const [isLiked, setLike] = React.useState(true);
    const onLikeClick = () => {
        setLike(!isLiked)
    }
    return (
        <div className="Movie">
            <div className="movie__info-container">
                <div>
                    <p className="movie__title">{nameRU}</p>
                    <p className="movie__duration">{duration}</p>
                </div>
                <div className={isLiked ? `movie__like movie__like_active` : `movie__like`} onClick={onLikeClick}></div>
            </div>
            <img src={thumbnail} alt='Постер к фильму' className="movie__image" />
        </div>
    )
}

export default Movie;