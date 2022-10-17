import React from "react";
import "./PortfolioLink.css";

function PortfolioLink (props) {
    return (
        <div className="PortfolioLink">
            <a className="aboutme__portfolio-link" target="_blank" rel="noopener noreferrer" href={props.link}>
                <p className="aboutme__portfolio-link-text">{props.name}</p>
                <div className="aboutme__arrow"></div>
            </a>
            
        </div>
    )
}

export default PortfolioLink;