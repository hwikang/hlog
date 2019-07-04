import React from 'react';
import './styles/App.css';
import Nav from './components/includes/Navs';
import Home from './components/Home';
import Post from './components/Post';
import getContent from './components/post/GetContent'
import {BrowserRouter , Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" component = {Nav} />

          <Route exact={true} path="/" component = {Home} />

          <Route exact={true} path="/post" component = {Post} />

          <Route path="/post/:contentId" component ={getContent} />
        </BrowserRouter>

      </div>
    );
  }

}

export default App;
