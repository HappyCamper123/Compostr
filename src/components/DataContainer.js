/* eslint-disable react/no-access-state-in-setstate */
import React, { useState, useEffect } from 'react';
import CompostDataApi from '../services/CompostDataApi';
import Humidity from './Humidity';
import Temperature from './Temperature';
import '../styles/App.css';

function DataContainer() {
  const [data, setData] = useState({ compostData: [], isFetching: false });

  useEffect(() => {
    const fetchCompostData = async () => {
      try {
        setData({ compostData: data.compostData, isFetching: true });
        const response = CompostDataApi((60));
        setData({ compostData: response, isFetching: false });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        setData({ compostData: data.compostData, isFetching: false });
      }
    };
    fetchCompostData();
  });

  return (
    <div>
      <div className="column">
        <Humidity data={data.compostData} isFetching={data.isFetching} />
      </div>
      <div className="column">
        <Temperature />
      </div>
    </div>
  );
}

export default DataContainer;
