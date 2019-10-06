import React, { Component } from 'react';
import '../styles/App.css';
// import Logo from '../images/compostr-logos_black.png';

// const Logo = require('../images/compostr-logos_black.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Compostr',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="header">
        <h1>{title}</h1>
        <p className="font">The tool that makes composting Mulch Better.</p>
        <p className="descriptionFont">This tool does this realy awesome award winning thing that everyone is talking about. </p>
      </div>
    );
  }
}

export default Header;
