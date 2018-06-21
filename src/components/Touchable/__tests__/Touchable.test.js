import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Touchable from '../';

describe('Touchable', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <Touchable
          onPress={jest.fn()}
          onLongPress={jest.fn()}
          androidRipple
          androidRippleColor="red"
          androidRippleBorderless
          disabled
          style={{ backgroundColor: 'red' }}
        >
          <View />
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<Touchable />)).toMatchSnapshot();
  });

  it('renders with no feedback', () => {
    expect(
      renderer.create(
        <Touchable disabledFeedback>
          <View />
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });
});
