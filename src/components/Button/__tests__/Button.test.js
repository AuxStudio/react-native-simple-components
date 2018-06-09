import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Button from '../Button';

it('renders a Button', () => {
  expect(
    renderer.create(
      <Button
        iconName="check"
        text="Test"
        handlePress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        showShadow
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a Button with text left and icon right', () => {
  expect(
    renderer.create(<Button iconName="check" iconRight text="Test" textLeft />),
  ).toMatchSnapshot();
});

it('renders a Button with a customIcon', () => {
  expect(renderer.create(<Button customIcon={<MaterialIcon name="check" />} />)).toMatchSnapshot();
});

it('renders a Button with a loader', () => {
  expect(renderer.create(<Button showLoader loaderColor="red" />)).toMatchSnapshot();
});

it('renders a disabled Button', () => {
  expect(renderer.create(<Button disabled />)).toMatchSnapshot();
});

it('renders a Button with no props', () => {
  expect(renderer.create(<Button />)).toMatchSnapshot();
});
