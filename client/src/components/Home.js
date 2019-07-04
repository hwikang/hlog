import React from 'react';
import HeaderComponent from './home/HeaderComponent';
import PortfolioComponent from './home/PortfolioComponent';
import PostComponent from './home/PostComponent';

class Home extends React.Component {
    state={
        blogs:''
    }
    componentDidMount(){
        this.callApi()
        .then(result=>{
            this.setState({
                blogs:result.blogs
            });
           // console.log(result.blogs)
        })
        .catch(err=>console.log(err));
    }
    callApi = async () =>{
        const res = await fetch('/api');//response 반환
        const body = res.json();  //promise반환
        return body;
    }
    
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
                    <PostComponent blogs={this.state.blogs} />
                </div>                
            </div>
        )
    }
}

export default Home;