/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ButtonIcon from '../ButtonIcon';

it('renders a ButtonIcon', () => {
  expect(
    renderer.create(
      <ButtonIcon
        iconName="check"
        handlePress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        showShadow
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a ButtonIcon with a customIcon', () => {
  expect(
    renderer.create(<ButtonIcon customIcon={<MaterialIcon name="check" />} />),
  ).toMatchSnapshot();
});

it('renders a disabled ButtonIcon', () => {
  expect(renderer.create(<ButtonIcon disabled />)).toMatchSnapshot();
});

/* eslint-enable */
