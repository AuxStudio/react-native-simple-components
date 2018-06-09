/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Touchable from '../Touchable';

it('renders a Touchable', () => {
  expect(
    renderer.create(
      <Touchable
        onPress={jest.fn()}
        onLongPress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        style={{ backgroundColor: 'red' }}
      >
        <View />
      </Touchable>,
    ),
  ).toMatchSnapshot();
});

it('renders a Touchable with no feedback', () => {
  expect(
    renderer.create(
      <Touchable disabledFeedback>
        <View />
      </Touchable>,
    ),
  ).toMatchSnapshot();
});

it('renders a disabled Touchable', () => {
  expect(
    renderer.create(
      <Touchable disabled>
        <View />
      </Touchable>,
    ),
  ).toMatchSnapshot();
});

it('renders a Touchable with no props', () => {
  expect(renderer.create(<Touchable />)).toMatchSnapshot();
});
/* eslint-enable */
