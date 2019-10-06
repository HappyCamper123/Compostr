import React, { Component } from 'react';
import '../styles/App.css';
// import Logo from '../images/compostr-logos_black.png';

// const Logo = require('../images/compostr-logos_black.png');

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="image">
        <h1>{title}</h1>
        <img className="logo" src="https://brittanyellichpublic.s3-us-west-2.amazonaws.com/image.png" alt="logo" />
        <p className="footer">Happy rotting!</p>
      </div>
    );
  }
}

export default Image;
