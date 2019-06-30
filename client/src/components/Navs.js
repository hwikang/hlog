import React from 'react';
import style from '../styles/Navs.css'
const Navs = () => {
    return (
        <div className="Navs">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Portfolio </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="api/post">POST </a>
                </li>

            </ul>
        </div>
    )
}

export default Navs;
