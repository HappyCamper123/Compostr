import React from 'react';
import {
  Card, Grid, Image, Segment,
} from 'semantic-ui-react';
import CompostDataApi from '../services/CompostDataApi';

export default () => {
  const compostData = CompostDataApi(60);
  const firstData = {
    humidity: 0,
    temperature: 0,
    moisture: 0,
    id: '',
  };
  if (compostData.length > 0) {
    firstData.humidity = compostData[0].humidity;
    firstData.temperature = compostData[0].temperature;
    firstData.moisture = compostData[0].moisture;
    firstData.id = compostData[0].id;
  }
  let tempToHigh = false;
  let tempToLow = false;
  let humidityToHigh = false;
  let humidityToLow = false;
  if (firstData.temperature !== 0 && firstData.temperature > 60) {
    tempToHigh = true;
  }
  if (firstData.temperature !== 0 && firstData.temperature < 10) {
    tempToLow = true;
  }
  if (firstData.temperature !== 0 && firstData.humidity > 80) {
    humidityToHigh = true;
  }
  if (firstData.temperature !== 0 && firstData.humidity < 60) {
    humidityToLow = true;
  }

  return (
    <div>
      <h1 className="header">Your Data</h1>
      <Grid columns={3} centered>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <Grid centered columns={2}>
              <Grid.Column>
                <Card fluid color={humidityToHigh || humidityToLow ? 'red' : 'green'}>
                  <Image src="https://image.flaticon.com/icons/svg/219/219816.svg" wrapped />
                  <Card.Content>
                    <Card.Header>Current Humidity (%)</Card.Header>
                    <Card.Description>
                      <p className="datapoint">{firstData.humidity !== 0 ? firstData.humidity.toPrecision(3) : ''}</p>
                      <p className="tempHumidityWarning">{humidityToHigh ? 'Humidity too high! Time to open the container!' : null}</p>
                      <p className="tempHumidityWarning">{humidityToLow ? 'Humidity too low! Time to add water!' : null}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid color={tempToHigh || tempToLow ? 'red' : 'green'}>
                  <Image src="https://image.flaticon.com/icons/svg/1086/1086431.svg" wrapped />
                  <Card.Content>
                    <Card.Header>Current Temperature (C)</Card.Header>
                    <Card.Description>
                      <p className="datapoint">{firstData.temperature !== 0 ? firstData.temperature.toPrecision(3) : ''}</p>
                      <p className="tempHumidityWarning">{tempToHigh ? 'Temperature too high! Time to turn your compost!' : null}</p>
                      <p className="tempHumidityWarning">{tempToLow ? 'Temperature too low! Time to add more organic matter!' : null}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    </div>

  );
};
