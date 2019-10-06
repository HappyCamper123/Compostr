import React from 'react';
import {
  Grid, Image,
} from 'semantic-ui-react';

export default () => (
  <Grid centered columns={2} className="benefitsContainer">
    <Grid.Column width={3}>
      <Image src="https://image.flaticon.com/icons/svg/1466/1466050.svg" />
    </Grid.Column>
    <Grid.Column width={6}>
      <h1 className="header">Benefits</h1>
      <ul className="bodyText">
        <li>Reduce waste</li>
        <li>Provide food and habitat for beneficial bacteria, fungi, and bugs</li>
        <li>Reduce the need for chemical fertilizers</li>
        <li>Enrich your soil with nutrients</li>
        <li>Prepare good food for your garden</li>
      </ul>
    </Grid.Column>
  </Grid>
);
