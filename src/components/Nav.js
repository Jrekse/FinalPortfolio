import React from "react";
import "../App.css";

function Nav(props){
    return (
        <nav className="navbar sticky-top navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand navText" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link navText" onClick={() => props.handlePageChange("AboutMe")} aria-current="page" href="#AboutMe">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navText" onClick={() => props.handlePageChange("Contact")} aria-current="page" href="#Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navText" onClick={() => props.handlePageChange("Gallary")} aria-current="page" href="#Gallary">Gallary</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;