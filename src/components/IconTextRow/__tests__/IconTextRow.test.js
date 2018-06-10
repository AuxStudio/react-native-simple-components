/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import IconTextRow from '../';

it('renders a IconTextRow', () => {
  expect(
    renderer.create(
      <IconTextRow
        iconName="check"
        text="Test"
        handlePress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        iconStyle={{ color: 'red' }}
        textStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a IconTextRow with custom icon', () => {
  expect(
    renderer.create(<IconTextRow customIcon={<MaterialIcon name="check" />} />),
  ).toMatchSnapshot();
});

it('renders a IconTextRow with no props', () => {
  expect(renderer.create(<IconTextRow />)).toMatchSnapshot();
});
/* eslint-enable */
