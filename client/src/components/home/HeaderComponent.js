import React from 'react';
import headerImage from 'img/header_image.png';
import 'styles/HeaderComponent.css';
const HederComponent = () => {
    return (
        <div>            
            <div className="header-image">
                <img src={headerImage} alt="mainImage"/>
            </div>
        </div>
    )
}

export default HederComponent;
