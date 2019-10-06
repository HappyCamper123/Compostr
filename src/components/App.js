import React, { Component } from 'react';
import Header from './Header';
import Temperature from './Temperature';
import Test from './Test';
import Image from './Image';

import '../styles/App.css';
// import '../styles/Logo.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="column">
          <Test />
        </div>
        <div className="column">
          <Temperature />
        </div>
        <div className="footer">
          <Image />
        </div>
      </div>
    );
  }
}

export default App;
