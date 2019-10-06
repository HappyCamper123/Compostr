import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';
import CompostDataApi from '../services/CompostDataApi';


export default () => {
  const compostData = CompostDataApi(60).reverse();

  return (
    <Grid columns={3} centered>
      <Grid.Row>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={10}>
          <LineChart
            width={800}
            height={400}
            data={compostData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={10}>
          <LineChart
            width={800}
            height={400}
            data={compostData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};
