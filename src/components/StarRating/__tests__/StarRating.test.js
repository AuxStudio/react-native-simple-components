/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from '../';

// TODO: it should return a value based on index on press
it('renders a StarRating', () => {
  expect(
    renderer.create(
      <StarRating
        rating={3}
        handlePress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a StarRating with no props', () => {
  expect(renderer.create(<StarRating />)).toMatchSnapshot();
});
/* eslint-enable */
