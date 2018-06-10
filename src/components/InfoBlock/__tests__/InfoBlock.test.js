/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

import InfoBlock from '../';

it('renders a InfoBlock', () => {
  expect(
    renderer.create(
      <InfoBlock
        title="Title"
        description="Description"
        titleTextStyle={{ color: 'red' }}
        descriptionTextStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a InfoBlock with no props', () => {
  expect(renderer.create(<InfoBlock />)).toMatchSnapshot();
});
/* eslint-enable */
