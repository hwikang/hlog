import React from 'react';
import {Link} from 'react-router-dom';
import PortfolioList from './portfolio/PortfolioList';
import { connect } from 'react-redux';
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
        let isAdmin = false
        if (this.props.isLogin) {
            if (this.props.isLogin.user.isAdmin) {
                isAdmin = true;
            }
        }
        console.log(isAdmin)
        if(this.state.portfolios){
            return(
                <div>     
                    {isAdmin?               
                    <Link to="portfolio/add">
                        <div className=" d-flex justify-content-end">
                          <button className="btn btn-primary btn-lg rounded-circle">Add</button>
                        </div>
                    </Link>
                    :""}
                    <PortfolioList portfolios={this.state.portfolios}/>
                </div>
            )
        }
        return <div>loading...</div>
        
    }
}
const mapStateToProps =(state)=>{
    return {isLogin:state.isLogin}
}
export default connect(mapStateToProps)(Portfolio);