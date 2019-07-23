import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="/" className="brand-logo">Google Books</a>
                        <ul id="nav-mobile" className="right">
                            {/* TODO: Make links active according to the page */}
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/saved">Saved</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;