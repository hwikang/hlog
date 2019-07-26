import React from 'react';
import Portfolio from './Portfolio'
class PortfolioComponent extends React.Component {
    state = {
        post: this.props.portfolios
    }


    render() {
        //console.log(this.props)
        if(this.state.post){
            const arr = this.state.post
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
