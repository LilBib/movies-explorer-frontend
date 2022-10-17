import React from "react";
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound () {
    const navigate = useNavigate();
    const onReturnClick = () => {
        navigate(-1);
    }
    return (
        <div className="NotFound">
            <p className="notfound__err-code">404</p>
            <p className="notfound__text">Страница не найдена</p>
            <p className="notfound__return-button" onClick={onReturnClick}>Назад</p>
        </div>
    )
}

export default NotFound;