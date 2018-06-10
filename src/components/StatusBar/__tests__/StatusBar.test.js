/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

import StatusBar from '../';

it('renders a StatusBar', () => {
  expect(
    renderer.create(<StatusBar backgroundColor="red" barStyle="dark-content" />),
  ).toMatchSnapshot();
});

it('renders a StatusBar with no props', () => {
  expect(renderer.create(<StatusBar />)).toMatchSnapshot();
});
/* eslint-enable */
