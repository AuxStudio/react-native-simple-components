import React from 'react';
import renderer from 'react-test-renderer';

import StatusBar from '../';

describe('StatusBar', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(<StatusBar backgroundColor="red" barStyle="dark-content" />),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<StatusBar />)).toMatchSnapshot();
  });
});
