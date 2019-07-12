import React from 'react';
import './styles/App.css';
import Nav from './components/includes/Navs';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/login/Register';
import Post from './components/Post';
import AddPost from './components/post/AddPost';
import EditContent from './components/post/EditContent';
import Portfolio from './components/Portfolio';
import AddPortfolio from './components/portfolio/AddPortfolio';
import EditPortfolio from './components/portfolio/EditPortfolio';

import GetContent from './components/post/GetContent';
import PortfolioDetail from './components/portfolio/PortfolioDetail';

import {BrowserRouter , Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    categories: ['JS', 'React.js', 'Node.js', 'CS', '일상']
  
}
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" component = {Nav} /> 

          <Route exact path="/" component = {Home} />

          <Route exact path="/login" component = {Login} />
          <Route exact path="/login/register" component = {Register} />

          <Route exact path="/post" component = {Post}  />
          <Route path="/post/add"  component={AddPost} />
          <Route exact path="/post/:contentId" component ={GetContent} />
          <Route path="/post/edit/:contentId" render={((match)=> <EditContent match={match}/>)}/>
          {/* <Route path="/post/delete/:contentId" component ={DeleteContent}/> */}
          
          <Route exact path="/portfolio" component = {Portfolio} />
          <Route exact={true} path="/portfolio/add" component = {AddPortfolio} />
          <Route exact={true} path="/portfolio/:portfolioId" component={PortfolioDetail} />
          <Route path="/portfolio/edit/:portfolioId" component={EditPortfolio} />
          
        </BrowserRouter>

      </div>
    );
  }

}

export default App;
