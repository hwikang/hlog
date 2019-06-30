import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import PortfolioComponent from './components/PortfolioComponent';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <PortfolioComponent />
      </div>
    );
  }

}

export default App;
