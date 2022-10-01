import React from "react";
import Movie from "../Movie/Movie";
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
    },[])
    
    
    return (
        <>
            <div className="MoviesCardList">
                {
                    props.movies.map((movie,i) =>{
                        if (i>=maxElemsOnPage){
                            return null;
                        }
                        return (<Movie nameRU={movie.nameRU} duration={movie.duration} thumbnail={movie.thumbnail} key={movie._id} />)
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