import { useState, useEffect } from 'react';
import axios from 'axios';
import { dataApi } from '../constants';

export default (num) => {
  // const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line prefer-template
    axios.get(dataApi + num, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        setData(res.data);
      });
    // .catch((err) => setErrors(err));
  }, [num]);

  return (
    data
  );
};
