import React from 'react';
import Navs from './Navs'
import headerImage from '../img/header_image.png';
import style from '../styles/HeaderComponent.css';
const HederComponent = () => {
    return (
        <div>
            HeaderComponent
            <Navs />
            <div className="header-image">
                <img src={headerImage} />
            </div>
        </div>
    )
}

export default HederComponent;
