import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateOpacity: 'AnimateOpacity',
  AnimateTranslateX: 'AnimateTranslateX',
}));

import LoadingText from '../'; // eslint-disable-line

describe('LoadingText', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <LoadingText
          text="Test"
          initialOpacityValue={0}
          finalOpacityValue={0.5}
          initialTranslateXValue={100}
          finalTranslateXValue={200}
          duration={500}
          textStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<LoadingText />)).toMatchSnapshot();
  });
});
