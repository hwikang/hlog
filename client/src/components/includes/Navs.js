import React from 'react';
import 'styles/Navs.css';
import {Link} from 'react-router-dom';
const Navs = () => {
    return (
        <div className="Navs">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/portfolio">Portfolio </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/post">POST </Link>
                </li>

            </ul>
        </div>
    )
}

export default Navs;
