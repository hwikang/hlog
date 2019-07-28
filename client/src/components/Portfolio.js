import React from 'react';
import {Link} from 'react-router-dom';
import PortfolioList from './portfolio/PortfolioList';
import { connect } from 'react-redux';
import {fetchPortfolios} from '../actions'

class Portfolio extends React.Component{
    state ={
        portfolios:''
    }
    componentDidMount(){
        this.props.fetchPortfolios();
    }

    render(){
        let isAdmin = false
        if (this.props.isLogin) {
            if (this.props.isLogin.user.isAdmin) {
                isAdmin = true;
            }
        }
        console.log(this.props.portfolios)
        if(this.props.portfolios){
            return(
                <div>     
                    {isAdmin?               
                    <Link to="portfolio/add">
                        <div className=" d-flex justify-content-end">
                          <button className="btn btn-primary btn-lg rounded-circle">Add</button>
                        </div>
                    </Link>
                    :""}
                    <PortfolioList portfolios={this.props.portfolios}/>
                </div>
            )
        }
        return <div>loading...</div>
        
    }
}
const mapStateToProps =(state)=>{
    return {
        isLogin:state.isLogin,
        portfolios:state.portfolios
    }
}
export default connect(mapStateToProps,{fetchPortfolios})(Portfolio);