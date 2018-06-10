/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Label from '../';

it('renders a Label', () => {
  expect(
    renderer.create(
      <Label
        handlePress={jest.fn()}
        iconName="check"
        text="Test"
        showShadow
        iconStyle={{ color: 'red' }}
        textStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a Label with custom icon', () => {
  expect(renderer.create(<Label customIcon={<MaterialIcon name="check" />} />)).toMatchSnapshot();
});

it('renders a Label with no props', () => {
  expect(renderer.create(<Label />)).toMatchSnapshot();
});
/* eslint-enable */
