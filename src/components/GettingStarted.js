/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Form, Button,
} from 'semantic-ui-react';

export default () => (
  <div>
    <h1 className="header">Getting Started</h1>
    <ol className="bodyText">
      <li>Find a location - It’s best to choose a location that is shaded or covered</li>
      <li>Decide on a compost container. Ex. Tumbling Composter, Standing Composter, Wooden Box</li>
      <li>Layer the bottom with straw or small twigs to aerate the compost</li>
      <li>Add approximately 10:1 ratio of carbon-rich to nitrogen-rich material. Shred or chop organic material for faster decomposition.</li>
      <li>Install Compostr hardware on your compost container, and start the device using our app</li>
      <li>Let it brew! Use the Compostr app notifications to let you know when to make changes to your compost</li>
    </ol>
    <h1 className="header">Start Your Compost</h1>
    <Form>
      <Form.Group>
        <Form.Field width={12} inline>
          <label htmlFor="projectName">Project Name</label>
          <input placeholder="Project Name" name="projectName" />
        </Form.Field>
      </Form.Group>
      <h3>Nitrogen Rich</h3>
      <Form.Group>
        <Form.Checkbox label="Grass Clippings" width={4} />
        <Form.Checkbox label="Vegetable Peels" width={4} />
        <Form.Checkbox label="Fruit Peels" width={4} />
        <Form.Checkbox label="Coffee Grounds" width={4} />
        <Form.Checkbox label="Tea Bags" width={4} />
        <Form.Checkbox label="Egg Shells" width={4} />
      </Form.Group>
      <h3>Carbon Rich</h3>
      <Form.Group>
        <Form.Checkbox label="Twigs" width={4} />
        <Form.Checkbox label="Bark" width={4} />
        <Form.Checkbox label="Mulch" width={4} />
        <Form.Checkbox label="Manure" width={4} />
        <Form.Checkbox label="Dry Leaves" width={4} />
        <Form.Checkbox label="Cardboard" width={4} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);
