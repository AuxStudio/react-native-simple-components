/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Page from '../';

it('renders a Page', () => {
  expect(
    renderer.create(
      <Page verticalCenter horizontalCenter style={{ backgroundColor: 'red' }}>
        <View />
      </Page>,
    ),
  ).toMatchSnapshot();
});

it('renders a Page with testing prop', () => {
  expect(
    renderer.create(
      <Page testing style={{ backgroundColor: 'red' }}>
        <View />
      </Page>,
    ),
  ).toMatchSnapshot();
});

it('renders a Page with no props', () => {
  expect(renderer.create(<Page />)).toMatchSnapshot();
});
/* eslint-enable */
