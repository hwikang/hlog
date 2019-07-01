import React from 'react';
import Portfolio from './Portfolio'
class PortfolioComponent extends React.Component {
    state = {
        post: ""
    }
    

    render() {
       const arr= [1,2,3];
       const portfolioList = arr.map((portfoilo,index)=>{
            return (                
                <Portfolio key={index}/>                
            )
       })
        return (
            <div className="row">
               {portfolioList}
            </div>
        )

    }
}

export default PortfolioComponent;
