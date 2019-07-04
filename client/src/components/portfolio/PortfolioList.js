//list of portfolios

import React from 'react';
import PortfolioDetail from './PortfolioDetail';
const PortfolioList = ({portfolios}) =>{
    console.log("on list = "+portfolios)
    if(portfolios){
        console.log("if...")
        const list = portfolios.map(portfolio=>{
            return(
                <div key={portfolio._id}>
                    <PortfolioDetail  portfolio={portfolio}/>
                </div>
            )
        })
        return(
            <div>
                {list}
            </div>
        )
    }else{
        return <div> no portfolio </div>
    }
    
    
    
    
}

export default PortfolioList;