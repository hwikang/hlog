import React from 'react';
import Portfolio from './Portfolio'
class PortfolioComponent extends React.Component {

    render() {
        //console.log(this.props)
        if(this.props.portfolios){
            const arr = this.props.portfolios
            const portfolioList = arr.map((portfolio, index) => {
                return (
                    <div className="row" key={index} ><Portfolio portfolio={portfolio} /></div>
                )
            })
            return (
                <div>
                    {portfolioList}
                </div>
            )
        }
        return <div> fetching portfolios...</div>
        
        

    }
}

export default PortfolioComponent;
