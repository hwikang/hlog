import React from 'react';
import headerImage from 'img/header_image.png';
import 'styles/HeaderComponent.css';
const HederComponent = () => {
    return (
        <div className="header">            
            <div className="header-image row justify-content-center">
                <div className="header-text">
                    <span className="header-text-main">HWIKANG</span>
                    <span className="header-text-sub">Web Portfolio</span>

                </div>
            </div>
        </div>
    )
}

export default HederComponent;
