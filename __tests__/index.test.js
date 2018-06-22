import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../';

// We only need to test one of the components for this test
describe('react-native-simple-components', () => {
  it('imports the module', () => {
    expect(renderer.create(<Button />)).toMatchSnapshot();
  });
});
