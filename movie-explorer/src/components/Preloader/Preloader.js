import React from 'react'
import './Preloader.css'

const Preloader = ( {isActive} ) => {
    return (
        <div className={isActive ? 'preloader' : 'preloader preloader__disabled'}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader;
