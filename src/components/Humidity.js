/* eslint-disable react/prop-types */
import React from 'react';

const Humidity = (props) => {
  const { data } = props;
  const mostRecent = data[0];
  let humidity = '';
  if (mostRecent) {
    humidity = mostRecent.humidity;
  }
  return (
    <div className="temperature">
      <h1>{humidity}</h1>
      <p className="tempFont">Humidity: </p>
      <p>{humidity}</p>
      <p className="p1font">When the temperature of the compost rises higher than MADE_UP_NUM, </p>
    </div>
  );
};

export default Humidity;
