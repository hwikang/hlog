import React from 'react';
import 'styles/Navs.css'
const Navs = () => {
    return (
        <div className="Navs">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/portfolio">Portfolio </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/post">POST </a>
                </li>

            </ul>
        </div>
    )
}

export default Navs;
