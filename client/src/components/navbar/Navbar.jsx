import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Input.module.css'
//Navbar Styles ↓
import '../../App.css'
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (

        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Videogames App
                    <i className="fas fa-code"></i>
                    </NavLink>
                    <form className={s.form} >
                        <input type="text"  placeholder='Search for a game'/>
                        <button>Search</button>
                    </form>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/upload"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Upload
                </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Favorites"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Favorites
                </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;