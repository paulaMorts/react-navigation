import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/react">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/test-not-found">Test Not Found</Link>
                </li>
                <li>
                    <Link to="/not-found">Not Found</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu