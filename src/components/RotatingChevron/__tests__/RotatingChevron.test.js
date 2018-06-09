/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateRotate: 'AnimateRotate',
}));

import RotatingChevron from '../RotatingChevron';

it('renders a RotatingChevron', () => {
  expect(
    renderer.create(
      <RotatingChevron
        handlePress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        showShadow
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
        wrapperStyle={{ backgroundColor: 'green' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a RotatingChevron with no props', () => {
  expect(renderer.create(<RotatingChevron />)).toMatchSnapshot();
});
/* eslint-enable */
