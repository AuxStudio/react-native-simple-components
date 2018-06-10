/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import HeaderBar from '../';

it('renders a HeaderBar', () => {
  expect(
    renderer.create(
      <HeaderBar
        showShadow
        statusBarColor="red"
        statusBarStyle="dark-content"
        leftIconName="check"
        handleLeftIconPress={jest.fn()}
        text="Test"
        rightIconName="close"
        handleRightIconPress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        leftIconStyle={{ color: 'red' }}
        textStyle={{ color: 'red' }}
        rightIconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
        wrapperStyle={{ backgroundColor: 'green' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a HeaderBar with a custom left component', () => {
  expect(
    renderer.create(<HeaderBar leftComponent={<MaterialIcon name="check" />} />),
  ).toMatchSnapshot();
});
it('renders a HeaderBar with a custom text component', () => {
  expect(
    renderer.create(<HeaderBar textComponent={<MaterialIcon name="check" />} />),
  ).toMatchSnapshot();
});
it('renders a HeaderBar with a custom right component', () => {
  expect(
    renderer.create(<HeaderBar rightComponent={<MaterialIcon name="check" />} />),
  ).toMatchSnapshot();
});
it('renders a HeaderBar with a text left', () => {
  expect(renderer.create(<HeaderBar text="Test" textLeft />)).toMatchSnapshot();
});
it('renders a HeaderBar with a text left', () => {
  expect(renderer.create(<HeaderBar text="Test" textRight />)).toMatchSnapshot();
});

it('renders a HeaderBar with no props', () => {
  expect(renderer.create(<HeaderBar />)).toMatchSnapshot();
});
/* eslint-enable */
