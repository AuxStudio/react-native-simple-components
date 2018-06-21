import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Page from '../';

describe('Page', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <Page verticalCenter horizontalCenter style={{ backgroundColor: 'red' }}>
          <View />
        </Page>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<Page />)).toMatchSnapshot();
  });

  it('renders with testing prop', () => {
    expect(
      renderer.create(
        <Page testing style={{ backgroundColor: 'red' }}>
          <View />
        </Page>,
      ),
    ).toMatchSnapshot();
  });
});
