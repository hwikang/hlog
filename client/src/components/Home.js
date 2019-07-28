import React from 'react';
import HeaderComponent from './home/HeaderComponent';
import PortfolioComponent from './home/PortfolioComponent';
import PostComponent from './home/PostComponent';

import {connect} from 'react-redux';
import {fetchHome} from '../actions';
class Home extends React.Component {

    componentDidMount(){
        //console.log(this.props)
        this.props.fetchHome();
      }
    render() {
        if(this.props.blogs){
            return (
                <div>
                    <div className="header-component">
                        <HeaderComponent />
                    </div>
                    <div className="portfolio-component">
                        <PortfolioComponent portfolios={this.props.portfolios} />
                    </div>
                    <div className="post-component">
                        <PostComponent blogs={this.props.blogs} />
                    </div>                
                </div>
            )
        }
        else{
            return <div>loading...</div>
        }
    }
}
const mapStateToProps = state =>{
  //  console.log(state)
    return {
        blogs:state.home.blogs,
        portfolios:state.home.portfolios
    }
}
export default connect(mapStateToProps,{fetchHome})(Home);