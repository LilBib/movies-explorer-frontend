import React from "react";
import "./PortfolioLink.css";

function PortfolioLink (props) {
    return (
        <div className="PortfolioLink">
            <a className="aboutme__portfolio-link" href={props.link}>{props.name}</a>
            <div className="aboutme__arrow"></div>
        </div>
    )
}

export default PortfolioLink;