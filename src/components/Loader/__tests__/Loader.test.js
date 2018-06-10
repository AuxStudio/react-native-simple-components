/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateOpacity: 'AnimateOpacity',
  AnimateTranslateX: 'AnimateTranslateX',
}));

import Loader from '../';

it('renders a Loader', () => {
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

it('renders a Loader with no props', () => {
  expect(renderer.create(<Loader />)).toMatchSnapshot();
});
/* eslint-enable */
