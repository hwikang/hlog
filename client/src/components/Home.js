import React from 'react';
import HeaderComponent from './home/HeaderComponent';
import PortfolioComponent from './home/PortfolioComponent';
import PostComponent from './home/PostComponent';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="header-component">
                    <HeaderComponent />
                </div>
                <div className="portfolio-component">
                    <PortfolioComponent />
                </div>
                <div className="post-component">
                    <PostComponent />
                </div>                
            </div>
        )
    }
}

export default Home;