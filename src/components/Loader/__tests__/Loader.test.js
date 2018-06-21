import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateOpacity: 'AnimateOpacity',
  AnimateTranslateX: 'AnimateTranslateX',
}));

import Loader from '../'; // eslint-disable-line

describe('Loader', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <Loader
          width={200}
          height={10}
          color="red"
          duration={500}
          style={{ backgroundColor: 'blue' }}
          containerStyle={{ backgroundColor: 'green' }}
          wrapperStyle={{ backgroundColor: 'purple' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<Loader />)).toMatchSnapshot();
  });
});
