/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateRotate: 'AnimateRotate',
}));

import RotatingChevron from '../';

it('renders a RotatingChevron', () => {
  const component = renderer.create(
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
  );
  expect(component).toMatchSnapshot();
});

it('renders a RotatingChevron with no props', () => {
  expect(renderer.create(<RotatingChevron />)).toMatchSnapshot();
});

it('renders a RotatingChevron and toggles rotate', () => {
  const component = renderer.create(
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
  );
  const instance = component.getInstance();
  instance.toggleRotate();
  expect(instance.state.shouldRotate).toBe(true);
});
/* eslint-enable */
