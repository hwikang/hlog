import React from 'react';
import './styles/App.css';
import Nav from './components/includes/Navs';
import Home from './components/Home';
import Post from './components/Post';
import Portfolio from './components/Portfolio';
import PortfolioAdd from './components/portfolio/AddPortfolio';

import getContent from './components/post/GetContent'
import {BrowserRouter , Route } from 'react-router-dom';
import PortfolioDetail from './components/portfolio/PortfolioDetail';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" component = {Nav} />

          <Route exact path="/" component = {Home} />

          <Route exact path="/post" component = {Post} />

          <Route path="/post/:contentId" component ={getContent} />

          <Route exact path="/portfolio" component = {Portfolio} />
          <Route path="/portfolio/add" component = {PortfolioAdd} />
          <Route path="/portfolio/:portfolioId" component={PortfolioDetail} />
        </BrowserRouter>

      </div>
    );
  }

}

export default App;
