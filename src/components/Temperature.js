import React, { Component } from 'react';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="temperature">
        <h1>{title}</h1>
        <p className="tempFont">Temperature: </p>
        <p className="p1font">When the temperature of the compost rises higher than MADE_UP_NUM, </p>
      </div>
    );
  }
}

export default Temperature;
