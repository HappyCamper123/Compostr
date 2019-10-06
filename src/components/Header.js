import React, { Component } from 'react';
import '../styles/App.css';
import Image from './Image';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="headerContainer">
        <Image />
        <p>The tool that makes composting Mulch Better.</p>
      </div>
    );
  }
}

export default Header;
