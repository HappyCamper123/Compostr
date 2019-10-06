/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Form, Button,
} from 'semantic-ui-react';

export default () => (
  <div>
    <h1 className="header">Getting Started</h1>
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
