import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="test">
        <h1>{title}</h1>
        <p className="humFont">Humidity: </p>
        <p className="p1font">When the humidity data is something, do this. </p>
      </div>
    );
  }
}

export default Test;
