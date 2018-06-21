import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from '../';

// TODO: it should return a value based on index on press
describe('StarRating', () => {
  it('renders with all props', () => {
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

  it('renders with minimum required props', () => {
    expect(renderer.create(<StarRating />)).toMatchSnapshot();
  });
});
