import React from 'react';
import {Link} from 'react-router-dom';
import PortfolioList from './portfolio/PortfolioList';
class Portfolio extends React.Component{
    state ={
        portfolios:''
    }
    componentDidMount(){
        this.fetchAll();
    }
    fetchAll(){
        this.callApi()
        .then(result=>{
           // console.log(result)
            this.setState({
                portfolios:result.portfolio
            });
        })
        .catch(err=>console.log(err));
    }

    callApi = async ()=>{
        const res = await fetch('/api/portfolio');
        const body = await res.json();
        return body;
    }
    render(){
        //console.log(this.state.portfolios)
        if(this.state.portfolios){
            return(
                <div>                    
                    <Link to="portfolio/add">
                        <div className=" d-flex justify-content-end">
                          <button className="btn btn-primary btn-lg rounded-circle">Add</button>
                        </div>
                    </Link>
                    <PortfolioList portfolios={this.state.portfolios}/>
                </div>
            )
        }
        return <div>loading...</div>
        
    }
}

export default Portfolio;