/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

jest.mock('react-native-simple-animators', () => ({
  AnimateScale: 'AnimateScale',
}));

import CheckBox from '../';

it('renders a CheckBox', () => {
  expect(
    renderer.create(
      <CheckBox
        isChecked
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

it('renders a CheckBox with a customIcon', () => {
  expect(
    renderer.create(<CheckBox customIcon={<MaterialIcon name="check" />} />),
  ).toMatchSnapshot();
});

it('renders a CheckBox with no props', () => {
  expect(renderer.create(<CheckBox />)).toMatchSnapshot();
});
/* eslint-enable */
